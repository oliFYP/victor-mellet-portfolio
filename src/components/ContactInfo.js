import React from "react";
import { Mail, Phone, MapPin, Car } from "lucide-react";
import SlideUp from "./animations/SlideUp";

export default function ContactInfo() {
  return (
    <SlideUp delay={200}>
      <div className="bg-navy-100/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mt-8 border border-navy-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 group">
            <MapPin
              className="text-navy-600 group-hover:scale-110 transition-transform"
              size={20}
            />
            <span className="text-navy-700">Briançon</span>
          </div>
          <div className="flex items-center gap-3 group">
            <Phone
              className="text-navy-600 group-hover:scale-110 transition-transform"
              size={20}
            />
            <span className="text-navy-700">06.25.43.53.12</span>
          </div>
          <div className="flex items-center gap-3 group">
            <Mail
              className="text-navy-600 group-hover:scale-110 transition-transform"
              size={20}
            />
            <span className="text-navy-700">melletvictor@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 group">
            <Car
              className="text-navy-600 group-hover:scale-110 transition-transform"
              size={20}
            />
            <span className="text-navy-700">Permis B (véhiculé)</span>
          </div>
        </div>
      </div>
    </SlideUp>
  );
}
