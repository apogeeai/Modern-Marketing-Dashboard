import RollBaseIndex from "@/app/components/theme-pages/casl";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CASL Page",
  description: "Generated by create next app",
};



const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "CASL",
  },
];


const RollBase = () => {

  return (
    <>
      <BreadcrumbComp title="Rollbase Access" items={BCrumb} />
      <RollBaseIndex/>
    </>
  );
};

export default RollBase;
