import  Image  from "next/image";
import { redirect } from "next/navigation";
import { getUserSubscription } from "@/db/queries";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";

import { FeedWrapper } from "@/components/feed-wrapper";
import {getUserProgress} from "@/db/queries"
import { Items } from "./items";
const ShopPage = async () => {
  const userProgressData = await getUserProgress();
  const userSubscriptionData=getUserSubscription();

  const [
    userProgress,
    userSubscription,
  ]=await Promise.all([
    userProgressData,
    userSubscriptionData
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col  items-center">
          <Image
          src="/shop.svg"
          alt="Shop"
          height={90}
          width={90}

          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted foregrouynd text-center text-lg mb-6">
            Spend your points on cool stuff.
          </p>
          <Items
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
          />
        </div>

      </FeedWrapper>
    </div>
  );
};

export default ShopPage;