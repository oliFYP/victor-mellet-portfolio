import React from "react";
import FadeIn from "./animations/FadeIn";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-navy-800 to-navy-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Victor Mellet
          </h1>
          <h2 className="text-2xl opacity-90 text-navy-100">
            Étudiant en Mesures Physiques
          </h2>
          <div className="mt-6 text-navy-100 text-lg max-w-2xl leading-relaxed">
            Passionné par les sciences et la technique, je combine rigueur
            académique et expérience pratique
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
