import { providerMap } from "@/auth";
import { insecureCredentialsProviderAllowedForTesting } from "@/lib/utils.env-vars";
import { getTranslations } from "next-intl/server";
import InsecureTestingProvider from "./form.insecure-testing-provider";
import ProviderMapForm from "./form.providermap";

export default async function SignInPage() {
  const t = {
    DashboardPage: await getTranslations("DashboardPage"),
    SignInPage: await getTranslations("SignInPage"),
    Site: await getTranslations("Site"),
  };
  return (
    <div className="login flex flex-row gap-4 w-full justify-center">
      <div className="branding p-5">
        <img src="/logo.png" />
        <h1>{t.Site("sitename")}</h1>
        <h2>{t.Site("tagline")}</h2>
      </div>
      <div className="pills wrapper">
        <div className="border p-5">
          <h2>{t.SignInPage("optionsHeader")}</h2>
          {Object.values(providerMap).map((provider) => (
            <ProviderMapForm provider={provider}></ProviderMapForm>
          ))}
        </div>
        <a href="#">Disclaimer</a>
      </div>
      {insecureCredentialsProviderAllowedForTesting() ? (
        <InsecureTestingProvider></InsecureTestingProvider>
      ) : undefined}
      <div className="fixed bottom-0 left-0 w-full">&nbsp;</div>
    </div>
  );
}
