"use client";

import {
  BadgeCheck,
  Users,
  CarFront,
  UserRound,
  Headphones,
  ShieldCheck,
  TimerReset,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export const navbarData = {
  logo: {
    src: "/logo.webp",
    alt: "Amar Travels Logo",
    width: 130,
    height: 42
  },
  links: [
    { name: "Home", href: "/" },
    { name: "Booking", href: "/booking" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ],
  cta: {
    text: "Book Now",
    href: "tel:+919725409908"
  }
};

export const heroData = {
  label: "ABOUT AMAR TRAVELS",
  heading: {
    plainText: "Your Journey,",
    subText: "Our ",
    highlightedText: "Passion.",
    className: "max-w-[500px] text-4xl sm:text-[46px] lg:text-[46px]"
  },
  description: "Amar Travels is a trusted travel agency in Ahmedabad offering premium car rental, luxury bus booking, and tempo traveller on rent across Gujarat. With professional drivers and reliable outstation taxi service, we make every journey safe, memorable and comfortable.",
  cta: {
    text: "Book Now",
    href: "/booking"
  },
  features: [
    {
      Icon: ShieldCheck,
      title: "Safe & Reliable",
    },
    {
      Icon: CarFront,
      title: "Luxury Vehicles",
    },
    {
      Icon: Users,
      title: "Customer First",
    },
  ],
  image: {
    src: "/herosection.webp",
    alt: "Amar Travels"
  }
};

export const breadcrumbData = {
  homeText: "Home",
  homeHref: "/",
  aboutText: "About Amar Travels"
};

export const storyData = {
  label: "OUR STORY",
  heading: {
    plainText: "Driven by Purpose,",
    subText: "Guided by ",
    highlightedText: "Values"
  },
  description: "Started with a vision to redefine travel experiences in Gujarat, Amar Travels has grown into a trusted brand known for reliability, comfort and professionalism. Every journey we serve is a relationship we value.",
  cta: {
    text: "Discover Our Services",
    href: "/services"
  },
  stats: [
    {
      Icon: BadgeCheck,
      value: "10+",
      label: "Years of\nExperience",
    },
    {
      Icon: Users,
      value: "5000+",
      label: "Happy\nCustomers",
    },
    {
      Icon: CarFront,
      value: "100+",
      label: "Luxury\nVehicles",
    },
    {
      Icon: UserRound,
      value: "50+",
      label: "Expert\nDrivers",
    },
    {
      Icon: Headphones,
      value: "24/7",
      label: "Customer\nSupport",
    },
    {
      Icon: ShieldCheck,
      value: "100%",
      label: "Safety &\nComfort",
    },
  ]
};

export const missionData = {
  label: "OUR MISSION",
  heading: "Making Every Journey\nMeaningful",
  description: "To make travel easy and comfortable with reliable car rental, bus rental, and tours & travels services across Ahmedabad and Gujarat for every journey and occasion.",
  backgroundImage: "/ctabackgroundimage.webp",
  features: [
    {
      Icon: ShieldCheck,
      title: "Safety",
      description: "Ensuring secure and worry-free travel.",
      borderClass: "border-b border-r border-white/10 lg:border-b-0",
    },
    {
      Icon: CarFront,
      title: "Comfort",
      description: "Premium vehicles for a relaxed journey.",
      borderClass: "border-b border-white/10 lg:border-b-0 lg:border-r",
    },
    {
      Icon: TimerReset,
      title: "Punctuality",
      description: "On-time service, every time.",
      borderClass: "border-r border-white/10 lg:border-r",
    },
    {
      Icon: BadgeCheck,
      title: "Trust",
      description: "Building long-term relationships.",
      borderClass: "border-none",
    },
  ]
};

export const reviewData = {
  label: "WHAT OUR CLIENTS SAY",
  heading: {
    plainText: "Trusted by Thousands of ",
    highlightedText: "Happy",
    postText: " Travelers"
  },
  reviews: [
    {
      id: 1,
      name: "Ishwar Chaudhary",
      location: "",
      image: "/review1.webp",
      review: "Amar travels is best sarvice. using service of this traveller is always a wonderful experience. Have used this traveller's services multiple times, believe me there was note a single problem I have faced. Nice and polite staff",
      rating: 5,
    },
    {
      id: 2,
      name: "Vishal chaudhary",
      location: "",
      image: "/review2.webp",
      review: "Excellent driving experience! The driver was punctual, friendly, and made the journey very smooth and comfortable.",
      rating: 5,
    },
    {
      id: 3,
      name: "HARSHAD PATEL",
      location: "",
      image: "/review3.webp",
      review: "Your driving,Speed, Clearing, Time managnment and also beheviyer is best.My journey is Maharastra and Goa.I am happy this experperiance. My family again long journey also.best of luck 🤞🤞",
      rating: 5,
    },
    {
      id: 4,
      name: "Janaksinhjadejalalsinh Jadeja",
      location: "",
      image: "/review1.webp",
      review: "Good sarvis kiran bhai",
      rating: 5,
    },
    {
      id: 5,
      name: "Chaudhary Rohit",
      location: "",
      image: "/review2.webp",
      review: "Best travels",
      rating: 5,
    },
    {
      id: 6,
      name: "Sparsh 4938",
      location: "",
      image: "/review3.webp",
      review: "Kiranbhai and car both are too good...",
      rating: 5,
    },
    {
      id: 7,
      name: "Viren Chaudhary",
      location: "",
      image: "/review1.webp",
      review: "Kiran Bhai and car both are too good 👍",
      rating: 5,
    },
    {
      id: 8,
      name: "Desai Sanjay",
      location: "",
      image: "/review2.webp",
      review: "Kiran Bhai good person",
      rating: 5,
    },
    {
      id: 9,
      name: "Jashu Patel",
      location: "",
      image: "/review3.webp",
      review: "Very good service",
      rating: 5,
    },
    {
      id: 10,
      name: "Chaudhary Mahesh",
      location: "",
      image: "/review1.webp",
      review: "Good service",
      rating: 5,
    },
    {
      id: 11,
      name: "Jigar Verat",
      location: "",
      image: "/review2.webp",
      review: "Great experience",
      rating: 5,
    },
    {
      id: 12,
      name: "Kiran Chaudhary",
      location: "",
      image: "/review3.webp",
      review: "Good sarvis",
      rating: 5,
    },
    {
      id: 13,
      name: "Ravi Chaudhary",
      location: "",
      image: "/review1.webp",
      review: "Good Service",
      rating: 5,
    },
    {
      id: 14,
      name: "Vivek Teckchandani",
      location: "",
      image: "/review2.webp",
      review: "Very nice and cooperative man",
      rating: 5,
    },
    {
      id: 15,
      name: "Janak Jadeja",
      location: "",
      image: "/review3.webp",
      review: "Good sarvis",
      rating: 5,
    },
    {
      id: 16,
      name: "Kishan Chaudhary",
      location: "",
      image: "/review1.webp",
      review: "Highly recommended. Polite and very nice behaviour with the customer.👍",
      rating: 5,
    },
    {
      id: 17,
      name: "Meena Choudhary",
      location: "",
      image: "/review2.webp",
      review: "Good",
      rating: 5,
    },
    {
      id: 18,
      name: "Chirag Trivedi",
      location: "",
      image: "/review3.webp",
      review: "Mind Blowing Experience And Such a Decent Staff They Have !😇",
      rating: 5,
    },
    {
      id: 19,
      name: "અમરધામ લાલગેબી આશ્રમ મોડપર લાલગેબી આશ્રમ",
      location: "",
      image: "/review1.webp",
      review: "Super sef driving",
      rating: 5,
    },
    {
      id: 20,
      name: "chaudhari jig's anjana",
      location: "",
      image: "/review2.webp",
      review: "Kiranbhai has very good driving skills.",
      rating: 5,
    },
  ]
};

export const ctaData = {
  heading: "Let's Travel Together",
  description: "Whether it's a family trip, corporate travel or a spiritual journey — we are here to make it exceptional.",
  buttonText: "Book Your Journey",
  image: {
    src: "/herosection.webp",
    alt: "Amar Travels Premium Vehicle"
  }
};

export const footerData = {
  brand: {
    logo: "/logo.webp",
    description: "Your trusted travel partner for comfortable and memorable journeys across Gujarat and beyond."
  },
  socials: [
    { name: "Facebook", href: "https://www.instagram.com/amar_travels_9094/" },
    { name: "Instagram", href: "https://www.instagram.com/amar_travels_9094/" },
    { name: "WhatsApp", href: "https://wa.me/919725409908" },
  ],
  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Booking", href: "/booking" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
      { name: "Service Areas", href: "/locations" },
      { name: "Contact", href: "/contact" }
    ]
  },
  services: {
    title: "Our Services",
    links: [
      { name: "Transport Service", href: "/services#transport" },
      { name: "Tours & Travels Service", href: "/services#tours" },
      { name: "Wedding Car Rental", href: "/services#wedding" },
      { name: "Family & Group Tours", href: "/services#family-group" },
      { name: "Car & Bus Rental", href: "/services#rental" },
      { name: "Luxury Bus & Travel Service", href: "/services#luxury" }
    ]
  },
  support: {
    title: "Support",
    links: [
      { name: "Home", href: "/" },
      { name: "Booking", href: "/booking" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
      { name: "Locations", href: "/locations" },
      { name: "Contact", href: "/contact" }
    ]
  },
  contact: {
    title: "Contact Info",
    items: [
      { Icon: Phone, value: "+91 97254 09908", href: "tel:+919725409908" },
      { Icon: Phone, value: "+91 97242 49908", href: "tel:+919724249908" },
      { Icon: Mail, value: "kkchaudhary20190@gmail.com", href: "mailto:kkchaudhary20190@gmail.com" },
      { Icon: MapPin, value: "Ahmedabad, Gujarat, India", href: "https://maps.google.com/?q=Ahmedabad,+Gujarat,+India" }
    ]
  },
  copyright: "© 2026 Amar Travels. All Rights Reserved."
};
