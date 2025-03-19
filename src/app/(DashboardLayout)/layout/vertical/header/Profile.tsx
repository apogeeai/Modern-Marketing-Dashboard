"use client";
import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Add logout logic here
    router.push("/auth/login");
  };

  return (
    <Dropdown
      label={
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src="/images/profile/user-1.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="hidden md:block">
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">Adam Carfagna</h5>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>
      }
      arrowIcon={false}
      inline
      className="w-64"
    >
      <Dropdown.Header>
        <span className="block text-sm">Adam Carfagna</span>
        <span className="block truncate text-sm font-medium">admin@apogeelabs.com</span>
      </Dropdown.Header>
      <Dropdown.Item>
        <div className="flex items-center gap-2">
          <Icon icon="solar:user-id-line-duotone" className="w-5 h-5" />
          <span>Profile</span>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-2">
          <Icon icon="solar:settings-line-duotone" className="w-5 h-5" />
          <span>Settings</span>
        </div>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>
        <div className="flex items-center gap-2 text-red-600">
          <Icon icon="solar:logout-2-line-duotone" className="w-5 h-5" />
          <span>Sign out</span>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default Profile;
