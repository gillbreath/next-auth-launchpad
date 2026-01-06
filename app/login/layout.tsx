import "./login.css";

export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <body>
      <main className="flex flex-col h-full items-center justify-between min-h-screen w-full">
        {children}
      </main>
    </body>
  );
}
