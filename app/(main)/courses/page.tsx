
import { getCourses, getUserProgress} from "@/db/queries";
import { List } from "./list" // 👈 new Client Component

const CoursesPage = async () => {
  const coursesData = await getCourses();
  const userProgressData= await getUserProgress();
 
  const[
    courses,
    userProgress
  ] = await Promise.all([
    coursesData, // 👈 coursesData is an array of course objects
    userProgressData // 👈 userProgressData is an object with user progress details
  ]);
  return (
    <div className="h-full max-w-[921px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses!</h1>

      <List 
      courses={courses} 
      activeCourseId={userProgress?.activeCourseId} // 👈 use optional chaining
      />
    </div>
  );
};

export default CoursesPage;
