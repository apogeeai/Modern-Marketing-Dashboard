
import React from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from "@iconify/react";
import { Sidebar } from "flowbite-react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import NavItems from "../NavItems";

interface NavCollapseProps {
  item: {
    id: string;
    name: string;
    icon: string;
    children?: any[];
    url?: string;
  };
}

const NavCollapse: React.FC<NavCollapseProps> = ({ item }) => {
  const pathname = usePathname();
  const activeDD = item.children?.find((t) => t.url === pathname);

  return (
    <>
      <Sidebar.Collapse
        label={item.name}
        open={activeDD ? true : false}
        icon={() => <Icon icon={item.icon} height={18} />}
        className={`${activeDD ? '!text-primary bg-lightprimary ' : ''} collapse-menu`}
        renderChevronIcon={(theme, open) => {
          const IconComponent = HiOutlineChevronDown;
          return (
            <IconComponent
              aria-hidden
              className={`${twMerge(theme.label.icon.open[open ? "on" : "off"])} drop-icon`}
            />
          );
        }}
      >
        {item.children && (
          <Sidebar.ItemGroup className="sidebar-dropdown">
            {item.children.map((child) => (
              <React.Fragment key={child.id}>
                {child.children ? (
                  <NavCollapse item={child} />
                ) : (
                  <NavItems item={child} />
                )}
              </React.Fragment>
            ))}
          </Sidebar.ItemGroup>
        )}
      </Sidebar.Collapse>
    </>
  );
};

export default NavCollapse;
