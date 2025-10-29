import { useRef } from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import { SiCloudflare, SiNginx, SiPostgresql, SiCloudinary } from "react-icons/si";
import { GrWindows } from "react-icons/gr";
import SvgMaintenance from "../../assets/SvgMaintenance";

const InfraArchitecture = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  return (
    <>
      <div className="lg:w-[90%] xl:my-20 my-16 w-[80%] mx-auto lg:flex lg:flex-row-reverse lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pl-4 xl:pl-8">
          <motion.div
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansMedium] text-center">Infra-Architecture</h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://cloudinary.com/">
              <SiCloudinary className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://www.microsoft.com/en-us/windows/">
              <GrWindows className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://www.postgresql.org/">
              <SiPostgresql className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://nginx.org/en/">
              <SiNginx className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://www.cloudflare.com/">
              <SiCloudflare className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
          </motion.div>
          <motion.div
            className="flex justify-around my-4"
            ref={ref4}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <ul className="lg:text-2xl text-xl list-disc pl-5">
              <li className="mt-4">
                <span>
                  Every project I ever built is securely deployed on my own home servers behind a Cloudflare reverse
                  proxy.
                </span>
              </li>
              <li className="mt-4">
                <span>Rapid data storage and access is done using an optimized PostgreSQL configuration.</span>
              </li>
              <li className="mt-4">
                <span>
                  High resolution images are distributed using a Cloudflare CDN and are backed up on the Cloudinary
                  platform.
                </span>
              </li>
              <li className="mt-4">
                <span>
                  NGINX is used to serve static files and balance requests across multiple backend server nodes.
                </span>
              </li>
              <li className="mt-4">
                <span>
                  Servers run on Windows and backend server software is configured to launch automatically on startup
                  with batch scripts.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgMaintenance className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InfraArchitecture;
