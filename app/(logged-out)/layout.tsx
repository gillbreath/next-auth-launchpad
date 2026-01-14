import Footer from "@/components/footer";
import Header from "@/components/header";
import { MainNav } from "@/components/main-nav";
import UserButton from "@/components/user-button";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <body>
      <div className="flex h-full min-h-screen w-full flex-col justify-between">
        <Header>
          <MainNav />
          <UserButton />
        </Header>
        <main className="mx-auto w-full max-w-3xl flex-auto px-4 py-4 sm:px-6 md:py-6">
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
}
