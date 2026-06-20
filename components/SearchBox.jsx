"use client";

import { useState } from "react";
import { MapPin, CarFront, User, ChevronDown, ArrowRight, Minus } from "lucide-react";
import { premiumFleetData } from "@/data/homeData";

export default function SearchBox() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [fleet, setFleet] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleCheckAvailability = () => {
    const WHATSAPP_NUMBER = "919725409908";
    
    let message = `Hello Amar Travels,\n\nI would like to check availability for:\n`;
    if (pickup) message += `*Pick-up:* ${pickup}\n`;
    if (destination) message += `*Destination:* ${destination}\n`;
    if (fleet) message += `*Fleet:* ${fleet}\n`;
    if (passengers) message += `*Passengers:* ${passengers}\n`;
    message += `\nPlease let me know the availability and pricing.`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const url = isMobile 
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  };

  return (
    <div className="w-full relative z-30 flex justify-center -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 mb-10 md:mb-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="bg-white rounded-3xl py-4 px-6 md:py-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-gray-100">
          
          {/* From */}
          <div className="flex flex-col w-full lg:w-1/4 lg:pr-6 lg:border-r border-gray-100 relative group">
            <div className="flex items-center gap-2 mb-2">
              <Minus size={16} className="text-gray-300" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">From</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 w-full">
                <MapPin className="text-[#DC241C] shrink-0" size={20} />
                <input 
                  type="text" 
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Pick-up location"
                  className="w-full text-sm font-medium text-dark-heading placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* To */}
          <div className="flex flex-col w-full lg:w-1/4 lg:px-6 lg:border-r border-gray-100 relative group">
            <div className="flex items-center gap-2 mb-2">
              <Minus size={16} className="text-gray-300" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">To</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 w-full">
                <MapPin className="text-[#DC241C] shrink-0" size={20} />
                <input 
                  type="text" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Destination"
                  className="w-full text-sm font-medium text-dark-heading placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Fleet */}
          <div className="flex flex-col w-full lg:w-1/4 lg:px-6 lg:border-r border-gray-100 relative group cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Fleet</span>
            </div>
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-3 w-full">
                <CarFront className="text-[#DC241C] shrink-0" size={20} />
                <select 
                  value={fleet}
                  onChange={(e) => setFleet(e.target.value)}
                  className="w-full text-sm font-medium text-dark-heading bg-transparent focus:outline-none cursor-pointer appearance-none pr-6"
                >
                  <option value="" disabled className="text-gray-400">Select fleet</option>
                  {premiumFleetData.map((item) => (
                    <option key={item.id} value={item.title}>{item.title}</option>
                  ))}
                </select>
              </div>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-dark-heading transition-colors absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* Passengers */}
          <div className="flex flex-col w-full lg:w-1/4 lg:px-6 relative group">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Passengers</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 w-full">
                <User className="text-[#DC241C] shrink-0" size={20} />
                <input 
                  type="text" 
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  placeholder="Add passengers"
                  className="w-full text-sm font-medium text-dark-heading placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-auto mt-4 lg:mt-0 flex-shrink-0">
            <button 
              onClick={handleCheckAvailability}
              className="w-full lg:w-auto bg-[#DC241C] hover:bg-[#b91c18] text-white rounded-xl px-8 py-4 flex items-center justify-center gap-3 font-semibold text-sm transition-all duration-300"
            >
              Check Availability
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
