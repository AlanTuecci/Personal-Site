import { Suspense, lazy } from "react";
import Header from "../../components/Header/Header.jsx";

const SectionOne = lazy(() => import("../../components/Learn/LessonOne/SectionOne.jsx"));
const SectionTwo = lazy(() => import("../../components/Learn/LessonOne/SectionTwo.jsx"));
const LessonOnePart1 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart1.jsx"));
const LessonOnePart2 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart2.jsx"));
const LessonOnePart3 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart3.jsx"));
const LessonOnePart4 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart4.jsx"));
const LessonOnePart5 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart5.jsx"));
const LessonOnePart6 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart6.jsx"));
const LessonOnePart7 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart7.jsx"));
const LessonOnePart8 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart8.jsx"));
const LessonOnePart9 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart9.jsx"));
const LessonOnePart10 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart10.jsx"));
const LessonOnePart11 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart11.jsx"));
const LessonOnePart12 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart12.jsx"));
const LessonOnePart13 = lazy(() => import("../../components/Learn/LessonOne/LessonOnePart13.jsx"));


const LessonOne = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section One...</div>}>
        <SectionOne />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 1...</div>}>
        <LessonOnePart1 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 2...</div>}>
        <LessonOnePart2 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 3...</div>}>
        <LessonOnePart3 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 4...</div>}>
        <LessonOnePart4 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 5...</div>}>
        <LessonOnePart5 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 6...</div>}>
        <LessonOnePart6 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 7...</div>}>
        <LessonOnePart7 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 8...</div>}>
        <LessonOnePart8 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 9...</div>}>
        <LessonOnePart9 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 10...</div>}>
        <LessonOnePart10 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 11...</div>}>
        <LessonOnePart11 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 12...</div>}>
        <LessonOnePart12 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Lesson One Part 13...</div>}>
        <LessonOnePart13 />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Section Two...</div>}>
        <SectionTwo />
      </Suspense>
    </>
  );
};

export default LessonOne;
