import { Suspense, lazy } from "react";
import Header from "../../components/Header/Header.jsx";

const SectionOne = lazy(() => import("../../components/Learn/LessonTwo/SectionOne.jsx"));
const SectionTwo = lazy(() => import("../../components/Learn/LessonTwo/SectionTwo.jsx"));
const LessonTwoPart1 = lazy(() => import("../../components/Learn/LessonTwo/LessonTwoPart1.jsx"));
const LessonTwoPart2 = lazy(() => import("../../components/Learn/LessonTwo/LessonTwoPart2.jsx"));


const LessonTwo = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section One...</div>}>
        <SectionOne />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Two Part 1...</div>}>
        <LessonTwoPart1 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Two Part 2...</div>}>
        <LessonTwoPart2 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section Two...</div>}>
        <SectionTwo />
      </Suspense>
    </>
  );
};

export default LessonTwo;
