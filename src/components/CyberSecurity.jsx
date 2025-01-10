import { useRef } from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import { SiCloudflare, SiGithubactions } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import SvgSecurityOn from "../assets/SvgSecurityOn";

const CyberSecurity = () => {
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
      <div className="lg:w-[90%] xl:my-20 my-16 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pr-4 xl:pr-8">
          <motion.div
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="lg:text-4xl xl:text-5xl text-3xl font-[googleSansMedium] text-center">Cybersecurity</h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://github.com/features/actions">
              <SiGithubactions className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/">
              <MdSecurity className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
            <NavLink to="https://www.cloudflare.com/application-services/products/waf/">
              <SiCloudflare className="lg:text-5xl xl:text-6xl text-4xl" />
            </NavLink>
          </motion.div>
          <motion.div
            className="flex justify-around my-4"
            ref={ref4}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView3 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <ul className="pl-5 lg:text-2xl text-xl list-disc">
              <li className="mt-4">
                <span>I protect my software and hardware with a variety of on-premises and cloud techniques.</span>
              </li>
              <li className="mt-4">
                <span>
                  Github Actions with CodeQL & Dependabot frequently scans my codebases and alert me of any discovered
                  vulnerabilities in the code or its dependencies.
                </span>
              </li>
              <li className="mt-4">
                <span>Windows Defender Firewall rules are used to prevent unauthorized network access.</span>
              </li>
              <li className="mt-4">
                <span>
                  Cloudflare Zone-level Web Application Firewall rules are used to inspect and block malicious requests
                  before they reach my servers. In the last 30 days, over 5,000 malicious requests were blocked by the
                  firewall.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pl-4 xl:pl-8">
          <motion.div
            className="flex justify-center"
            ref={ref1}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SvgSecurityOn className="lg:w-[100%] w-[75%]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CyberSecurity;
