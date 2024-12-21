import React from "react";

export default function FadeIn({ children, delay = 0 }) {
  return (
    <div
      className="animate-fade-in opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
}
