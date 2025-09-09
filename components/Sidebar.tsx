"use client";

import Image from "next/image";
import { MdOutlineDashboard } from "react-icons/md";
import { MdMonitorHeart } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAddAlert } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isVisible: boolean;
  onLogout: () => void;
}

export default function Sidebar({
  currentPage,
  onPageChange,
  isVisible,
  onLogout,
}: SidebarProps) {
  const navItems = [
    {
      id: "dashboard",
      icon: <MdOutlineDashboard />,
      label: "Dashboard",
      section: "main",
    },
    {
      id: "monitor",
      icon: <MdMonitorHeart />,
      label: "Monitor",
      section: "main",
    },
    { id: "website", icon: <CgWebsite />, label: "Website", section: "main" },
    {
      id: "appointments",
      icon: <FaRegCalendarAlt />,
      label: "Appointments",
      section: "main",
    },
    {
      id: "clients",
      icon: <FaUsers />,
      label: "Clients",
      section: "management",
    },
    // {
    //   id: "alerts",
    //   icon: <MdOutlineAddAlert />,
    //   label: "Alerts",
    //   section: "management",
    // },
    {
      id: "reports",
      icon: <TbReportSearch />,
      label: "Reports",
      section: "management",
    },
    {
      id: "profile",
      icon: <FaRegUser />,
      label: "Profile",
      section: "account",
    },
    {
      id: "settings",
      icon: <IoMdSettings />,
      label: "Settings",
      section: "account",
    },
  ];

  const sections = {
    main: "Main",
    management: "Management",
    account: "Account",
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("knm_token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("remember_me");
    onLogout();
    window.location.reload();
  };

  const renderNavSection = (sectionKey: string) => {
    const sectionItems = navItems.filter((item) => item.section === sectionKey);

    return (
      <div key={sectionKey}>
        <div className="nav-section">
          {sections[sectionKey as keyof typeof sections]}
        </div>
        {sectionItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? "active" : ""}`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={`sidebar ${isVisible ? "show" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon__">
            <Image
              src="/logo-removebg-preview.png"
              alt="logo"
              width={65}
              height={65}
            />
          </div>
          {/* <h2>Visa Alert Bot</h2> */}
          <h2>KNM VISA OEP</h2>
        </div>
        <div className="user-info">
          <div className="user-avatar">AH</div>
          <div className="user-details">
            <h4>Ahmad Hassan</h4>
            <p>Admin User</p>
          </div>
        </div>
      </div>

      <nav className="nav-menu">
        {Object.keys(sections).map(renderNavSection)}

        <button className="nav-item" onClick={handleLogoutClick}>
          <span className="nav-icon">
            <CiLogout />
          </span>
          Logout
        </button>
      </nav>
    </div>
  );
}
