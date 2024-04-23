import { Wrapper, Button } from "@components";
import { IPlay } from "@assets";

const Hero = () => {
  return (
    <div className="hero-container mt-[120px] lg:mt-[140px]">
      <div className="hero-text">
        <p className="label text-sm md:text-base lg:text-lg text-white/70 font-bold uppercase">empowering the future</p>
        <h1 className="uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[100px] xl:leading-[1] my-3 font-bold">
          a hackaton <br />
          for global goals
          </h1>
        <p className="text-desc mb-6 max-w-[900px]">
          Maliki Tech Fest adalah pintu gerbang Anda menuju masa depan yang
          lebih cerah! Terlibatlah dalam hackathon online kami, di mana
          kreativitas dan kecerdasan bertemu untuk mengatasi masalah paling
          mendesak di dunia.
          <br />
          <br />
          Jangan lewatkan hari seminar kami, di mana para ahli akan
          menginspirasi dan mendidik tentang cara memanfaatkan teknologi untuk
          pembangunan global yang berkelanjutan.
        </p>
      </div>
      <div className="hero-btn flex gap-8 flex-wrap items-center">
        <Button text="learn more" variant="btn-primary" onClick={() => {}} />
        <div className="btn-teaser-wrapper flex items-center gap-1">
          <img src={IPlay} alt="watch the teaser" />
          <Button
            text="watch the teaser"
            variant="bg-dark"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Wrapper(Hero, "home");
