"use client";

import { cn } from "@/lib/utils";
import { challenges } from "@/db/schema";
import { Image as LucideImage } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import{useAudio,useKey}from "react-use"

type Props = {
  id: number;
  text: string;
  imageSrc?: string | null;
  audioSrc?: string | null;
  shortcut?: string;
  selected?: boolean;
  status: "correct" | "wrong" | "none";
  disabled?: boolean;
  type: typeof challenges.$inferSelect["type"];
  onClick?: () => void;
};

export const Card = ({
  text,
  selected,
  status,
  shortcut,
  disabled,
  onClick,
  imageSrc,
  type,
  audioSrc,
}: Props) => {
    const [audio,_,controls]=useAudio({src:audioSrc|| ""});

    const handleClick=useCallback(()=>{
      if(disabled)return;

      controls.play();
      onClick?.();
    },[disabled,onClick,controls]);

    useKey(shortcut,handleClick,{},[handleClick]);
  return (
    <>
    <div
      onClick={handleClick}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2 text-center font-medium text-neutral-700",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100 ",
        selected && status === "correct" &&
          "border-green-300 bg-green-100 hover:bg-green-100",
        selected && status === "wrong" &&
          "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "lg:p-3 w-full"
      )}
    >
       
      {imageSrc && (
        <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}

      <div
        className={cn(
          "flex items-center justify-between",
          type === "ASSIST" && "flex-row-reverse"
        )}
      >
        {type === "ASSIST" && <div />}
        <p className={cn(
            "text-neutral-600 text-sm lg:text-base",
            selected && "text-sky-500",
            selected && status==="correct"
            && "text-green-500",
            selected && status ==="wrong" && "text-rose-500",
        )}>
            {text}
        </p>
        <div className={cn("lg:w-[30px] w-[20px] h-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text [15px] text-xs font-semibold",
        selected && "border-sky-300 text-sky-500",
        selected && status==="correct"
        && "border-green-500 text-green-500",
        selected && status==="wrong"
        && "border-rose-500 text-rose-500",


        )}>
            {shortcut}

        </div>
         

      </div>
    </div>
    {audio}
    </>

     
  );
};