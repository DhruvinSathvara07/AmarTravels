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
    src: "/logo.png",
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
    { name: "Contact", href: "/contact" },
  ],
  cta: {
    text: "Book Now",
    href: "/booking"
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
  description: "Amar Travels is a trusted tours & travels in Ahmedabad offering car,buses, luxury vehicles, tour travel, across Gujarat. With buses and cars comfortable with professional drivers, and reliable service, we make every journey safe, memorable and comfortable",
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
    src: "/herosection.png",
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
  backgroundImage: "/ctabackgroundimage.png",
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
      name: "Rakesh Patel",
      location: "Ahmedabad, Gujarat",
      image: "/review1.png",
      review: "Amar Travels made our family trip to Dwarka so comfortable! The vehicle was clean, spacious, and extremely luxurious. Excellent customer service from start to finish!",
      rating: 5,
    },
    {
      id: 2,
      name: "Meena Shah",
      location: "Vadodara, Gujarat",
      image: "/review2.png",
      review: "Very professional team and well-maintained vehicles. We rented a bus for a corporate outing and the ride was exceptionally smooth. Highly recommended for premium travel!",
      rating: 5,
    },
    {
      id: 3,
      name: "Jignesh Mehta",
      location: "Surat, Gujarat",
      image: "/review3.png",
      review: "Our family trip to Kutch was amazing, thanks to Amar Travels. The driver was extremely polite, punctual, and knew all the routes perfectly. Will definitely book again!",
      rating: 5,
    },
    {
      id: 4,
      name: "Priyesh Sharma",
      location: "Rajkot, Gujarat",
      image: "/review1.png",
      review: "Outstanding service quality! The booking process was seamless, and the vehicle arrived ahead of schedule. The seats were very comfortable for a long road trip.",
      rating: 5,
    },
    {
      id: 5,
      name: "Anita Desai",
      location: "Gandhinagar, Gujarat",
      image: "/review2.png",
      review: "Excellent experience renting a premium van. Highly cooperative staff and transparent billing. It made our pilgrimage journey hassle-free and truly memorable.",
      rating: 5,
    },
  ]
};

export const ctaData = {
  heading: "Let's Travel Together",
  description: "Whether it's a family trip, corporate travel or a spiritual journey — we are here to make it exceptional.",
  buttonText: "Book Your Journey",
  image: {
    src: "/herosection.png",
    alt: "Amar Travels Premium Vehicle"
  }
};

export const footerData = {
  brand: {
    logo: "/logo.png",
    description: "Your trusted travel partner for comfortable and memorable journeys across Gujarat and beyond."
  },
  socials: [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "WhatsApp", href: "https://wa.me/919725409908" },
    { name: "YouTube", href: "https://youtube.com" }
  ],
  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Booking", href: "/booking" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
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
