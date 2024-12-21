import React from "react";
import SlideUp from "./animations/SlideUp";

export default function ExperienceCard({
  title,
  place,
  date,
  points,
  delay = 0,
}) {
  return (
    <SlideUp delay={delay}>
      <div className="group bg-navy-100/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-4 border border-navy-200 hover:border-navy-300 transition-all hover:-translate-y-1">
        <h3 className="font-bold text-lg text-navy-700 group-hover:text-navy-600 transition-colors">
          {title}
        </h3>
        <div className="text-navy-600 font-medium">{place}</div>
        <div className="text-navy-500 text-sm mb-4">{date}</div>
        <ul className="list-disc list-inside space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-navy-600">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </SlideUp>
  );
}
