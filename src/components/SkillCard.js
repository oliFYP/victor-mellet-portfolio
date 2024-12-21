import React from "react";
import SlideUp from "./animations/SlideUp";

export default function SkillCard({ title, level, description, delay = 0 }) {
  return (
    <SlideUp delay={delay}>
      <div className="group bg-navy-100/80 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-navy-200 hover:border-navy-300 transition-all hover:-translate-y-1">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-navy-700 group-hover:text-navy-600 transition-colors">
            {title}
          </h3>
          {description && (
            <span className="text-sm text-navy-600 font-medium">
              {description}
            </span>
          )}
        </div>
        <div className="flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded transition-all ${
                i < level
                  ? "bg-navy-600 group-hover:bg-navy-500"
                  : "bg-navy-300"
              }`}
            />
          ))}
        </div>
      </div>
    </SlideUp>
  );
}
