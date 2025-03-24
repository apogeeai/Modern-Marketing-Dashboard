
"use client";
import React from "react";
import { FullLogo } from "@/app/components/shared/FullLogo";
import { HiBeaker } from "react-icons/hi";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2">
          <HiBeaker className="h-6 w-6 text-blue-500" />
          <FullLogo />
          <span className="text-sm text-muted-foreground">(Demo: Some items are FPO)</span>
        </div>
      </div>
    </header>
  );
}
