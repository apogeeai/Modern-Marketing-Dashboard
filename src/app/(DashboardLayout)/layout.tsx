"use client";
import React, { useContext } from "react";
import SidebarLayout from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";
import { CustomizerContext } from "@/app/context/customizerContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { activeLayout, isLayout } = useContext(CustomizerContext);
  return (
    <div className="flex w-full min-h-screen">
      <div className="page-wrapper flex w-full">
        {/* Header/sidebar */}
        {activeLayout === "vertical" && <SidebarLayout />}
        <div className="body-wrapper w-full bg-lightgray dark:bg-dark">
          {/* Top Header  */}
          <Header layoutType={activeLayout} />

          {/* Body Content  */}
          <div
            className={`${
              isLayout === "full"
                ? "w-full py-[30px] md:px-[30px] px-5"
                : "container mx-auto py-[30px]"
            } ${activeLayout === "horizontal" ? "xl:mt-3" : ""}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
