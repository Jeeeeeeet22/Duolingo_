import { challengeOptions, challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { Card } from "./card";

type Props = {
  options: typeof challengeOptions.$inferSelect[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
  type: typeof challenges.$inferSelect["type"];
};

export const Challenge = ({
  options,
  onSelect,
  status,
  selectedOption,
  disabled = false,
  type,
}: Props) => {
  return (
    
    <div
  className={cn(
    "w-full max-w-[600px] mx-auto gap-6",
    type === "SELECT"
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "flex flex-col gap-2"
  )}
>

      {options.map((option, i) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imageSrc={option.imageSrc}
          shortcut={`${i + 1}`}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          status={status}
          audioSrc={option.audioSrc}
          disabled={disabled}
          type={type}
        />
      ))}
    </div>
  );
};