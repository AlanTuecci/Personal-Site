import { useRef } from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import { SiCloudflare, SiNginx, SiPostgresql, SiCloudinary, SiDocker, SiVmware } from "react-icons/si";
import { GrWindows } from "react-icons/gr";
import SvgMaintenance from "../../assets/SvgMaintenance";
import textStyles from "../../style-strings/text-sizes";

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
      <div className="lg:w-[90%] 2xl:my-20 my-16 w-[80%] mx-auto lg:flex lg:flex-row-reverse lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pl-4 2xl:pl-8">
          <motion.div
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className={textStyles.subHeader + "text-center"}>Infra-Architecture</h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8 xl:my-4 2xl:my-8"
            ref={ref3}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://www.cloudflare.com/">
              <SiCloudflare className={textStyles.header} />
            </NavLink>{" "}
            <NavLink to="https://www.docker.com/">
              <SiDocker className={textStyles.header} />
            </NavLink>
            <NavLink to="https://www.postgresql.org/">
              <SiPostgresql className={textStyles.header} />
            </NavLink>
            <NavLink to="https://nginx.org/en/">
              <SiNginx className={textStyles.header} />
            </NavLink>
            <NavLink to="https://www.microsoft.com/en-us/windows/">
              <GrWindows className={textStyles.header} />
            </NavLink>
            <NavLink to="https://www.vmware.com/">
              <SiVmware className={textStyles.header} />
            </NavLink>
            <NavLink to="https://cloudinary.com/">
              <SiCloudinary className={textStyles.header} />
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
            <ul className={textStyles.standardText + "list-disc pl-5"}>
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
                <span>Docker is used to containerize full-stack applications for simpler portable deployments.</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pr-4 2xl:pr-8">
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
