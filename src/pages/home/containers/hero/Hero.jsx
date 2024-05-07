import { Wrapper, Button } from "@components";
import { headerData } from "./utils";
import { IPlay } from "@assets";
import "./hero.css";

const Hero = () => {
  const handleLearnMore = () => {
    window.location.href = "#about";
  };
  const handleWatchteaser = () => {
    window.open("https://www.instagram.com/reel/C6mt4b6ygVZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", "_blank");
  };
  return (
    <>
      {/* hero header */}
      <header className={`${headerData[0].classes}`}>
        <p className="header-label text-white/60">{headerData[0].label}</p>
        <div>
          <h1 className="hero-title flex items-end md:items-center gap-3">
            A HACKATON{" "}
            <span className="hero-title-year flex flex-col w-fit">
              <span>20</span>
              <span>24</span>
            </span>
          </h1>
          <h1 className="hero-title">FOR GLOBAL GOALS</h1>
        </div>
        <div className="sm:w-9/12 mt-4">
          <p className="text-desc sm:tracking-widest ">{headerData[0].desc}</p>
          <br />
          <p className="text-desc sm:tracking-widest">{headerData[0].desc2}</p>
        </div>
      </header>
      {/* hero button */}
      <div className="mt-11 flex flex-wrap-reverse gap-4">
        <Button
          text={"Learn More"}
          variant={"btn-primary"}
          onClick={handleLearnMore}
        />
        <button
          onClick={handleWatchteaser}
          className="font-body-1 btn-base flex"
        >
          <img src={IPlay} className="mr-2" />
          Watch The teaser
        </button>
      </div>
    </>
  );
};

export default Wrapper(Hero, "home");
