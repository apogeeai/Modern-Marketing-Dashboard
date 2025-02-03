"use client";

import { CustomizerContext } from "@/app/context/customizerContext";

import { Card } from "flowbite-react";
import React, { useContext } from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}

const CardBox = ({ children, className }: MyAppProps) => {
  const { boxed } = useContext(CustomizerContext);
  return (
    <Card
      className={`${className} mb-[0.2625rem] ${
        boxed ? "rounded-md" : ""
      } glass-card`}
    >
      {children}
    </Card>
  );
};

export default CardBox;

// Add glass effect styles
const styles = `
.glass-card {
  background-image: radial-gradient(circle farthest-side, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6)), linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

:root[class~="dark"] .glass-card {
  background-image: radial-gradient(circle farthest-side, #61608333 20%, #2a29414d), linear-gradient(#18153366, #18153366);
  border-color: #2c2c3f;
  border: 1px solid #ffffff1a;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
