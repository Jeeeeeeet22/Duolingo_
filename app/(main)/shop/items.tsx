"use client";

import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTransition, useState } from "react";
import { refillHeart } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";

const POINTS_TO_REFILL = 10;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  const [pending, startTransition] = useTransition();

  // Local state to reflect updated hearts
  const [localHearts, setLocalHearts] = useState(hearts);
  const [localPoints, setLocalPoints] = useState(points);

  const onRefillHearts = () => {
    if (pending || localHearts === 5 || localPoints < POINTS_TO_REFILL) return;

    startTransition(() => {
      refillHeart()
        .then(() => {
          setLocalHearts(5); // Update immediately to "FULL"
          setLocalPoints((prev) => prev - POINTS_TO_REFILL);
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onUpgrade=()=>{
    startTransition(()=>{
      createStripeUrl()
      .then((Response)=>{
        if(Response.data){
          window.location.href=Response.data;
        }
      })
      .catch(()=>toast.error("Something went wrong."));

    })
  }
     
       

  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image 
          src="/heart.svg"  
          alt="Heart"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || localHearts === 5 || localPoints < POINTS_TO_REFILL}
          className={localHearts === 5 ? "bg-gray-100 text-gray-400 cursor-default" : ""}
        >
          {localHearts === 5 ? "FULL" : (
            <div className="flex items-center gap-x-1">
              <Image
                src="/points.svg"
                alt="Points"
                height={20}
                width={20}
              />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
        src="/unlimited.svg"
        alt="Unlimited"
        height={60}
        width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Unlimited Hearts!
          </p>
        </div>
        <Button
        onClick={onUpgrade}
        disabled={pending || hasActiveSubscription} 
        >
          {hasActiveSubscription?"active":"upgrade"}
        </Button>
      </div>
    </ul>
  );
};