import React, { useState } from "react";

import { Wrapper, SectionHeader } from "@components";
import { eventData, headerData, speakerData } from "./utils";
import { Button } from "@components";
import "./about.css";

const About = () => {
  const [active, setActive] = useState("hackaton");
  const [ready, setReady] = useState(false);

  const handleConnect = () => alert("Coming soon!");
  return (
    <>
      {/* ABOUT EVENT */}
      <div className="about__event mb-12">
        <SectionHeader {...headerData[0]} />
        <br />
        <br />

        {/* ABOUT EVENT CONTENT */}
        <div className="event-container">
          {eventData.map((event, index) => (
            <Event
              key={index}
              {...event}
              classes={`event-${event.name}`}
              active={active === event.name}
              onclick={() => setActive(event.name)}
            />
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* ABOUT SPEAKER */}
      <div className="about__speaker">
        {/* ABOUT SPEAKER CONTENT */}
        <div className={`${ready ? "" : "blur-2xl grayscale-[0.3]"}`}>
          <div className="image-wrapper">
            <img
              src={speakerData.profile}
              alt={speakerData.name}
              className="w-[180px] md:w-[220px] lg:w-[294px]"
              draggable={false}
            />
            <div className="speaker-socials">
              {speakerData.socials.map((social, index) => (
                <a href={social.url} target="_blank" key={index}>
                  <img
                    key={index}
                    src={social.icon}
                    alt={social.name}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="speaker-details">
            <p className="font-body-2">{speakerData.name}</p>
            <p className="font-body-2 text-white/60">{speakerData.role}</p>
          </div>
        </div>

        {/* ABOUT SPEAKER DESCRIPTION */}
        <header>
          <SectionHeader {...headerData[1]} />
          <br />
          <Button
            text={"connect"}
            variant={"btn-primary"}
            onClick={handleConnect}
          />
        </header>
      </div>
    </>
  );
};

function Event({ name, subtitle, desc, icon, classes, active, onclick }) {
  return active ? (
    <div className={`events ${classes}`}>
      {/** HEADER */}
      <div className="event-header">
        <img src={icon} alt={name} className="logo" />
        <div className="header-text">
          <p className="event-name">{name.toUpperCase()}</p>
          <p className="event-subtitle">{subtitle}</p>
        </div>
      </div>

      {/** DESCRIPTION */}
      <p className="text-desc w-[90%]">{desc}</p>
    </div>
  ) : (
    <div className={`events event-wrapped ${classes}`} onClick={onclick}>
      <header>
        <div className="wrapped-event-header">
          <img src={icon} alt={name} className="logo" />
          <p className="event-name font-body-2">{name.toUpperCase()}</p>
        </div>
      </header>
    </div>
  );
}

export default Wrapper(About, "about");
