"use client";

import ArticleCard from "./ArticleCard";

const fallbackData = [
  {
    id: 1,
    category: "TRAVEL GUIDE",
    title: "Why Road Trips Are the Best Way to Explore India",
    description: "Discover why road trips give you the freedom to explore hidden places and create unforgettable memories.",
    image: "/swiftdzire.png",
    date: "May 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    category: "TRAVEL TIPS",
    title: "Essential Travel Tips for a Safe & Comfortable Journey",
    description: "Follow these travel tips to ensure a smooth, safe and stress-free journey with your family and friends.",
    image: "/tempotraveller.png",
    date: "May 15, 2024",
    readTime: "4 min read"
  },
  {
    id: 3,
    category: "VEHICLE GUIDE",
    title: "How to Choose the Right Vehicle for Your Trip",
    description: "Choose the perfect vehicle for your trip based on group size, comfort, budget and travel type.",
    image: "/tufancruiser.png",
    date: "May 5, 2024",
    readTime: "6 min read"
  }
];

export default function ArticleGrid({ blogs, limit = 0 }) {
  // Always render something. Use fallbackData if blogs is missing or empty.
  const resolvedBlogs = blogs && blogs.length > 0 ? blogs : fallbackData;
  const displayBlogs = limit > 0 ? resolvedBlogs.slice(0, limit) : resolvedBlogs;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
      {displayBlogs.map((blog, index) => (
        <ArticleCard key={blog.id || index} blog={blog} />
      ))}
    </div>
  );
}
