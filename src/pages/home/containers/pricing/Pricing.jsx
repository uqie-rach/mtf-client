import { Wrapper, SectionHeader, Button } from "@components";
import { headerData, pricingData } from "./utils";
import { IChecklist } from "@assets";

const Pricing = () => {
  return (
    <>
      {/* HEADER  */}
      <SectionHeader {...headerData} />
      <br />
      <br />

      {/* CONTENT */}
      <div className="content-wrapper flex flex-wrap gap-10 justify-center">
        {/* CARDS */}
        <Card {...pricingData[0]} />
        <Card {...pricingData[1]} />
      </div>
    </>
  );
};

const Card = ({ title, price, features, cardVar, btnProps }) => (
  <div
    className={`pricing-card w-[320px] md:w-[350px] xl:w-[374px] max-w-[374px] h-[400px] md:h-[450px] xl:h-[530px] flex flex-col gap-8 ${cardVar} p-10 cursor-pointer hover:scale-110 transition-all ease-in-out duration-200`}
  >
    <div className="head">
      <h4 className="uppercase text-sm md:text-base xl:text-lg text-white/70 mb-2">
        {title}
      </h4>
      <p className="uppercase text-xl md:text-2xl xl:text-4xl font-bold">
        {price}
      </p>
    </div>
    <ul className="feat flex-1">
      {/* FEATURES */}
      {features &&
        features.map((feat, i) => (
          <div className="flex gap-2 mb-3" key={i}>
            <img
              src={IChecklist}
              alt={feat.name}
              className="md:w-[24px] md:h-[24px] xl:w-[28px] xl:h-[28px]"
            />
            <p className="text-white/60 text-sm md:text-base">{feat}</p>
          </div>
        ))}
    </ul>
    <div>
      <Button {...btnProps} />
    </div>
  </div>
);
export default Wrapper(Pricing, "pricing");
