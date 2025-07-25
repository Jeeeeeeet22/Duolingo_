"use client";
import { Progress } from "@/components/ui/progress"; // keep as is
import { useExitModal } from "@/store/use-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: Props) => {
  const { open } = useExitModal();

  return (
    <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <X
        onClick={open} // ✅ fixed here
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
      />

      <div className="flex-1 px-4">
        {/* 🛠️ Wrap in container to force height + bg override */}
        <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
          <Progress
            value={percentage}
            className="h-2 bg-transparent"
          />
        </div>
      </div>

      <div className="text-rose-500 flex items-center font-bold">
        <Image
          src="/heart.svg"
          height={28}
          width={28}
          alt="Heart"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};