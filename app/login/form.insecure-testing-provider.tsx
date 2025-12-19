import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import pathData from "@/messages/en.json";

export default function InsecureTestingProvider() {
  const signInOptions: { redirectTo: string } = {
    redirectTo: "/" + pathData.DashboardPage.pagename,
  };
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      action={async (formData) => {
        "use server";
        try {
          formData.append("redirectTo", signInOptions.redirectTo);
          await signIn("insecure-testing", formData);
        } catch (error) {
          if (error instanceof AuthError) {
            // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
          }
          console.log(`error`, error);
          throw error;
        }
      }}
    >
      <label
        htmlFor="password"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Password
        <input
          name="password"
          id="input-password-for-insecure-testing-provider"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
        />
      </label>
      <button
        type="submit"
        id="submitButton"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign In
      </button>
    </form>
  );
}
