export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <body>
      <div className="flex h-full min-h-screen w-full flex-col justify-between">
        {children}
      </div>
    </body>
  );
}
