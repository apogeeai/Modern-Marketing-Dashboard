"use client";
import React from "react";
import { FullLogo } from "./FullLogo";
import { Button } from "flowbite-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex-shrink-0">
          <FullLogo />
        </div>
        <div className="flex items-center space-x-2">
          <nav className="flex items-center space-x-2">
            <Button
              color="gray"
              pill
              size="sm"
              onClick={() => document.documentElement.classList.toggle('dark')}
            >
              {document.documentElement.classList.contains('dark') ? '☀️' : '🌙'}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
} 