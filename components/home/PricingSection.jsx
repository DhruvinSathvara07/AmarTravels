"use client";

import { Check } from "lucide-react";
import { pricingPlanData } from "@/data/homeData";

function PricingCard({ plan }) {
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl bg-white transition-all duration-300 group cursor-pointer hover:-translate-y-1 ${plan.isPopular ? 'border-2 border-[#DC241C] shadow-[0_8px_30px_rgb(220,36,28,0.12)]' : 'border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] mt-4 mb-4 hover:border-[#DC241C] hover:shadow-[0_8px_30px_rgb(220,36,28,0.08)]'}`}>
      
      {/* Most Popular Badge */}
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#DC241C] text-white text-xs font-semibold px-4 py-1.5 rounded-md">
          Most Popular
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
        <p className="text-sm text-gray-500">{plan.description}</p>
      </div>

      {/* Features List */}
      <ul className="flex flex-col gap-4 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <Check size={16} className="text-gray-400 shrink-0" strokeWidth={2.5} />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button 
        className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
          plan.isPopular 
            ? 'bg-[#DC241C] text-white hover:bg-[#b91c18]' 
            : 'bg-white text-gray-900 border border-gray-200 hover:border-[#DC241C] hover:text-[#DC241C] hover:bg-red-50/30'
        }`}
      >
        Choose Plan
      </button>

    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-6 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose <span className="text-[#DC241C]">Your</span> Plan
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {pricingPlanData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

      </div>
    </section>
  );
}
