import { Wrapper, Button, SectionHeader } from "@components";
import { headerData, timeline } from "./utils";
import "./schedule.css";
import { handleDownloadGuidebook } from "@services/constants/globalUtils";

const Schedule = () => {
  return (
    <div className="schedule-container flex flex-col lg:flex-row gap-20 lg:gap-8">
      {/* SCHEDULE HEADER */}
      <div className="schedule-header max-w-[400px]">
        <SectionHeader {...headerData} />
        <br />

        <Button text="download guidebook" variant="btn-gray" onClick={handleDownloadGuidebook}/>
      </div>

      {/* AGENDA  */}
      <div className="schedule-agenda flex-1">
        {/* empty div ** loader */}

        {/* Timeline */}
        <div className="agenda-container flex flex-col gap-8">
          <div className="loader" />
          {timeline.map((item, index) => (
            <TimelineNode key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

function TimelineNode({ date, title, desc, index }) {
  return (
    <>
      <p className="uppercase text-white/40 text-right text-xs lg:text-sm xl:hidden">{date}</p>
      <div className="flex gap-4">
        <div className="count  min-w-6 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary text-dark font-bold text-center">
          {index + 1}
        </div>
        <div className="">
          <div className="flex justify-between mb-2">
            <h3 className="uppercase text-base lg:text-lg">{title}</h3>
            <div className="agenda-date w-[130px] text-right flex-1 hidden xl:block text-white/40">
              {date}
            </div>
          </div>
          <p className="text-white/60 text-sm lg:text-base">{desc}</p>
        </div>
      </div>
      {/* <div className="w-full h-[1px] rounded-sm bg-gradient-to-r opacity-30 from-primary to to-secondary"></div> */}
    </>
  );
}

export default Wrapper(Schedule, "schedule");
