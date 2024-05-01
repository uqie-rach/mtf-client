import { Wrapper, Button} from "@components";
import { headerData } from "./utils";
import { IPlay } from "@assets";
import "./hero.css";


const Hero = () => {
  const handleLearnMore = () => {};
  const handleWatchteaser = () => {};
  return (
    <>
    {/* hero header */}
    <header className={`${headerData[0].classes}`}>
      <p className="header-label text-white">{headerData[0].label}</p>
      <div className="hero-wrap-title">
        <h1 className="hero-title">{headerData[0].title}</h1>
        <div className="hero-title-year">20<br/>24</div>
      </div>
      <h2 className="hero-title m-0">{headerData[0].subtitle}</h2>
      <div className="sm:w-9/12 mt-4">
        <p className="text-desc sm:tracking-widest ">{headerData[0].desc}</p>
        <br />
        <p className="text-desc sm:tracking-widest">{headerData[0].desc2}</p>
      </div>
    </header>
    {/* hero button */}
    <div className="mt-11 flex">
      <Button 
        text={"Learn More"}
        variant={"btn-primary"}
        onClick={handleLearnMore}
      />
      <button 
        onClick={handleWatchteaser}
        className="ml-4 font-body-1 btn-base flex"><img src={IPlay} className="mr-2"/>Watch The teaser</button>
    </div>
    </>
  );
};


export default Wrapper(Hero, "home");
