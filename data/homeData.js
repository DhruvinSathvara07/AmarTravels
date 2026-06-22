"use client";

import { ShieldCheck, CarFront, Users } from "lucide-react";

export const homeHeroData = {
  label: "WELCOME TO AMAR TRAVELS",
  heading: {
    plainText: "Journey with ",
    subText: "Comfort & ",
    highlightedText: "Style."
  },
  description: "Top-rated travel agency offering premium car rental in Ahmedabad, luxury bus booking online, and tempo traveller on rent. Book outstation cabs and family tour packages across Gujarat.",
  cta: {
    text: "Call Now",
    href: "/booking"
  },
  features: [
    {
      Icon: ShieldCheck,
      title: "Safe & Reliable",
    },
    {
      Icon: CarFront,
      title: "Premium Fleet",
    },
    {
      Icon: Users,
      title: "Expert Drivers",
    },
  ],
  image: {
    src: "/herosection.webp",
    alt: "Amar Travels Premium Van"
  }
};

export const premiumFleetData = [
  {
    id: 1,
    title: "New Model Swift Dzire with Carrier",
    seats: "4 + 1 Seats",
    ac: true,
    price: "12",
    image: "/swiftdzire.webp"
  },
  {
    id: 2,
    title: "New Model Ertiga SUV",
    seats: "6 + 1 Seats",
    ac: true,
    price: "16",
    image: "/ertigasuv.webp"
  },
  {
    id: 3,
    title: "Innova Crysta",
    seats: "7 + 1 Seats",
    ac: true,
    price: "18",
    image: "/invovacresta.webp"
  },
  {
    id: 4,
    title: "Kia Carens",
    seats: "6 + 1 Seats",
    ac: true,
    price: "16",
    image: "/kiacarens.webp"
  },
  {
    id: 5,
    title: "Tufan Cruiser",
    seats: "13 Seats",
    ac: true,
    price: "18",
    image: "/tufancruiser.webp"
  },
  {
    id: 6,
    title: "Tempo Traveller",
    seats: "12 to 20 Seats",
    ac: true,
    price: "24",
    image: "/tempotraveller.webp"
  },
  {
    id: 7,
    title: "Urbania Premium",
    seats: "16 Seats",
    ac: true,
    price: "28",
    image: "/urbaniapremium.webp"
  },
  {
    id: 8,
    title: "30 Seater Bus",
    seats: "30 Seats",
    ac: true,
    price: "45",
    image: "/30seetarbus.webp"
  },
  {
    id: 9,
    title: "56 Seater Bus",
    seats: "56 Seats",
    ac: true,
    price: "60",
    image: "/56seatarbus.webp"
  },
  {
    id: 10,
    title: "Luxury Cars & Buses",
    seats: "Any Size",
    ac: true,
    price: "-",
    image: "/alltypebusand luxurycar.webp"
  }
];

export const pricingPlanData = [
  {
    id: "car",
    name: "Car",
    description: "Standard Hatchback & Sedan",
    capacity: "4 to 7 Seater",
    duration: "300 Km / Day",
    tollTax: "Extra Charge",
    iconName: "Car"
  },
  {
    id: "luxurious",
    name: "Luxurious Car",
    description: "Vellfire, Mercedes, Audi, etc.",
    capacity: "4 to 7 Seater",
    duration: "300 Km / Day",
    tollTax: "Extra Charge",
    iconName: "Crown"
  },
  {
    id: "minibus",
    name: "Mini Bus",
    description: "Perfect for medium group travels",
    capacity: "9 to 16 Seater",
    duration: "300 Km / Day",
    tollTax: "Extra Charge",
    iconName: "Bus"
  },
  {
    id: "bus",
    name: "Bus",
    description: "Perfect for large group travels",
    capacity: "30 to 56 Seater",
    duration: "300 Km / Day",
    tollTax: "Extra Charge",
    iconName: "BusFront"
  }
];

export const premiumServicesData = [
  {
    id: 1,
    title: "Transport Service",
    description: "Find the best car rental near me and bus booking online. We offer reliable outstation taxi service and tempo traveller on rent in Ahmedabad.",
    iconName: "Car"
  },
  {
    id: 2,
    title: "Tours & Travels Service",
    description: "As the best travel agency in Ahmedabad, we offer customized holiday packages, family tour packages, and memorable gujarat tours.",
    iconName: "MapPin"
  },
  {
    id: 3,
    title: "Wedding Car Rental",
    description: "Premium wedding car rental in Ahmedabad. We provide luxury car rental and luxury bus booking for weddings, events, and special occasions.",
    iconName: "Heart"
  },
  {
    id: 4,
    title: "Family & Group Tours",
    description: "Comfortable vehicles for family vacations, group tours, pilgrimages and holiday trips across Gujarat.",
    iconName: "Users"
  },
  {
    id: 5,
    title: "Car & Bus Rental",
    description: "Corporate travel services, luxury bus rental Ahmedabad, and tempo traveller on rent. Rent a car for outstation with ease.",
    iconName: "Briefcase"
  },
  {
    id: 6,
    title: "Luxury Bus & Travel Service",
    description: "Luxury buses, Ertiga, Innova Crysta, Urbania and premium travel vehicles for tours, corporate travel and long-distance journeys.",
    iconName: "Crown"
  }
];

export const tourPackagesData = [
  {
    id: 1,
    title: "Statue of Unity",
    duration: "1 Day Trip",
    price: "1,499",
    image: "/serviceimage1.webp"
  },
  {
    id: 2,
    title: "Kutch Rann",
    duration: "2 Nights / 3 Days",
    price: "8,999",
    image: "/serviceimage2.webp"
  },
  {
    id: 3,
    title: "Dwarka",
    duration: "2 Nights / 3 Days",
    price: "7,999",
    image: "/serviceimage3.webp"
  },
  {
    id: 4,
    title: "Somnath",
    duration: "1 Night / 2 Days",
    price: "4,999",
    image: "/serviceimage4.webp"
  },
  {
    id: 5,
    title: "Gir National Park",
    duration: "2 Nights / 3 Days",
    price: "9,499",
    image: "/serviceimage5.webp"
  },
  {
    id: 6,
    title: "Ahmedabad Heritage",
    duration: "1 Day Trip",
    price: "1,299",
    image: "/serviceimage6.webp"
  }
];

export const whyChooseUsData = [
  {
    id: 1,
    title: "10+",
    subtitle: "Years of Experience",
    iconName: "Award"
  },
  {
    id: 2,
    title: "5000+",
    subtitle: "Happy Customers",
    iconName: "Users"
  },
  {
    id: 3,
    title: "100+",
    subtitle: "Luxury Vehicles",
    iconName: "Car"
  },
  {
    id: 4,
    title: "24/7",
    subtitle: "Customer Support",
    iconName: "Headset"
  },
  {
    id: 5,
    title: "100%",
    subtitle: "Safety & Comfort",
    iconName: "ShieldCheck"
  },
  {
    id: 6,
    title: "Best Price",
    subtitle: "Guarantee",
    iconName: "Tag"
  }
];

export const testimonialsData = [
  {
    id: 1,
    text: '"Amar Travels made our trip to Dwarka so comfortable. Excellent service!"',
    name: "Rakesh Patel",
    location: "Ahmedabad",
    image: "/review1.webp"
  },
  {
    id: 2,
    text: '"Very professional team and well-maintained vehicles. Highly recommended!"',
    name: "Meena Shah",
    location: "Vadodara",
    image: "/review2.webp"
  },
  {
    id: 3,
    text: '"Our family trip to Kutch was amazing. Thanks to Amar Travels!"',
    name: "Jignesh Mehta",
    location: "Surat",
    image: "/review3.webp"
  }
];

export const latestBlogsData = [
  {
    id: 1,
    date: "20 May 2024",
    title: "Top 10 Places to Visit in Gujarat",
    image: "/serviceimage1.webp"
  },
  {
    id: 2,
    date: "18 May 2024",
    title: "Road Trip Tips for a Safe Journey",
    image: "/serviceimage2.webp"
  },
  {
    id: 3,
    date: "15 May 2024",
    title: "Why Group Travel is Better",
    image: "/serviceimage3.webp"
  },
  {
    id: 4,
    date: "12 May 2024",
    title: "Weekend Getaways Near Ahmedabad",
    image: "/serviceimage4.webp"
  }
];
