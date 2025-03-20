"use client";
import React from "react";
import { Icon } from "@iconify/react";

const CollapsedLogo = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <Icon 
        icon="solar:atom-line-duotone" 
        className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" 
      />
    </div>
  );
};

export default CollapsedLogo; 