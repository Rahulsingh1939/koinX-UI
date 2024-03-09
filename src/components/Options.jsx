import React from "react";

const Frame = ({ property1, text = "Dashboard" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 h-4 ${
        property1 === "selected" ? "[border-bottom-style:solid]" : ""
      } ${property1 === "selected" ? "border-[#0052fe]" : ""} ${
        property1 === "selected" ? "border-b-2" : ""
      } ${
        property1 === "selected" ? "bg-white" : ""
      } !h-7 !border-b-1 !flex-[0_0_auto] !bg-[unset]`}
    >
      <div
        className={`[font-family:'Inter',Helvetica] ${
          property1 === "default" ? "text-text-2" : "text-primarydarkblue"
        } ${property1 === "default" ? "font-medium" : "font-semibold"}`}
      >
        {text}
      </div>
    </div>
  );
};

const opt = [
  {
    text: "Overview",
    property1: "selected",
  },
  {
    text: "Fundamentals",
    property1: "selected",
  },
  {
    text: "News Insights",
    property1: "default",
  },
  {
    text: "Sentiments",
    property1: "default",
  },
  {
    text: "Team",
    property1: "default",
  },
  {
    text: "Technicals",
    property1: "default",
  },
  {
    text: "Tokenomics",
    property1: "default",
  },
];
export const Options = () => {
  return (
    <div className="flex items-center gap-8 relative border-b [border-bottom-style:solid]">
      {opt.map((key, index) => {
        return <Frame key={index} text={key.text} property1={key.property1} />;
      })}
    </div>
  );
};
