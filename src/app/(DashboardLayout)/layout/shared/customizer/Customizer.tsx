"use client";
import React, { useContext } from "react";
import { Button, Drawer } from "flowbite-react";
import { Icon } from "@iconify/react";
import { CustomizerContext } from "@/app/context/customizerContext";
import SimpleBar from "simplebar-react";

const Customizer = () => {
  const { activeMode, setActiveMode } = useContext(CustomizerContext);

  return (
    <div className="fixed right-4 top-4 z-[999]">
      <div className="flex gap-2">
        <Button
          color={activeMode === "light" ? "primary" : "light"}
          onClick={() => setActiveMode("light")}
          className="h-10 w-10 p-0 flex items-center justify-center"
        >
          <Icon icon="solar:sun-bold-duotone" className="w-5 h-5" />
        </Button>
        <Button
          color={activeMode === "dark" ? "primary" : "light"}
          onClick={() => setActiveMode("dark")}
          className="h-10 w-10 p-0 flex items-center justify-center"
        >
          <Icon icon="solar:moon-line-duotone" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Customizer;
