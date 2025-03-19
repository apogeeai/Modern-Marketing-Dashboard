"use client";
import "flowbite";
import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { CustomizerContext } from "@/app/context/customizerContext";
import FullLogo from "../../shared/logo/FullLogo";
import { Drawer } from "flowbite-react";
import MobileSidebar from "../sidebar/MobileSidebar";

interface HeaderPropsType {
  layoutType: string;
}

const Header = ({ layoutType }: HeaderPropsType) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  const { isCollapse, setIsCollapse } = useContext(CustomizerContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[5] ${
          isSticky
            ? "bg-lightgray dark:bg-dark shadow-md fixed w-full"
            : "bg-transparent"
        }`}
      >
        <Navbar
          fluid
          className={`rounded-none bg-transparent dark:bg-transparent py-4 sm:px-30 px-4 ${
            layoutType === "horizontal" ? "container mx-auto" : ""
          }`}
        >
          {/* Mobile Toggle Icon */}
          <span
            onClick={() => setIsMobileSidebar(true)}
            className="h-10 w-10 flex text-black dark:text-white text-opacity-65 xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer"
          >
            <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
          </span>

          {/* Toggle Menu */}
          <span
            onClick={() => {
              if (isCollapse === "full-sidebar") {
                setIsCollapse("mini-sidebar");
              } else {
                setIsCollapse("full-sidebar");
              }
            }}
            className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer"
          >
            <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
          </span>

          {/* mobile-logo */}
          <div className="block xl:hidden">
            <FullLogo />
          </div>

          <Navbar.Collapse>
            <div className="flex items-center gap-3">
              {/* Messages Dropdown */}
              <Messages />

              {/* Notification Dropdown */}
              <Notifications />

              {/* Profile Dropdown */}
              <Profile />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>

      {/* Mobile Sidebar */}
      <Drawer
        open={isMobileSidebar}
        onClose={() => setIsMobileSidebar(false)}
        className="p-0"
      >
        <MobileSidebar onClose={() => setIsMobileSidebar(false)} />
      </Drawer>
    </>
  );
};

export default Header;
