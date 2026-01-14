import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";

export default async function LoggedInDashboardHeader() {
  const t = {
    DashboardPage: await getTranslations("DashboardPage"),
  };

  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 w-full">
        <h1 className="text-3xl font-bold">{t.DashboardPage("pagename")}</h1>
        <Button>Button</Button>
      </div>
    </header>
  );
}
