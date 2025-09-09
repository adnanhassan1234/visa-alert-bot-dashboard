"use client";

import Dashboard from "@/components/pages/Dashboard";
import React, { useEffect, useState } from "react";

const page = () => {
  const [stats, setStats] = useState({
    totalSlots: 156,
    availableSlots: 24,
    activeClients: 89,
    alertsSent: 347,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats randomly
      setStats((prev) => ({
        ...prev,
        totalSlots: prev.totalSlots + Math.floor(Math.random() * 5),
        availableSlots: Math.floor(Math.random() * 30) + 10,
        alertsSent: prev.alertsSent + Math.floor(Math.random() * 10),
      }));

      // Randomly add notifications
      if (Math.random() < 0.2) {
        setNotificationCount((prev) => prev + 1);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleRefreshAll = () => {
    showAlert("All websites refreshed successfully!", "success");
  };
  const handleSendTestAlert = () => {
    showAlert("Test alert sent to all clients!", "info");
  };

  const handleExportData = () => {
    showAlert("Report exported successfully!", "success");
  };

  const handleShowSettings = () => {
    setCurrentPage("settings");
  };
  return (
    <>
      <Dashboard
        stats={stats}
        onRefreshAll={handleRefreshAll}
        onSendTestAlert={handleSendTestAlert}
        onExportData={handleExportData}
        onShowSettings={handleShowSettings}
      />
    </>
  );
};

export default page;
