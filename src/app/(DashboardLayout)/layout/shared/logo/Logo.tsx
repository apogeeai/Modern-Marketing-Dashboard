'use client'
import React from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link';

const Logo = () => {
  const gradientClass = "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient";
  
  return (
    <Link href={'/'}>
      <Icon 
        icon="solar:atom-line-duotone" 
        className={`text-2xl ${gradientClass}`}
      />
    </Link>
  )
}

export default Logo
