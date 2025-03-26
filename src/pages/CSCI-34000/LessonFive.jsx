import { Suspense, lazy } from "react";
import Header from "../../components/Header/Header.jsx";

const SectionOne = lazy(() => import("../../components/Learn/LessonFive/SectionOne.jsx"));
const SectionTwo = lazy(() => import("../../components/Learn/LessonFive/SectionTwo.jsx"));
const LessonFivePart1 = lazy(() => import("../../components/Learn/LessonFive/LessonFivePart1.jsx"));
const LessonFivePart2 = lazy(() => import("../../components/Learn/LessonFive/LessonFivePart2.jsx"));

const LessonFive = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section One...</div>}>
        <SectionOne />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Five Part 1...</div>}>
        <LessonFivePart1 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Five Part 2...</div>}>
        <LessonFivePart2 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section Two...</div>}>
        <SectionTwo />
      </Suspense>
    </>
  );
};

export default LessonFive;
