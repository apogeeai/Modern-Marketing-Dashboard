"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FullLogo from "../../shared/logo/FullLogo";

interface MobileSidebarProps {
  onClose: () => void;
}

const MobileSidebar = ({ onClose }: MobileSidebarProps) => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboards",
      items: [
        {
          title: "eCommerce",
          href: "/dashboards/ecommerce",
          icon: "solar:shop-line-duotone",
        },
        {
          title: "Analytics",
          href: "/dashboards/analytics",
          icon: "solar:chart-line-duotone",
        },
        {
          title: "CRM",
          href: "/dashboards/crm",
          icon: "solar:users-group-rounded-line-duotone",
        },
        {
          title: "Predictive Analytics",
          href: "/dashboards/analytics/predictive-analytics",
          icon: "solar:chart-2-line-duotone",
        },
      ],
    },
    {
      title: "Settings (FPO)",
      items: [
        {
          title: "FAQ",
          href: "/settings/faq",
          icon: "solar:question-circle-line-duotone",
        },
        {
          title: "Account Settings",
          href: "/settings/account",
          icon: "solar:settings-line-duotone",
        },
        {
          title: "Log Out",
          href: "/auth/login",
          icon: "solar:logout-2-line-duotone",
        },
      ],
    },
  ];

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-5">
        <FullLogo />
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <Icon icon="solar:close-circle-line-duotone" className="w-6 h-6" />
        </button>
      </div>
      <ul className="space-y-2 font-medium">
        {menuItems.map((section, index) => (
          <li key={index}>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              {section.title}
            </div>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      pathname === item.href
                        ? "bg-gray-100 dark:bg-gray-700"
                        : ""
                    }`}
                    onClick={onClose}
                  >
                    <Icon
                      icon={item.icon}
                      className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                    <span className="ml-3">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSidebar;
