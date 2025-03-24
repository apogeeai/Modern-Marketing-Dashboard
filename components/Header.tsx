"use client";
import React from "react";
import { FullLogo } from "./FullLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2">
          <FullLogo />
          <span className="text-sm text-muted-foreground">(Demo: Some items are FPO)</span>
        </div>
      </div>
    </header>
  );
}