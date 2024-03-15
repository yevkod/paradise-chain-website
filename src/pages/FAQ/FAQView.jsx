import { Root as AccordionRoot } from "@radix-ui/react-accordion";
import { FAQAccordion } from "./FAQAccordion";
import { faq } from "./faq";
import React from "react";

export const FAQView = () => {
  return (
    <div
      className="relative bg-black pt-[90px] pb-[90px] flex flex-col items-center"
      id="faq"
    >
      <h2 className="mb-[3.37rem] relative questions-shadow text-white text-center font-medium text-[3.375rem] leading-none tracking-[1px] z-50">
        Find the answers here
      </h2>
      <AccordionRoot
        type="single"
        collapsible
        className="flex flex-col w-full text-black max-w-[800px] gap-4 z-50"
      >
        {faq.map(({ title, content }, i) => (
          <FAQAccordion key={`faq-${i}`} title={title} value={`faq-${i}`}>
            {content}
          </FAQAccordion>
        ))}
      </AccordionRoot>
    </div>
  );
}
