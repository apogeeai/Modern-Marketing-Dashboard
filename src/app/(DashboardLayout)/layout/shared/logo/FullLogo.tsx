"use client";
import React from "react";
import { Icon } from "@iconify/react";

const FullLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon icon="solar:flask-line-duotone" className="text-[#60A5FA] text-2xl" />
      <span className="text-white font-ui-sans-serif text-xl font-semibold">ApogeeLabs</span>
    </div>
  );
};

export default FullLogo;
