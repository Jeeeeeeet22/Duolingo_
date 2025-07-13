import Image from "next/image";

type Props = {
  question: string;
};

export const QuestionBubble = ({ question }: Props) => {
  return (
    <div className="p-4 bg-green-100 rounded-xl inline-block max-w-[80%]">
      <p className="text-lg font-semibold text-green-900">{question}</p>
    </div>
  );
};