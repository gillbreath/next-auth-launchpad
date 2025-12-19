import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import pathData from "@/messages/en.json";
import { getTranslations } from "next-intl/server";

export default async function SignInPage(props: {
  provider: {
    id: string;
    name: string;
  };
}) {
  console.log("props", props);
  const t = {
    SignInPage: await getTranslations("SignInPage"),
  };
  const signInOptions = {
    redirectTo: "/" + pathData.DashboardPage.pagename,
  };
  return (
    <form
      key={props.provider.id}
      action={async () => {
        "use server";
        try {
          await signIn(props.provider.id, signInOptions);
        } catch (error) {
          // Signin can fail for a number of reasons, such as the user
          // not existing, or the user not having the correct role.
          // In some cases, you may want to redirect to a custom error
          if (error instanceof AuthError) {
            console.log(`error`, error);
            // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
          }

          // Otherwise if a redirects happens Next.js can handle it
          // so you can just re-thrown the error and let Next.js handle it.
          // Docs:
          // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
          throw error;
        }
      }}
    >
      <button type="submit">
        <span>
          {t.SignInPage("submitButtonPrefix")} {props.provider.name}
        </span>
      </button>
    </form>
  );
}
