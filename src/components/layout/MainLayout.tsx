import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/navbar/Navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
