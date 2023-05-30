import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="grow flex flex-col">{children}</section>
      <Footer />
    </main>
  );
}
