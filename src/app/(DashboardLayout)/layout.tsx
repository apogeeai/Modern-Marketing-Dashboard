"use client";
import React, { useContext } from "react";
import Header from "./layout/vertical/header/Header";
import { CustomizerContext } from "@/app/context/customizerContext";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activeLayout, isLayout } = useContext(CustomizerContext);
  return (
    <div className="flex w-full min-h-screen">
      <div className="page-wrapper flex w-full">
        <div className="body-wrapper w-full bg-lightgray dark:bg-dark">
          {/* Top Header  */}
          <Header layoutType={activeLayout} />

          {/* Body Content */}
          <div className="container mx-auto py-[30px] px-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
