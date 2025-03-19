"use client";

import React from "react";
import { Card } from "flowbite-react";
import { Icon } from "@iconify/react";

const PredictiveAnalytics = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Predictive Analytics</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h5>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$45,289</h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Icon icon="solar:dollar-minimalistic-line-duotone" className="text-xl text-primary" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Orders</h5>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,234</h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Icon icon="solar:cart-line-duotone" className="text-xl text-primary" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Customers</h5>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">789</h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Icon icon="solar:users-group-rounded-line-duotone" className="text-xl text-primary" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PredictiveAnalytics; 