import {socialMedia } from "./utils";
import { navList } from "@services/constants/navbar";
import "./footer.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Footer = () => {
  const text = `⭐ MALIKI TECH FESTIVAL ${new Date().getFullYear()}`;
  return (
    <>
      <motion.div
        className="footer-wrapper py-14"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <footer>
          {/* HEADER */}
          <h1 className="footer-header">
            <TypeAnimation
              sequence={["🥇SEE YOU CHAMPS🥇", 2000, text, 2000]}
              speed={5}
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <br />

          {/* LISTS */}
          <ul className="lists-container flex gap-4 md:gap-6 flex-wrap justify-center">
            {/* ITERABLE */}
            {navList.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className="list font-body-1 text-white/60 font-medium"
              >
                {item.name}
              </a>
            ))}
          </ul>

          <br />
          <br />

          {/* SOCIAL MEDIA ICONS */}
          <div className="social-media-container flex flex-wrap gap-6 lg:gap-10 justify-center">
            {/* ITERABLE */}
            {socialMedia.map((item, i) => (
              <a
                key={i}
                target="_blank"
                href={item.url ? item.url : ""}
                className={`social-media-icon p-2 hover:scale-125 transition-all ease-in ${
                  item.addOns ? item.addOns : ""
                }`}
              >
                {/* ICON */}
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-[24px] h-[24px]"
                />
              </a>
            ))}
          </div>

          <br />
          <br />
          {/* COPYRIGHT */}
          <p className="font-body-1 text-white/40 text-center">
            {`Term & Condition - Privacy Policy © ${new Date().getFullYear()} All right reserved by `}{" "}
            <br /> MALIKI TECH FESTIVAL
          </p>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;
