import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
      {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutWebsite;
