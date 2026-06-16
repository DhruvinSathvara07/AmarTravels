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
    src: "/home-hero-bg.png",
    alt: "Amar Travels Premium Van"
  }
};

export const premiumFleetData = [
  {
    id: 1,
    title: "Sedan",
    seats: "4 Seats",
    ac: true,
    price: "12",
    image: "/vehicle1.png"
  },
  {
    id: 2,
    title: "SUV",
    seats: "6 Seats",
    ac: true,
    price: "16",
    image: "/vehicle2.png"
  },
  {
    id: 3,
    title: "Innova Crysta",
    seats: "7 Seats",
    ac: true,
    price: "18",
    image: "/vehicle3.png"
  },
  {
    id: 4,
    title: "Tempo Traveller",
    seats: "12 Seats",
    ac: true,
    price: "24",
    image: "/vehicle6.png"
  },
  {
    id: 5,
    title: "Luxury Bus",
    seats: "45 Seats",
    ac: true,
    price: "45",
    image: "/vehicle8.png"
  }
];

export const pricingPlanData = [
  {
    id: "car",
    name: "Car",
    description: "Standard Hatchback & Sedan",
    isPopular: false,
    features: [
      "4 to 7 Seater Capacity",
      "300 Km / Day Minimum",
      "Toll Tax Extra Applicable"
    ]
  },
  {
    id: "luxurious",
    name: "Luxurious Car",
    description: "Vellfire, Mercedes, Audi, etc.",
    isPopular: true,
    features: [
      "4 to 7 Seater Capacity",
      "300 Km / Day Minimum",
      "Toll Tax Extra Applicable"
    ]
  },
  {
    id: "bus",
    name: "Mini Bus & Bus",
    description: "Perfect for large group travels",
    isPopular: false,
    features: [
      "9 to 40 Seater Capacity",
      "300 Km / Day Minimum",
      "Toll Tax Extra Applicable"
    ]
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
