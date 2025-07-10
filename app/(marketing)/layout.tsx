import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          {children}
        </main>
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default MarketingLayout;