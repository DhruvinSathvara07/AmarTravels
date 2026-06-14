"use client";

import { Headphones, Clock, ShieldCheck } from "lucide-react";

export const contactHeroData = {
  label: "CONTACT US",
  heading: {
    plainText: "We're Here to ",
    subText: "Help You ",
    highlightedText: "Travel",
    className: "max-w-[600px] text-4xl sm:text-5xl md:text-6xl lg:text-[56px]"
  },
  description: "Have questions or need assistance with your travel plans? Our team is ready to help you 24/7. Reach out to us through any of the methods below.",
  cta: {
    text: "Book Now",
    href: "/booking"
  },
  features: [
    {
      Icon: Headphones,
      title: "24/7 Support",
      description: "We are always here to help you."
    },
    {
      Icon: Clock,
      title: "Quick Response",
      description: "Get fast and reliable answers anytime."
    },
    {
      Icon: ShieldCheck,
      title: "Trusted Service",
      description: "Your satisfaction is our top priority."
    }
  ],
  image: {
    src: "/aboutherosection.png", // Reuses premium hero background image
    alt: "Contact Amar Travels"
  }
};

export const contactInfoData = [
  {
    id: "phone",
    iconName: "PhoneCall",
    heading: "Phone",
    mainText: "+91 98765 43210",
    smallText: "Mon - Sun (24/7)"
  },
  {
    id: "email",
    iconName: "Mail",
    heading: "Email",
    mainText: "info@amartravels.com",
    smallText: "We reply within minutes"
  },
  {
    id: "location",
    iconName: "MapPin",
    heading: "Location",
    mainText: "Ahmedabad, Gujarat, India",
    smallText: "Visit our office"
  },
  {
    id: "working-hours",
    iconName: "Clock3",
    heading: "Working Hours",
    mainText: "24/7 Available",
    smallText: "Always open for you"
  }
];

export const contactFormData = {
  heading: "Send Us a Message",
  description: "",
  fields: [
    { id: "fullName", label: "Name", type: "text", placeholder: "Your name", colSpan: 1 },
    { id: "email", label: "Email", type: "email", placeholder: "Your email", colSpan: 1 },
    { id: "subject", label: "Subject", type: "text", placeholder: "Inquiry for car rental", colSpan: 2 },
    { id: "message", label: "Message", type: "textarea", placeholder: "How can we help?", colSpan: 2 }
  ],
  buttonText: "Send Message"
};

export const officeCardData = {
  heading: "Our Office",
  address: {
    name: "Amar Travels",
    line1: "123, S.G. Highway,",
    line2: "Ahmedabad,",
    line3: "Gujarat - 380054, India"
  },
  buttonText: "Get Directions",
  buttonLink: "https://maps.google.com/?q=Amar+Travels,+Ahmedabad",
  mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14698.340542677428!2d72.665005!3d22.928668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e890012c9971f%3A0x5250d392a7ed38e8!2sAMAR%20TRAVELS!5e0!3m2!1sen!2sus!4v1781417438163!5m2!1sen!2sus"
};

export const faqData = {
  label: "FREQUENTLY ASKED QUESTIONS",
  heading: {
    plainText: "Quick Answers to\nCommon ",
    highlightedText: "Questions"
  },
  description: "Here are some common questions our customers ask before traveling with us.",
  faqs: [
    {
      id: 1,
      question: "How can I book a ride with Amar Travels?",
      answer: "You can easily book a ride by calling our 24/7 helpline, filling out the booking form on our website, or visiting our office. We'll assist you in choosing the best vehicle for your needs."
    },
    {
      id: 2,
      question: "Do you provide airport transfer services?",
      answer: "Yes, we provide reliable and punctual airport transfer services. Our drivers will ensure you reach the airport on time or pick you up promptly upon your arrival."
    },
    {
      id: 3,
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, you can cancel or reschedule your booking. Please let us know at least 24 hours in advance. Cancellation policies may apply depending on the type of booking."
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, bank transfers, and cash. You can choose the most convenient method for you."
    }
  ]
};
