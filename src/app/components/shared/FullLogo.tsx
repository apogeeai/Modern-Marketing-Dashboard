"use client";
import React from "react";
import { Beaker } from "lucide-react";

export const FullLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Beaker className="h-6 w-6 text-blue-500" />
      <div className="flex items-center">
        <span className="text-xl font-bold">Apogee</span>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
          Labs
        </span>
      
      </div>
    </div>
  );
};
