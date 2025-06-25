"use client";
import { useState } from "react";

// Importing the necessary components
import ComicsTab from "./tabs/ComicsTab";
import HobbiesTab from "./tabs/HobbiesTab";
import PicturesTab from "./tabs/PicturesTab";
import ReviewsTab from "./tabs/ReviewsTab";
import TechTab from "./tabs/TechTab";

const tabs = [
  { key: "tech", label: "/tech" },
  { key: "hobbies", label: "/hobbies" },
  { key: "reviews", label: "/reviews" },
  { key: "pictures", label: "/pictures" },
  { key: "comics", label: "/comics" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("tech");

  const renderContent = () => {
    switch (activeTab) {
      case "tech":
        return <TechTab />;
      case "hobbies":
        return <HobbiesTab />;
      case "reviews":
        return <ReviewsTab />;
      case "pictures":
        return <PicturesTab />;
      case "comics":
        return <ComicsTab />;
      default:
        return <p>Welcome to .txt me later!</p>;
    }
  };

  // Main component rendering
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#672abd] to-[#25174b] px-4 pt-10 text-[#f4f4f8ee]">
      {/* Header */}
      <div className="flex flex-col items-center justify-start pb-7">
        <h1 className="text-5xl font-bold">.txt me later</h1>
        <p className="mt-2 text-lg">
          A newsletter of stuff we'd text you anyway.
        </p>
      </div>

      <div className="mx-auto w-full max-w-4xl">
        {/* Tab Bar */}
        <div className="flex space-x-2 border-b border-black text-black">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                console.log(`Switched to ${tab.key} tab`);
              }}
              className={`rounded-t-md border border-b-0 border-black px-4 py-1 text-sm font-semibold transition ${
                activeTab === tab.key
                  ? "bg-[#c1a4c7]"
                  : "bg-[#e0cce7] hover:bg-[#d4bfe0]"
              }`}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="border border-t-0 border-black bg-[#c1a4c7] px-4 py-6">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}
