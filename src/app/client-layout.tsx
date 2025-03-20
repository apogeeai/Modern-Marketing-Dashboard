"use client";

import React, { useEffect } from "react";
import { Flowbite } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { CustomizerContextProvider } from "@/app/context/customizerContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <CustomizerContextProvider>
        {children}
      </CustomizerContextProvider>
    </Flowbite>
  );
} 