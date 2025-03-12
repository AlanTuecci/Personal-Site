import { Suspense, lazy } from "react";
import Header from "../../components/Header/Header.jsx";

const SectionOne = lazy(() => import("../../components/Learn/LessonFour/SectionOne.jsx"));
const SectionTwo = lazy(() => import("../../components/Learn/LessonFour/SectionTwo.jsx"));
const LessonFourPart1 = lazy(() => import("../../components/Learn/LessonFour/LessonFourPart1.jsx"));
const LessonFourPart2 = lazy(() => import("../../components/Learn/LessonFour/LessonFourPart2.jsx"));
const LessonFourPart3 = lazy(() => import("../../components/Learn/LessonFour/LessonFourPart3.jsx"));
const LessonFourPart4 = lazy(() => import("../../components/Learn/LessonFour/LessonFourPart4.jsx"));
const LessonFourPart5 = lazy(() => import("../../components/Learn/LessonFour/LessonFourPart5.jsx"));
const LessonFourPart6 = lazy(() => import("../../components/Learn/LessonFour/LessonFourPart6.jsx"));
const LessonFourPart7 = lazy(() => import("../../components/Learn/LessonFour/LessonFourPart7.jsx"));

const LessonFour = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section One...</div>}>
        <SectionOne />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Four Part 1...</div>}>
        <LessonFourPart1 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Four Part 2...</div>}>
        <LessonFourPart2 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Four Part 3...</div>}>
        <LessonFourPart3 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Four Part 4...</div>}>
        <LessonFourPart4 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Four Part 5...</div>}>
        <LessonFourPart5 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Four Part 6...</div>}>
        <LessonFourPart6 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson Four Part 7...</div>}>
        <LessonFourPart7 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section Two...</div>}>
        <SectionTwo />
      </Suspense>
    </>
  );
};

export default LessonFour;
