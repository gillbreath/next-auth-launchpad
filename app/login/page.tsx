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
    <div className="login flex flex-col gap-8 items-center lg:flex-row lg:justify-center max-w-[1000px] mt-[10%] w-2/3">
      <div className="branding flex-1 p-5">
        <span className="logo-sitename flex flex-row justify-between items-center mb-2">
          <img src="/logo.png" />
          <h1>{t.Site("sitename")}</h1>
        </span>
        <h2 className="text-center">{t.Site("tagline")}</h2>
      </div>
      <div className="pills wrapper flex-1">
        <div className="border p-5">
          <h2>{t.SignInPage("optionsHeader")}</h2>
          {Object.values(providerMap).map((provider) => (
            <ProviderMapForm
              provider={provider}
              key={provider.id}
            ></ProviderMapForm>
          ))}
          {insecureCredentialsProviderAllowedForTesting() ? (
            <InsecureTestingProvider></InsecureTestingProvider>
          ) : undefined}
        </div>
        <a href="#">{t.SignInPage("legalLinkText")}</a>
      </div>
      <div className="fixed bottom-0 left-0 w-full">&nbsp;</div>
    </div>
  );
}
