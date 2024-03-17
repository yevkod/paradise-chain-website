import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";
import { AccordionTriggerIcon } from "../../components/AccordionTriggerIcon/AccordionTriggerIcon";

export function RoadmapAccordion({
  title,
  value,
  children,
}) {
  return (
    <AccordionItem value={value} className="max-w-[90%] sm:max-w-[100%]">
      <AccordionTrigger className="flex justify-between text-left gap-3 items-center w-full font-medium text-lg leading-none tracking-[0.36px]">
        <div>{title}</div>
        <div>
          <AccordionTriggerIcon fill="white" fillOpacity="0.2" />
        </div>
      </AccordionTrigger>
      <AccordionContent className="max-w-[634px] font-medium text-base leading-[1.625rem] text-white text-opacity-70 accordion-animation">
        <div className="pt-4">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}
