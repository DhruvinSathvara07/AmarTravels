

export const blogHeroData = {
  label: "OUR BLOG",
  heading: {
    plainText: "Travel Stories,",
    subText: "Tips & ",
    highlightedText: "Guides",
    className: "max-w-[600px] text-4xl sm:text-[46px] lg:text-[46px]"
  },
  description: "Explore travel stories, expert tips, destination guides and latest updates from Amar Travels to make your journey comfortable, safe and memorable.",
  descriptionClassName: "text-[14.5px] max-w-[480px]",
  cta: {
    text: "Explore Blogs",
    href: "#blogs"
  },
  features: [],
  image: {
    src: "/herosection.webp",
    alt: "Amar Travels Blog"
    // alt: "Amar Travels Blog"
  }
};

export const latestBlogsData = [
  {
    id: 1,
    slug: "why-road-trips-are-best",
    category: "TRAVEL GUIDE",
    title: "Why Road Trips Are the Best Way to Explore India",
    description: "Discover why road trips give you the freedom to explore hidden places and create unforgettable memories.",
    image: "/swiftdzire.webp",
    date: "May 15, 2024",
    readTime: "5 min read",
    author: "Amar Travels Team",
    content: {
      intro: "India is a land of diverse cultures, breathtaking landscapes, and countless hidden gems. While flights and trains are convenient, nothing compares to the freedom and excitement of a road trip.",
      sections: [
        {
          heading: "1. Freedom to Explore",
          paragraph: "Road trips give you the freedom to stop wherever you want, explore hidden places, and enjoy the journey at your own pace."
        },
        {
          heading: "2. Beautiful Landscapes",
          paragraph: "From the mountains to the beaches, from deserts to lush green valleys - India's beauty is best experienced on the road."
        },
        {
          heading: "3. Memorable Experiences",
          paragraph: "The small stops, local food, interactions with locals and unexpected moments make road trips unforgettable."
        }
      ],
      conclusion: "So next time you plan a trip, hit the road with Amar Travels and create memories that last a lifetime."
    }
  },
  {
    id: 2,
    slug: "essential-travel-tips",
    category: "TRAVEL TIPS",
    title: "Essential Travel Tips for a Safe & Comfortable Journey",
    description: "Follow these travel tips to ensure a smooth, safe and stress-free journey with your family and friends.",
    image: "/tempotraveller.webp",
    date: "May 15, 2024",
    readTime: "4 min read",
    author: "Amar Travels Team",
    content: {
      intro: "Planning a trip can be exciting, but the actual journey requires preparation. A safe and comfortable trip is the foundation of a great vacation.",
      sections: [
        {
          heading: "Pack Smart and Light",
          paragraph: "Always pack essentials in a carry-on and keep necessary documents handy. Overpacking can cause unnecessary stress during travel."
        },
        {
          heading: "Stay Hydrated and Rested",
          paragraph: "Long journeys can be tiring. Make sure you drink enough water and get adequate sleep before hitting the road."
        },
        {
          heading: "Plan Your Route",
          paragraph: "Having a well-planned route with scheduled stops helps in breaking down long journeys and keeps everyone refreshed."
        }
      ],
      conclusion: "With Amar Travels, you can relax while we take care of the driving. Safe travels!"
    }
  },
  {
    id: 3,
    slug: "choose-right-vehicle",
    category: "VEHICLE GUIDE",
    title: "How to Choose the Right Vehicle for Your Trip",
    description: "Choose the perfect vehicle for your trip based on group size, comfort, budget and travel type.",
    image: "/tufancruiser.webp",
    date: "May 5, 2024",
    readTime: "6 min read",
    author: "Amar Travels Team",
    content: {
      intro: "Selecting the right vehicle is crucial for a comfortable trip. It depends on several factors like the number of passengers, terrain, and the amount of luggage.",
      sections: [
        {
          heading: "Consider the Group Size",
          paragraph: "For solo travelers or couples, a sedan might suffice. For families or larger groups, an SUV or a tempo traveller offers the space you need."
        },
        {
          heading: "Check the Luggage Capacity",
          paragraph: "Ensure the vehicle has enough boot space for everyone's luggage so the seating area remains clutter-free."
        },
        {
          heading: "Assess the Terrain",
          paragraph: "If you are traveling to hilly areas or rough terrains, an SUV with better ground clearance is highly recommended."
        }
      ],
      conclusion: "No matter your requirement, Amar Travels has a diverse fleet to ensure you get the perfect vehicle for your journey."
    }
  }
];
