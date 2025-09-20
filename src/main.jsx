import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import Learn from "./pages/CSCI-34000/Learn.jsx";
import LessonOne from "./pages/CSCI-34000/LessonOne.jsx";
import LessonTwo from "./pages/CSCI-34000/LessonTwo.jsx";
import LessonThree from "./pages/CSCI-34000/LessonThree.jsx";
import LessonFour from "./pages/CSCI-34000/LessonFour.jsx";
import LessonFive from "./pages/CSCI-34000/LessonFive.jsx";
import UnderConstruction from "./pages/UnderConstruction.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
// import Projects from "./pages/Projects.jsx";

const Gallery = lazy(() => import("./pages/Gallery/Gallery.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-gray-600 text-xl">Loading...</div>
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learn/lessonOne" element={<LessonOne />} />
          <Route path="/learn/lessonTwo" element={<LessonTwo />} />
          <Route path="/learn/lessonThree" element={<LessonThree />} />
          <Route path="/learn/lessonFour" element={<LessonFour />} />
          <Route path="/learn/lessonFive" element={<LessonFive />} />
          <Route path="/404" element={<UnderConstruction />} />
          <Route path="/projects/gallery/:collection" element={<Gallery />} />
          <Route path="/*" element={<UnderConstruction />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
