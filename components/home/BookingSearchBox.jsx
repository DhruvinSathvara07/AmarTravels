"use client";

import { MapPin, Plane, Calendar, User, ChevronDown, ArrowRight } from "lucide-react";

export default function BookingSearchBox() {
  return (
    <div className="w-full relative z-30 flex justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 absolute top-0 -translate-y-1/2">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 md:p-3 flex flex-col lg:flex-row items-center justify-between gap-4 border border-gray-100">
          
          {/* From */}
        <div className="flex items-center gap-3 px-4 py-2 flex-1 w-full lg:w-auto lg:border-r border-gray-100">
          <MapPin className="text-[#DC241C]" size={20} />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-bold text-gray-800">From</span>
            <input 
              type="text" 
              placeholder="Pickup location" 
              className="text-sm text-gray-500 outline-none w-full bg-transparent placeholder-gray-400"
            />
          </div>
        </div>

        {/* To */}
        <div className="flex items-center gap-3 px-4 py-2 flex-1 w-full lg:w-auto lg:border-r border-gray-100">
          <Plane className="text-[#DC241C]" size={20} />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-bold text-gray-800">To</span>
            <input 
              type="text" 
              placeholder="Destination" 
              className="text-sm text-gray-500 outline-none w-full bg-transparent placeholder-gray-400"
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-3 px-4 py-2 flex-1 w-full lg:w-auto lg:border-r border-gray-100 cursor-pointer">
          <Calendar className="text-[#DC241C]" size={20} />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-bold text-gray-800">Date</span>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Select date</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Passengers */}
        <div className="flex items-center gap-3 px-4 py-2 flex-1 w-full lg:w-auto cursor-pointer">
          <User className="text-[#DC241C]" size={20} />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-bold text-gray-800">Passengers</span>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Add passengers</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full lg:w-auto bg-[#DC241C] hover:bg-[#b91c18] text-white rounded-xl px-6 py-4 flex items-center justify-center gap-2 font-semibold text-sm transition-colors whitespace-nowrap">
          Check Availability
          <ArrowRight size={16} />
        </button>

      </div>
      </div>
    </div>
  );
}
