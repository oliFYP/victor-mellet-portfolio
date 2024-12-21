import React from "react";

export default function SlideUp({ children, delay = 0 }) {
  return (
    <div
      className="animate-slide-up translate-y-4 opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
}
