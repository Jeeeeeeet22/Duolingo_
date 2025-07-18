import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUnits, getCourseProgress, getLessonPercentage } from "@/db/queries";   
import { redirect } from "next/navigation";  
import { Unit } from "./unit";
import { lessons, units as Unitsschema } from "@/db/schema";
import { ExitModal } from "@/components/modals/exit-modal"; // 🆕 import this!

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();

  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
  ] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  if (!courseProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <>
      <ExitModal /> {/* 🆕 mount the modal at the root of this page */}
      
      <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
          <UserProgress 
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={false}
          />
        </StickyWrapper>
        
        <FeedWrapper>
          <Header title={userProgress.activeCourse.title} />
          {units.map((unit) => (
            <div key={unit.id} className="mb-10">
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                  unit: typeof Unitsschema.$inferSelect;
                }| undefined}
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          ))}
        </FeedWrapper>
      </div>
    </>
  );
};

export default LearnPage;