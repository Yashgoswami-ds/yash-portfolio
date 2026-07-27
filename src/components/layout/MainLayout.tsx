import Navbar from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;