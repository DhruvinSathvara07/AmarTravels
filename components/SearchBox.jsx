"use client";

import { MapPin, Calendar, User, ChevronDown, ArrowRight, Minus } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="w-full relative z-30 flex justify-center -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 mb-10 md:mb-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="bg-white rounded-3xl py-4 px-6 md:py-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-gray-100">
          
          {/* From */}
          <div className="flex flex-col w-full lg:w-1/4 lg:pr-6 lg:border-r border-gray-100 relative group cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Minus size={16} className="text-gray-300" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">From</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#DC241C]" size={20} />
                <span className="text-sm font-medium text-dark-heading">Pick-up location</span>
              </div>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-dark-heading transition-colors" />
            </div>
          </div>

          {/* To */}
          <div className="flex flex-col w-full lg:w-1/4 lg:px-6 lg:border-r border-gray-100 relative group cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Minus size={16} className="text-gray-300" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">To</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#DC241C]" size={20} />
                <span className="text-sm font-medium text-dark-heading">Destination</span>
              </div>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-dark-heading transition-colors" />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col w-full lg:w-1/4 lg:px-6 lg:border-r border-gray-100 relative group cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#DC241C]" size={20} />
                <span className="text-sm font-medium text-dark-heading">Select date</span>
              </div>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-dark-heading transition-colors" />
            </div>
          </div>

          {/* Passengers */}
          <div className="flex flex-col w-full lg:w-1/4 lg:px-6 relative group cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Passengers</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="text-[#DC241C]" size={20} />
                <span className="text-sm font-medium text-dark-heading">Add passengers</span>
              </div>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-dark-heading transition-colors" />
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-auto mt-4 lg:mt-0 flex-shrink-0">
            <button className="w-full lg:w-auto bg-[#DC241C] hover:bg-[#b91c18] text-white rounded-xl px-8 py-4 flex items-center justify-center gap-3 font-semibold text-sm transition-all duration-300">
              Check Availability
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
