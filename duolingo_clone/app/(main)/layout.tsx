// app/learn/layout.tsx
import "../globals.css";
import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/ui/mobile-header";


type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
    <MobileHeader/>
    <Sidebar className="hidden lg:flex"/>
      <main className="lg:pl-[265px] h-full pt-[50px] lg:pt-0">
        <div className="bg-red-500 h-full">
        {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;