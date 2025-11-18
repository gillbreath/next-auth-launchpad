import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth"

export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined }
}) {
  return (
    <div className="flex flex-col gap-2">
      <form
        action={async (formData) => {
          "use server"
          try {
            let { callbackUrl } = await props.searchParams
            callbackUrl = callbackUrl || "/dashboard";
            formData.append("redirectTo", callbackUrl)
            await signIn("insecure-testing", formData)
          } catch (error) {
            if (error instanceof AuthError) {
              // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)

               console.log(`error`, error)
            }
            throw error
          }
        }}
      >
        <label htmlFor="password">
          Password
          <input name="password" id="input-password-for-insecure-testing-provider" type="password" />
        </label>
        <input type="submit" value="Sign In" id="submit-for-insecure-testing-provider" />
      </form>
    {Object.values(providerMap).map((provider) => (
      <form
        key={provider.id}
        action={async () => {
          "use server"
          try {
            let { callbackUrl } = await props.searchParams
            const signInOptions = {
              redirectTo: callbackUrl || "/dashboard"
              }
            await signIn(provider.id, signInOptions)
          } catch (error) {
            // Signin can fail for a number of reasons, such as the user
            // not existing, or the user not having the correct role.
            // In some cases, you may want to redirect to a custom error
            if (error instanceof AuthError) {
              console.log(`error`, error)
              // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
            }

            // Otherwise if a redirects happens Next.js can handle it
            // so you can just re-thrown the error and let Next.js handle it.
            // Docs:
            // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
            throw error
          }
        }}
      >
        <button type="submit">
          <span>Sign in with {provider.name}</span>
        </button>
      </form>
    )
  )}
  </div>
  );
}
