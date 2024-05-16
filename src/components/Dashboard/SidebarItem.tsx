import React from "react";
import { IconType } from "react-icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface SidebarItemProps {
  item: {
    title: string;
    href: string;
    Icon: IconType;
  };
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const isActive = pathname === item.href;

  return (
    <button
      onClick={() => navigate(item.href)}
      className={`rounded-lg py-3 w-full ${
        isActive &&
        "bg-gradient-to-br from-rose-400 via-fuchsia-400 to-indigo-600 text-white"
      }`}
    >
      <div
        className={`px-4 flex items-center justify-start gap-4
        }`}
      >
        <item.Icon className="text-3xl" />
        <p className="text-lg">{item.title}</p>
      </div>
    </button>
  );
};
