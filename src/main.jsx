import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import Learn from "./pages/CSCI-34000/Learn.jsx";
import UnderConstruction from "./pages/UnderConstruction.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/404" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
