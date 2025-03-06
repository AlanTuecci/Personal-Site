import { Suspense, lazy } from "react";
import Header from "../../components/Header/Header.jsx";

const SectionOne = lazy(() => import("../../components/Learn/LessonThree/SectionOne.jsx"));
const SectionTwo = lazy(() => import("../../components/Learn/LessonThree/SectionTwo.jsx"));
const LessonThreeNotice = lazy(() => import("../../components/Learn/LessonThree/LessonThreeNotice.jsx"));
const LessonThreePart1 = lazy(() => import("../../components/Learn/LessonThree/LessonThreePart1.jsx"));
const LessonThreePart2 = lazy(() => import("../../components/Learn/LessonThree/LessonThreePart2.jsx"));
const LessonThreePart3 = lazy(() => import("../../components/Learn/LessonThree/LessonThreePart3.jsx"));

const LessonThree = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section One...</div>}>
        <SectionOne />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Three Notice...</div>}>
        <LessonThreeNotice />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Three Part 1...</div>}>
        <LessonThreePart1 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Three Part 2...</div>}>
        <LessonThreePart2 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Three Part 3...</div>}>
        <LessonThreePart3 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section Two...</div>}>
        <SectionTwo />
      </Suspense>
    </>
  );
};

export default LessonThree;
