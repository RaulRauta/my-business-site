export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: routeLang } = await params;
  const lang = routeLang === "en" ? "en" : "ro";

  return (
    <div lang={lang} className="min-h-screen text-white">
      {children}
    </div>
  );
}
