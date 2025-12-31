import "./login.css";

export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <body>
      <main className="flex h-full min-h-screen w-full flex-col justify-between">
        {children}
      </main>
    </body>
  );
}
