"use client";
import React from "react";
import { Navbar } from "flowbite-react";
import FullLogo from "../../shared/logo/FullLogo";

interface HeaderPropsType {
  layoutType: string;
}

const Header = ({ layoutType }: HeaderPropsType) => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto">
        <div className="flex h-14 items-center px-4">
          <FullLogo />
        </div>
      </div>
    </header>
  );
};

export default Header;
