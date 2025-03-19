"use client";

import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import { Icon } from "@iconify/react";
import { CustomizerContext } from "@/app/context/customizerContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FullLogo from "../../shared/logo/FullLogo";

interface SidebarLayoutProps {
  onClose?: () => void;
}

const SidebarLayout = ({ onClose }: SidebarLayoutProps) => {
  const { isCollapse } = useContext(CustomizerContext) || {};
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Sidebar
      className={`fixed menu-sidebar pt-6 bg-white dark:bg-darkgray z-[10] ${
        isCollapse === "mini-sidebar" ? "w-[70px]" : "w-[280px]"
      }`}
      aria-label="Sidebar with multi-level dropdown example"
    >
      <div className="mb-7 px-4 brand-logo">
        <FullLogo />
      </div>
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          {SidebarContent.map((item) => (
            <div key={item.id} className="px-3 py-2">
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                <Icon icon={item.icon} className="text-xl" />
                {isCollapse !== "mini-sidebar" && <span>{item.title}</span>}
              </div>
              {item.children && (
                <div className="mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      onClick={onClose}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(child.href)
                          ? "bg-primary text-white"
                          : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                      }`}
                    >
                      <Icon icon={child.icon} className="text-xl" />
                      {isCollapse !== "mini-sidebar" && <span>{child.title}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarLayout;