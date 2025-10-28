import { SiReact, SiExpress, SiPostgresql, SiNginx, SiCloudflare, SiCloudinary, SiCplusplus } from "react-icons/si";

const ProjectData = [
  {
    name: "Business Management Software Suite",
    slug: "bms-suite",
    summary:
      "A web-based service that allows managers and employees to monitor inventory, back office safe and register cash levels, and time punches.",
    description: "",
    icons: (
      <>
        <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
        <SiExpress className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
        <SiPostgresql className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
        <SiNginx className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
        <SiCloudflare className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
      </>
    ),
    pageLink: "https://alantuecci.dev/bms-suite/",
    githubLink: "https://github.com/AlanTuecci/BMS-Suite",
    image0: "https://alantuecci.dev/gallery/screenshots/bms-suite.jpg",
    image1: "https://alantuecci.dev/gallery/screenshots/bms-suite-image1.jpg",
    image2: "https://alantuecci.dev/gallery/screenshots/bms-suite-image2.jpg",
    image3: "https://alantuecci.dev/gallery/screenshots/bms-suite-image3.jpg",
  },
  {
    name: "Operating Systems Web Course",
    slug: "os-course",
    summary:
      "A website that allows students enrolled in CUNY Hunter College's Operating Systems course to study and visualize concepts related to contemporary multiprocessing systems.",
    description: "",
    icons: (
      <>
        <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
        <SiNginx className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
        <SiCloudflare className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
      </>
    ),
    pageLink: "https://alantuecci.dev/learn",
    githubLink: "https://github.com/AlanTuecci/Personal-Site",
    image0: "https://alantuecci.dev/gallery/screenshots/os-course.jpg",
    image1: "https://alantuecci.dev/gallery/screenshots/os-course-image1.jpg",
    image2: "https://alantuecci.dev/gallery/screenshots/os-course-image2.jpg",
    image3: "https://alantuecci.dev/gallery/screenshots/os-course-image3.jpg",
  },
  {
    name: "Gallery Application",
    slug: "gallery-application",
    summary:
      "A website that allows beginner photographers to see images that I have taken in various locations along with multiple pieces of data to help them recreate and understand how certain image effects are produced.",
    description: "",
    icons: (
      <>
        <SiReact className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
        <SiExpress className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
        <SiNginx className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
        <SiCloudflare className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
        <SiCloudinary className="lg:text-4xl xl:text-5xl text-3xl mx-2" />
      </>
    ),
    pageLink: "https://alantuecci.dev/projects/gallery/",
    githubLink: "https://github.com/AlanTuecci/Personal-Site",
    image0: "https://alantuecci.dev/gallery/screenshots/gallery.jpg",
    image1: "https://alantuecci.dev/gallery/screenshots/gallery-image1.jpg",
    image2: "https://alantuecci.dev/gallery/screenshots/gallery-image2.jpg",
    image3: "https://alantuecci.dev/gallery/screenshots/gallery-image3.jpg",
  },
  {
    name: "Operating System Simulator",
    slug: "os-simulator",
    summary:
      "A program that simulates the internal workings of an operating system covering Process Management & Scheduling, Memory Management, and Disk I/O Management.",
    description: "",
    icons: (
      <>
        <SiCplusplus className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
      </>
    ),
    pageLink: "",
    githubLink: "https://github.com/AlanTuecci/Operating-System-Simulator",
    image0:
      "https://opengraph.githubassets.com/cb2f3e6585120515c4f20adfd4669865e19ffec76e1832f3febfda641dcc617f/AlanTuecci/Operating-System-Simulator",
    image1: "",
    image2: "",
    image3: "",
  },
  {
    name: "Sorting Algorithm Performance Profiler",
    slug: "algorithm-profiler",
    summary:
      "A C++ application that helps users better understand how an algorithm's Big-O complexity affects its execution time across different input sizes.",
    description:
      "The Sorting Algorithm Performance Profiler is a C++ application with a user-friendly command-line interface that allows users to run five different sorting algorithms across 9 different inputs ranging from 30,000 to 1,000,000 integers. By timing the execution of each algorithm for the selected inputs and displaying them to the user along with the algorithm's Big-O complexity, users can better understand how an algorithm's Big-O complexity affects its execution time across different input sizes.",
    icons: (
      <>
        <SiCplusplus className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
      </>
    ),
    pageLink: "",
    githubLink: "https://github.com/AlanTuecci/Sorting-Algorithm-Performance-Profiler",
    image0:
      "https://opengraph.githubassets.com/8e883eb0c3b32b82d453eea2f087457210db3e50b0c25fed5e83c62d3fd8a698/AlanTuecci/Sorting-Algorithm-Performance-Profiler",
    image1: "",
    image2: "",
    image3: "",
  },
];

export default ProjectData;
