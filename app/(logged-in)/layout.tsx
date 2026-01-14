import LoggedInDashboardHeader from "@/components/header.logged-in.dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoggedInSidebar } from "@/components/sidebar";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <body>
      <SidebarProvider defaultOpen={false}>
        <div className="h-full min-h-screen w-full">
          <LoggedInSidebar />
          <div className="flex h-full min-h-screen w-full flex-col justify-between pl-[--sidebar-width-icon]">
            <LoggedInDashboardHeader />
            <main className="flex-auto px-4 py-4 sm:px-6 md:py-6 w-full">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </body>
  );
}
