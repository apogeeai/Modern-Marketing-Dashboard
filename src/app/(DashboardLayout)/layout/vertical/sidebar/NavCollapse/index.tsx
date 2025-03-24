"use client";
import { Sidebar } from "flowbite-react";
import React from "react";
import NavItems from "../NavItems";
import { Icon } from "@iconify/react";
import { HiOutlineChevronDown } from "react-icons/hi";

const NavCollapse = () => {
  return (
    <div className="nav-collapse">
      <NavItems />
    </div>
  );
};

export default NavCollapse;