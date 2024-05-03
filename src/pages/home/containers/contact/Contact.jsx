import { Wrapper, SectionHeader } from "@components";
import { MapsData, contactInfo } from "./utils";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <SectionHeader
        title="let's talk about it"
        label="contact"
        desc=""
        classes="text-center"
      />
      <br />
      <br />

      {/* MAPS PREVIEW */}
      <div className="relative">
        {/* MAPS CONTAINER */}
        <a
          className="map-container w-full bg-white/10 h-[500px] overflow-hidden"
          href={MapsData.mapsUrl}
          target="_blank"
        >
          <img
            src={MapsData.image}
            alt={MapsData.address}
            className="object-cover w-full h-full"
          />
          <span>
            <p className="font-body-1">See on Maps</p>
          </span>
        </a>

        {/* MAPS OVERLAY */}
        <div className="hidden sm:block absolute bottom-0 right-0 w-[280px] md:w-[350px] lg:w-[425px] bg-dark p-8 z-10">
          <p className="uppercase text-sm md:text-base lg:text-lg text-white/70 ">
            location
          </p>
          <h4 className="uppercase font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            we carry out in uin maulana malik ibrahim malang
          </h4>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-info flex flex-wrap gap-4 md:gap-10 mt-4">
        {contactInfo.map((info, i) => (
          <a className="flex flex-center gap-4 cursor-pointer" key={i}>
            <img src={info.icon} alt={info.title} />
            <p className="font-body-2">{info.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Wrapper(Contact, "contact");
