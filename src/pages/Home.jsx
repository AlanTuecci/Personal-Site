import { Suspense, lazy } from "react";
import Header from "../components/Header/Header.jsx";

const Intro = lazy(() => import("../components/Home/Intro.jsx"));
const WhatIDo = lazy(() => import("../components/Home/WhatIDo.jsx"));
const BackendDev = lazy(() => import("../components/Home/BackendDev.jsx"));
const FrontendDev = lazy(() => import("../components/Home/FrontendDev.jsx"));
const InfraArchitecture = lazy(() => import("../components/Home/InfraArchitecture.jsx"));
const CyberSecurity = lazy(() => import("../components/Home/CyberSecurity.jsx"));

const Home = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Intro...</div>}>
        <Intro />
        <WhatIDo />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Backend Dev...</div>}>
        <BackendDev />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Frontend Dev...</div>}>
        <FrontendDev />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Infra-Architecture...</div>}>
        <InfraArchitecture />
      </Suspense>
      <Suspense fallback={<div className="text-center lg:text-2xl text-xl">Loading Cybersecurity...</div>}>
        <CyberSecurity />
      </Suspense>
    </>
  );
};

export default Home;
