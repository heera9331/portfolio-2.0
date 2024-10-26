"use client";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Toaster } from "react-hot-toast";
import MobileHeader from "@/components/mobile-header";
import Blogs from "@/components/blog-list";
import { useState, useEffect } from "react";

import {
  IoHome,
  IoSchool,
  IoBriefcase,
  IoFolder,
  IoStar,
  IoDocumentText,
  IoCall,
} from "react-icons/io5";
import {
  Home,
  Education,
  Experience,
  Projects,
  Skills,
  Contacts,
} from "./_components/sections";

const tabIcons: Record<string, JSX.Element> = {
  home: <IoHome />,
  education: <IoSchool />,
  experience: <IoBriefcase />,
  projects: <IoFolder />,
  skills: <IoStar />,
  blogs: <IoDocumentText />,
  contacts: <IoCall />,
};

interface TabMenuProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ activeTab, handleTabChange }) => {
  const tabs = [
    "home",
    "education",
    "experience",
    "projects",
    "skills",
    "blogs",
    "contacts",
  ];

  return (
    <ul className="flex overflow-auto" style={{ scrollbarWidth: "none" }}>
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`mr-2 px-4 py-2 rounded-lg cursor-pointer font-medium ${
            activeTab === tab
              ? "bg-primary text-yellow"
              : "bg-secondary text-light"
          }`}
          onClick={() => handleTabChange(tab)}
        >
          <Link href={`?tab=${tab}`} className="flex gap-3 items-center">
            {tabIcons[tab]} {/* Render the icon based on the tab */}
            <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default function Page() {
  const params = useSearchParams();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setActiveTab(params.get("tab") ?? "home");
  }, [params]);

  return (
    <div>
      <Toaster />
      <div className="grid grid-cols-12 px-4 md:px-10 lg:px-40 gap-4 my-4 relative">
        {/* sidebar only visible on md | desktop */}
        <Sidebar
          className={"hidden md:block md:col-span-3 sticky top-4 !min-h-[95vh]"}
        />

        {/* mobile header */}
        <MobileHeader />

        <Card className="col-span-12 md:col-span-9 min-w-full !min-h-[95vh]">
          <main className="w-full">
            {/* navigation */}
            <nav className="overflow-hidden">
              <ul
                className="flex gap-1 bg-ternary p-3 rounded-lg"
                style={{ scrollbarWidth: "none" }}
              >
                <TabMenu
                  activeTab={activeTab}
                  handleTabChange={handleTabChange}
                />
              </ul>
            </nav>
          </main>

          {activeTab === "home" && <Home />}
          {activeTab === "education" && <Education />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "blogs" && <Blogs />}
          {activeTab === "contacts" && <Contacts />}
        </Card>
      </div>
    </div>
  );
}
