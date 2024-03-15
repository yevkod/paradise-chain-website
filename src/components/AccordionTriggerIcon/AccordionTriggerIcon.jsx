import React from "react";

export function AccordionTriggerIcon({
  fill = "black",
  fillOpacity = "1",
  color = "white",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill={fill} fillOpacity={fillOpacity} />
      <path
        d="M12 7.91675V16.0834"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.91669 12H16.0834"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
