import { getTranslations } from "next-intl/server";

export default async function Index() {
  const t = {
    DashboardPage: await getTranslations("DashboardPage"),
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold">{t.DashboardPage("label")}</h2>
        <h3 className="text-l">{t.DashboardPage("tagline")}</h3>
      </div>
    </div>
  );
}
