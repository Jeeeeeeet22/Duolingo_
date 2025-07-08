import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 px-6">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full gap-6">
        <Button size="lg" variant="ghost" className="flex items-center gap-2">
          <Image src="/hr.svg" alt="Croatian" height={32} width={40} className="rounded-md" />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="flex items-center gap-2">
          <Image src="/fr.svg" alt="French" height={32} width={40} className="rounded-md" />
          French
        </Button>
        <Button size="lg" variant="ghost" className="flex items-center gap-2">
          <Image src="/es.svg" alt="Spanish" height={32} width={40} className="rounded-md" />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="flex items-center gap-2">
          <Image src="/it.svg" alt="Italian" height={32} width={40} className="rounded-md" />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="flex items-center gap-2">
          <Image src="/jp.svg" alt="Japanese" height={32} width={40} className="rounded-md" />
          Japanese
        </Button>
      </div>
    </footer>
  );
};