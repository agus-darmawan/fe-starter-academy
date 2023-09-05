export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='bg-gradient-radial min-h-screen from-[#e0e1e9] to-[#B5BCDA]'>
        {children}
      </div>
    </>
  );
}
