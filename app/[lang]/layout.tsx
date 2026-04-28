export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {children}
    </div>
  );
}
