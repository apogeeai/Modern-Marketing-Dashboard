"use client";
import React from "react";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';

const NavItems = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="nav-items">
      {/* Simplified navigation structure */}
      <Link href="/dashboard">
        <div className={`nav-item ${pathname === '/dashboard' ? 'active' : ''}`}>
          <Icon icon="solar:home-2-outline" className="nav-icon" />
          <span>{t('Dashboard')}</span>
        </div>
      </Link>
    </div>
  );
};

export default NavItems;