import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RxActivityLog } from "react-icons/rx";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineSwatch } from "react-icons/hi2";
import { IoMdLogIn } from "react-icons/io";
import { SidebarItem } from "./SidebarItem.tsx";

interface SidebarProps {
  toggleSidebar: () => void;
}

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    Icon: MdDashboard,
  },
  {
    title: "Deal",
    href: "/deals",
    Icon: HiOutlineSwatch,
  },
  {
    title: "Lead",
    href: "/lead",
    Icon: RiGroupLine,
  },
  {
    title: "Activites",
    href: "/activities",
    Icon: RxActivityLog,
  },
  {
    title: "Setting",
    href: "/settings",
    Icon: IoSettingsOutline,
  },
];

export const Sidebar = ({ toggleSidebar }: SidebarProps) => {
  return (
    <div className="w-[250px] bg-gray-100 h-full hidden lg:block z-10 shadow-lg shadow-gray-400 transition-all duration-150 fixed">
      <div className="py-2 w-full flex flex-col h-full">
        <div className="flex justify-end w-full">
          <button
            className="ml-auto pr-2 w-fit cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="py-4 w-full">
          <p className="ml-3 text-5xl font-extrabold">CSH</p>
        </div>
        <div className="mt-6">
          <div className="flex flex-col w-full">
            {sidebarItems?.map((item, i) => (
              <div key={i} className="w-full">
                <SidebarItem item={item} />
              </div>
            ))}
          </div>
        </div>
        <button className="mt-auto mb-10 px-2 flex items-center gap-4">
          <IoMdLogIn className="text-3xl" />
          <p className="text-lg">Log out</p>
        </button>
      </div>
    </div>
  );
};
