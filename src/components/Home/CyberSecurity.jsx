import { useRef } from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "framer-motion";
import { SiCloudflare, SiGithubactions } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import SvgSecurityOn from "../../assets/SvgSecurityOn";
import textStyles from "../../style-strings/text-sizes";

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
      <div className="lg:w-[90%] 2xl:my-20 my-16 w-[80%] mx-auto lg:flex lg:space-y-0 space-y-10 lg:flex-wrap items-start justify-center">
        <div className="lg:w-[50%] lg:pr-4 2xl:pr-8">
          <motion.div
            className="mb-8"
            ref={ref2}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -25 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className={textStyles.subHeader + "text-center"}>Cybersecurity</h1>
          </motion.div>
          <motion.div
            className="flex justify-evenly my-8 xl:my-4 2xl:my-8"
            ref={ref3}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -25 }}
            transition={{ duration: 1, delay: isInView2 ? 0.2 : 0 }}
            viewport={{ once: true }}
          >
            <NavLink to="https://github.com/features/actions">
              <SiGithubactions className={textStyles.header} />
            </NavLink>
            <NavLink to="https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/">
              <MdSecurity className={textStyles.header} />
            </NavLink>
            <NavLink to="https://www.cloudflare.com/application-services/products/waf/">
              <SiCloudflare className={textStyles.header} />
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
            <ul className={textStyles.standardText + "pl-5 list-disc"}>
              <li className="mt-4">
                <span>
                  Security is a critical focus of mine and is present in every step of the SDLC, from dependency
                  auditing during development to maintaining firewall rules in production.
                </span>
              </li>
              <li className="mt-4">
                <span>
                  Github Actions with CodeQL & Dependabot periodically scans my codebases and alert me of any discovered
                  vulnerabilities in the code or its dependencies.
                </span>
              </li>
              <li className="mt-4">
                <span>Windows Defender Firewall rules are used to prevent unauthorized network access.</span>
              </li>
              <li className="mt-4">
                <span>
                  A mix of custom and default Cloudflare Web Application Firewall rules are used to inspect and block
                  automated and malicious requests before they reach my servers.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="lg:w-[50%] lg:pl-4 2xl:pl-8">
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
