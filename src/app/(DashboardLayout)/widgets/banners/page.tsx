import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import WelcomeBanner from "@/app/components/widgets/banners/WelcomeBanner";
import DownloaadBanner from "@/app/components/widgets/banners/DownloadBanner";
import ErroreBanner from "@/app/components/widgets/banners/ErroreBanner";
import EmptyBanner from "@/app/components/widgets/banners/EmptyBanner";
import NotificationBanner from "@/app/components/widgets/banners/NotificationBanner";
import MutualBanner from "@/app/components/widgets/banners/MutualFriendBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Banners Widgets",
  description: "Generated by create next app",
};

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Banners",
  },
];
const Banners = () => {
  return (
    <>
      <BreadcrumbComp title="Banners" items={BCrumb} />
      <div className="grid grid-cols-12 gap-30 ">
        <div className="lg:col-span-8 col-span-12">
          <WelcomeBanner />
          <DownloaadBanner />
          <div className="grid grid-cols-12 gap-30 mt-[30px]">
            <div className="md:col-span-6 col-span-12">
              <ErroreBanner />
            </div>
            <div className="md:col-span-6 col-span-12">
              <EmptyBanner />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <NotificationBanner />
          <MutualBanner />
        </div>
      </div>
    </>
  );
};

export default Banners;
