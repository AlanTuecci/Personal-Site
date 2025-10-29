import { SiReact, SiExpress, SiPostgresql, SiNginx, SiCloudflare, SiCloudinary, SiCplusplus } from "react-icons/si";

const ProjectData = [
  {
    name: "Business Management Software Suite",
    slug: "bms-suite",
    summary:
      "A web-based service that allows managers and employees to monitor inventory, back office safe and register cash levels, and time punches.",
    description: (
      <ul className="pl-5 lg:text-2xl text-xl list-disc">
        <li className="mt-4">
          <span>
            The Business Management Software Suite (BMS Suite) is a web platform for small businesses, allowing managers
            and employees to monitor inventory, time punches, as well as back office safe and register cash amounts.
          </span>
        </li>
        <li className="mt-4">
          <span>Nodemailer was used to implement an email-based account creation and invitation system.</span>
        </li>
        <li className="mt-4">
          <span>
            Access Control Matrices were used to facilitate administrative functions, improving auditing and ease of
            use.
          </span>
        </li>
        <li className="mt-4">
          <span>
            Private home server hardware behind Cloudflare services provides high-availability deployment, content
            caching, and a Web Application Firewall that blocks ~13,000 threats each month.
          </span>
        </li>
      </ul>
    ),
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
    description: (
      <ul className="pl-5 lg:text-2xl text-xl list-disc">
        <li className="mt-4">
          <span>
            This is a collection of lessons about contemporary multiprocessing/multi-programming systems that defines
            functions and components of operating systems.
          </span>
        </li>
        <li className="mt-4">
          <span>
            This website was during my tenure as an undergraduate teaching assistant at CUNY Hunter College for an
            operating systems course.
          </span>
        </li>
        <li className="mt-4">
          <span>
            The goal was to give students supplementary materials that would aid in their studies and promote their
            understanding of operating systems.
          </span>
        </li>
        <li className="mt-4">
          <span>This website was credited with an increase in student exam scores over previous years.</span>
        </li>
      </ul>
    ),
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
    description: (
      <ul className="pl-5 lg:text-2xl text-xl list-disc">
        <li className="mt-4">
          <span>
            The gallery application acts as a personal photo gallery and educational platform for beginner
            photographers.
          </span>
        </li>
        <li className="mt-4">
          <span>
            Ultra-high-resolution images, camera settings data, image coordinates, and weather data at the images'
            location provide photographers with information on how certain factors influence an image's look.
          </span>
        </li>
        <li className="mt-4">
          <span>
            The goal is to enable photographers to draw connections between various factors that influence an image's
            look.
          </span>
        </li>
      </ul>
    ),
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
    description: (
      <>
        <span>This project is designed to simulate the internal workings of an operating system including:</span>
        <ul className="pl-5 lg:text-2xl text-xl list-disc">
          <li className="mt-4">
            <span>
              <span className="font-[googleSansMedium]">Process Management: </span>You can create, fork, exit, or call
              wait on processes. Note: Process termination is done with cascading termination.
            </span>
          </li>
          <li className="mt-4">
            <span>
              <span className="font-[googleSansMedium]">Process Scheduling: </span>Round-robin scheduling guarantees
              fair CPU resource allocation amongst processes. Processes are given a time limit for CPU usage, and if
              their execution time exceeds this allotted time, it is moved to the back of the ready-queue, allowing the
              next process to run.
            </span>
          </li>
          <li className="mt-4">
            <span>
              <span className="font-[googleSansMedium]">Memory Management: </span>The use of paging with Least Recently
              Used Page Replacement (LRUPR) allows for efficient memory resource utilization. LRUPR ensures that should
              available memory be exhausted, the least recently used frame is removed from memory which frees up
              resources.
            </span>
          </li>
          <li className="mt-4">
            <span>
              <span className="font-[googleSansMedium]">Disk I/O Management: </span>File read/disk job requests are
              completed via a first-come, first-served model.
            </span>
          </li>
        </ul>
      </>
    ),
    icons: (
      <>
        <SiCplusplus className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
      </>
    ),
    pageLink: "",
    githubLink: "https://github.com/AlanTuecci/Operating-System-Simulator",
    image0:
      "https://opengraph.githubassets.com/cb2f3e6585120515c4f20adfd4669865e19ffec76e1832f3febfda641dcc617f/AlanTuecci/Operating-System-Simulator",
    image1: "https://alantuecci.dev/gallery/screenshots/os-simulator-image1.jpg",
    image2: "https://alantuecci.dev/gallery/screenshots/os-simulator-image2.jpg",
    image3: "https://alantuecci.dev/gallery/screenshots/os-simulator-image3.jpg",
  },
  {
    name: "Sorting Algorithm Performance Profiler",
    slug: "algorithm-profiler",
    summary:
      "A C++ application that helps users better understand how an algorithm's Big-O complexity affects its execution time across different input sizes.",
    description: (
      <ul className="pl-5 lg:text-2xl text-xl list-disc">
        <li className="mt-4">
          <span>
            The Sorting Algorithm Performance Profiler runs and times 5 different sorting algorithms across 9 different
            inputs.
          </span>
        </li>
        <li className="mt-4">
          <span>
            Each input ranges from 30,000 to 1,000,000 integers. The following algorithms are tested: Selection Sort,
            Merge Sort, In-Place Merge Sort, Heap Sort, and the C++ STL Introsort algorithm.
          </span>
        </li>
        <li className="mt-4">
          <span>
            After every algorithm is finished running, the user is given a table with the input's minimum, median, and
            maximum values, the algorithm's execution time and Big-O complexity.
          </span>
        </li>
        <li className="mt-4">
          <span>
            The goal is to help users better understand how an algorithm's efficiency affects its runtime performance as
            inputs grow.
          </span>
        </li>
      </ul>
    ),
    icons: (
      <>
        <SiCplusplus className="lg:text-4xl xl:text-5xl text-3xl mr-2" />
      </>
    ),
    pageLink: "",
    githubLink: "https://github.com/AlanTuecci/Sorting-Algorithm-Performance-Profiler",
    image0:
      "https://opengraph.githubassets.com/8e883eb0c3b32b82d453eea2f087457210db3e50b0c25fed5e83c62d3fd8a698/AlanTuecci/Sorting-Algorithm-Performance-Profiler",
    image1: "https://alantuecci.dev/gallery/screenshots/algorithm-profiler-image1.jpg",
    image2: "https://alantuecci.dev/gallery/screenshots/algorithm-profiler-image2.jpg",
    image3: "https://alantuecci.dev/gallery/screenshots/algorithm-profiler-image3.jpg",
  },
];

export default ProjectData;
