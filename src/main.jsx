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

const Gallery = lazy(() => import("./pages/Gallery/Gallery.jsx"));
const GalleryHome = lazy(() => import("./pages/Gallery/GalleryHome.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const SelectGallery = lazy(() => import("./pages/Gallery/SelectGallery.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Education = lazy(() => import("./pages/Education.jsx"));

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
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/learn/lessonOne" element={<LessonOne />} />
          <Route path="/learn/lessonTwo" element={<LessonTwo />} />
          <Route path="/learn/lessonThree" element={<LessonThree />} />
          <Route path="/learn/lessonFour" element={<LessonFour />} />
          <Route path="/learn/lessonFive" element={<LessonFive />} />
          <Route path="/404" element={<UnderConstruction />} />
          <Route path="/projects/gallery" element={<GalleryHome />} />
          <Route path="/projects/gallery/:continent" element={<SelectGallery />} />
          <Route path="/projects/gallery/:continent/:collection" element={<Gallery />} />
          <Route path="/*" element={<UnderConstruction />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
