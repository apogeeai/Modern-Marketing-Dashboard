
"use client";
import React from "react";
import { Icon } from "@iconify/react";

export const FullLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon 
        icon="mdi:flask" 
        className="h-6 w-6 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text" 
      />
      <div className="flex items-center">
        <span className="text-xl font-bold">Apogee</span>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
          Labs
        </span>
      </div>
    </div>
  );
};
