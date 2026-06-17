"use client";

import { ShieldCheck, CarFront, Users } from "lucide-react";

export const homeHeroData = {
  label: "WELCOME TO AMAR TRAVELS",
  heading: {
    plainText: "Journey with ",
    subText: "Comfort & ",
    highlightedText: "Style."
  },
  description: "Experience the best travel services across Gujarat with our premium fleet. We ensure your journeys are safe, comfortable, and truly memorable.",
  cta: {
    text: "Book Your Ride",
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
    src: "/herosection.png",
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
    image: "/swiftdzire.png"
  },
  {
    id: 2,
    title: "New Model Ertiga SUV",
    seats: "6 + 1 Seats",
    ac: true,
    price: "16",
    image: "/ertigasuv.png"
  },
  {
    id: 3,
    title: "Innova Crysta",
    seats: "7 + 1 Seats",
    ac: true,
    price: "18",
    image: "/invovacresta.png"
  },
  {
    id: 4,
    title: "Kia Carens",
    seats: "6 + 1 Seats",
    ac: true,
    price: "16",
    image: "/kiacarens.png"
  },
  {
    id: 5,
    title: "Tufan Cruiser",
    seats: "13 Seats",
    ac: true,
    price: "18",
    image: "/tufancruiser.png"
  },
  {
    id: 6,
    title: "Tempo Traveller",
    seats: "12 to 20 Seats",
    ac: true,
    price: "24",
    image: "/tempotraveller.png"
  },
  {
    id: 7,
    title: "Urbania Premium",
    seats: "16 Seats",
    ac: true,
    price: "28",
    image: "/urbaniapremium.png"
  },
  {
    id: 8,
    title: "30 Seater Bus",
    seats: "30 Seats",
    ac: true,
    price: "45",
    image: "/30seetarbus.png"
  },
  {
    id: 9,
    title: "56 Seater Bus",
    seats: "56 Seats",
    ac: true,
    price: "60",
    image: "/56seatarbus.png"
  },
  {
    id: 10,
    title: "Luxury Cars & Buses",
    seats: "Any Size",
    ac: true,
    price: "-",
    image: "/alltypebusand luxurycar.png"
  }
];

export const pricingPlanData = [
  {
    id: "car",
    name: "Car",
    description: "Standard Hatchback & Sedan",
    capacity: "4 to 7 Seater",
    duration: "300 Km / Day",
    tollTax: "Applicable",
    iconName: "Car"
  },
  {
    id: "luxurious",
    name: "Luxurious Car",
    description: "Vellfire, Mercedes, Audi, etc.",
    capacity: "4 to 7 Seater",
    duration: "300 Km / Day",
    tollTax: "Applicable",
    iconName: "Crown"
  },
  {
    id: "minibus",
    name: "Mini Bus",
    description: "Perfect for medium group travels",
    capacity: "9 to 16 Seater",
    duration: "300 Km / Day",
    tollTax: "Applicable",
    iconName: "Bus"
  },
  {
    id: "bus",
    name: "Bus",
    description: "Perfect for large group travels",
    capacity: "28 to 40 Seater",
    duration: "300 Km / Day",
    tollTax: "Applicable",
    iconName: "BusFront"
  }
];

export const premiumServicesData = [
  {
    id: 1,
    title: "Airport Transfers",
    description: "Hassle-free airport pickup & drop",
    iconName: "Plane"
  },
  {
    id: 2,
    title: "Corporate Travel",
    description: "Reliable travel support for businesses",
    iconName: "Briefcase"
  },
  {
    id: 3,
    title: "Wedding Transport",
    description: "Luxury vehicles for your special occasions",
    iconName: "Heart"
  },
  {
    id: 4,
    title: "Group Travel",
    description: "Comfortable travel for large groups",
    iconName: "Users"
  },
  {
    id: 5,
    title: "Outstation Trips",
    description: "Explore Gujarat & beyond with us",
    iconName: "MapPin"
  },
  {
    id: 6,
    title: "Event Transport",
    description: "Perfect for events and celebrations",
    iconName: "CalendarHeart"
  }
];

export const tourPackagesData = [
  {
    id: 1,
    title: "Statue of Unity",
    duration: "1 Day Trip",
    price: "1,499",
    image: "/serviceimage1.png"
  },
  {
    id: 2,
    title: "Kutch Rann",
    duration: "2 Nights / 3 Days",
    price: "8,999",
    image: "/serviceimage2.png"
  },
  {
    id: 3,
    title: "Dwarka",
    duration: "2 Nights / 3 Days",
    price: "7,999",
    image: "/serviceimage3.png"
  },
  {
    id: 4,
    title: "Somnath",
    duration: "1 Night / 2 Days",
    price: "4,999",
    image: "/serviceimage4.png"
  },
  {
    id: 5,
    title: "Gir National Park",
    duration: "2 Nights / 3 Days",
    price: "9,499",
    image: "/serviceimage5.png"
  },
  {
    id: 6,
    title: "Ahmedabad Heritage",
    duration: "1 Day Trip",
    price: "1,299",
    image: "/serviceimage6.png"
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
    image: "/review1.png"
  },
  {
    id: 2,
    text: '"Very professional team and well-maintained vehicles. Highly recommended!"',
    name: "Meena Shah",
    location: "Vadodara",
    image: "/review2.png"
  },
  {
    id: 3,
    text: '"Our family trip to Kutch was amazing. Thanks to Amar Travels!"',
    name: "Jignesh Mehta",
    location: "Surat",
    image: "/review3.png"
  }
];

export const latestBlogsData = [
  {
    id: 1,
    date: "20 May 2024",
    title: "Top 10 Places to Visit in Gujarat",
    image: "/serviceimage1.png"
  },
  {
    id: 2,
    date: "18 May 2024",
    title: "Road Trip Tips for a Safe Journey",
    image: "/serviceimage2.png"
  },
  {
    id: 3,
    date: "15 May 2024",
    title: "Why Group Travel is Better",
    image: "/serviceimage3.png"
  },
  {
    id: 4,
    date: "12 May 2024",
    title: "Weekend Getaways Near Ahmedabad",
    image: "/serviceimage4.png"
  }
];
