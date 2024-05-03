import { SectionHeader } from "@components";
import { headerData, socialMedia } from "./utils";
import { navList } from "@services/constants/navbar";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper py-14">
        <footer>
          {/* HEADER */}
          <SectionHeader {...headerData} />
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
      </div>
    </>
  );
};

export default Footer;
