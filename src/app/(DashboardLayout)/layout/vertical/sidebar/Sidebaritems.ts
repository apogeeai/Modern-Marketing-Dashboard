import { Icon } from "@iconify/react";

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  href: string;
  children?: MenuItem[];
}

const sidebarContent: MenuItem[] = [
  {
    id: "dashboards",
    title: "Dashboards",
    icon: "solar:home-2-line-duotone",
    href: "/dashboards/eCommerce",
    children: [
      {
        id: "ecommerce",
        title: "eCommerce",
        icon: "solar:shop-2-line-duotone",
        href: "/dashboards/eCommerce",
      },
      {
        id: "analytics",
        title: "Analytics",
        icon: "solar:chart-line-duotone",
        href: "/dashboards/analytics",
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        icon: "solar:chart-2-line-duotone",
        href: "/dashboards/analytics/predictive-analytics",
      },
      {
        id: "crm",
        title: "CRM",
        icon: "solar:users-group-rounded-line-duotone",
        href: "/dashboards/crm",
      },
    ],
  },
  {
    id: "settings",
    title: "Settings (FPO)",
    icon: "solar:settings-line-duotone",
    href: "/theme-pages/faq",
    children: [
      {
        id: "faq",
        title: "FAQ",
        icon: "solar:question-circle-line-duotone",
        href: "/theme-pages/faq",
      },
      {
        id: "account",
        title: "Account Settings",
        icon: "solar:user-id-line-duotone",
        href: "/apps/user-profile/profile",
      },
      {
        id: "logout",
        title: "Log Out",
        icon: "solar:logout-2-line-duotone",
        href: "/auth/auth1/login",
      },
    ],
  },
];

export default sidebarContent;
