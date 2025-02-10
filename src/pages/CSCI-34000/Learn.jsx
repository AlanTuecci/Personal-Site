import { Suspense, lazy } from "react";
import Header from "../../components/Header/Header.jsx";

const Intro = lazy(() => import("../../components/Learn/Intro.jsx"));
const SectionOne = lazy(() => import("../../components/Learn/SectionOne.jsx"));
const LessonOnePart1 = lazy(() => import("../../components/Learn/LessonOnePart1.jsx"));
const LessonOnePart2 = lazy(() => import("../../components/Learn/LessonOnePart2.jsx"));
const LessonOnePart3 = lazy(() => import("../../components/Learn/LessonOnePart3.jsx"));
const LessonOnePart4 = lazy(() => import("../../components/Learn/LessonOnePart4.jsx"));
const LessonOnePart5 = lazy(() => import("../../components/Learn/LessonOnePart5.jsx"));
const LessonOnePart6 = lazy(() => import("../../components/Learn/LessonOnePart6.jsx"));
const LessonOnePart7 = lazy(() => import("../../components/Learn/LessonOnePart7.jsx"));
const LessonOnePart8 = lazy(() => import("../../components/Learn/LessonOnePart8.jsx"));
const LessonOnePart9 = lazy(() => import("../../components/Learn/LessonOnePart9.jsx"));
const LessonOnePart10 = lazy(() => import("../../components/Learn/LessonOnePart10.jsx"));
const LessonOnePart11 = lazy(() => import("../../components/Learn/LessonOnePart11.jsx"));

const Learn = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Intro...</div>}>
        <Intro />
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
    </>
  );
};

export default Learn;
