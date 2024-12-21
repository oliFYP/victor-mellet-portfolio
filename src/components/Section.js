import React from "react";

export default function Section({ title, children, icon }) {
  return (
    <section className="mt-8">
      <div className="flex items-center gap-3 mb-6">
        {icon && <div className="text-navy-600">{icon}</div>}
        <h2 className="font-display text-2xl font-bold text-navy-700">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
