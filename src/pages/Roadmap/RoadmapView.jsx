import { Root as AccordionRoot } from "@radix-ui/react-accordion";
import { RoadmapAccordion } from "./RoadmapAccordion";
import { roadmapData } from "./data";
import React from "react";

export const RoadmapView = () => {
  return (
    <div className="bg-black px-5 lg:px-[4.25rem] pb-[3.5rem] text-white" id="roadmap">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="mb-12 font-medium text-[3.375rem]">Roadmap</h2>
        <div className="grid grid-cols-3 gap-4 z-50">
          <div className="pb-3.5 border-b-4 font-medium text-lg tracking-[0.36px] opacity-40 z-50">
            2023
          </div>
          <div className="pb-3.5 border-b-4 font-medium text-lg tracking-[0.36px] z-50">
            2024
          </div>
          <div className="pb-3.5 border-b-4 font-medium text-lg tracking-[0.36px] opacity-40 z-50">
            2025
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start pt-[2.75rem]">
          <div className="sticky roadmap-shadow top-0 z-50 mx-auto">
            <h3 className=" font-medium [font-size:_clamp(6em,4vw,120px)] z-50 tracking-[2.4px]">2024</h3>
          </div>
          <div className="grow lg:max-w-[65%] ml-auto pt-7 px-2 lg:px-5">
            <AccordionRoot
              type="single"
              collapsible
              className="flex flex-col gap-8 divide-y max-w-[90%] divide-white divide-opacity-50"
              style={{ height: "1300px" }}
            >
              {roadmapData.map(({ sectionName, accordions }, i) => (
                <section className="pt-8 first:pt-0 " key={`roadmap-${i}`}>
                  <div className="flex justify-center items-center w-max mb-4 px-4 py-2 border border-white border-opacity-50 rounded-full bg-white bg-opacity-10	font-medium text-sm leading-none tracking-[0.28px]">
                    {sectionName}
                  </div>
                  <div className="flex flex-col gap-6">
                    {accordions.map(({ title, content }, j) => (
                      <RoadmapAccordion
                        key={`roadmap-${i}-${j}`}
                        title={title}
                        value={`roadmap-${i}-${j}`}
                      >
                        {content}
                      </RoadmapAccordion>
                    ))}
                  </div>
                </section>
              ))}
            </AccordionRoot>
          </div>
        </div>
      </div>
    </div>
  );
}
