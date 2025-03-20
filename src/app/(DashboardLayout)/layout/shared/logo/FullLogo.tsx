"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const FullLogo = () => {
  const pathname = usePathname();
  const isCollapsed = pathname.includes("mini-sidebar");

  const gradientClass = "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient";

  if (isCollapsed) {
    return (
      <div className="flex items-center justify-center px-4">
        <Icon 
          icon="solar:atom-line-duotone" 
          className={`text-2xl ${gradientClass}`}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-4">
      <Icon 
        icon="solar:atom-line-duotone" 
        className={`text-2xl shrink-0 ${gradientClass}`}
      />
      <span className="font-ui-sans-serif text-xl font-semibold truncate">
        <span className="text-white">Apogee</span>
        <span className={gradientClass}>Labs</span>
      </span>
    </div>
  );
};

export default FullLogo;
