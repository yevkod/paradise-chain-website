import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";
import { AccordionTriggerIcon } from "../../components/AccordionTriggerIcon/AccordionTriggerIcon";

export function FAQAccordion({ value, title, children }) {
  return (
    <AccordionItem
      value={value}
      className="text-left text-black rounded-2xl bg-white"
    >
      <AccordionTrigger className="flex text-left items-center w-full gap-4 p-6 font-medium text-lg leading-snug">
        <AccordionTriggerIcon style={{ minWidth: "24px" }} />
        {title}
      </AccordionTrigger>
      <AccordionContent className="pl-16 pr-8 text-black font-normal text-base leading-snug accordion-animation">
        <div className="pb-6">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}
