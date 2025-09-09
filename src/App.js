"use client"

import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import TopBar from "./components/TopBar"
import Dashboard from "./components/pages/Dashboard"
import Monitor from "./components/pages/Monitor"
import Appointments from "./components/pages/Appointments"
import Clients from "./components/pages/Clients"
import Alerts from "./components/pages/Alerts"
import Reports from "./components/pages/Reports"
import Profile from "./components/pages/Profile"
import Settings from "./components/pages/Settings"
import "./styles/dashboard.css"

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [systemStatus, setSystemStatus] = useState("System Online")
  const [notificationCount, setNotificationCount] = useState(3)

  // Dashboard stats state
  const [stats, setStats] = useState({
    totalSlots: 156,
    availableSlots: 24,
    activeClients: 89,
    alertsSent: 347,
  })

  // Monitor data state
  const [websites] = useState([
    {
      name: "US Embassy Islamabad",
      status: "available",
      lastCheck: "2 min ago",
      responseTime: "1.2s",
      availableSlots: 8,
      nextCheck: "3 min",
    },
    {
      name: "US Embassy Karachi",
      status: "unavailable",
      lastCheck: "1 min ago",
      responseTime: "2.1s",
      availableSlots: 0,
      nextCheck: "4 min",
    },
    {
      name: "UK Visa Center Lahore",
      status: "checking",
      lastCheck: "5 min ago",
      responseTime: "--",
      availableSlots: "--",
      nextCheck: "Now",
    },
  ])

  const [alerts] = useState([
    {
      type: "success",
      message: "New slots found at US Embassy Islamabad!",
      time: "2 minutes ago",
    },
    {
      type: "info",
      message: "System check completed successfully",
      time: "5 minutes ago",
    },
    {
      type: "warning",
      message: "High response time detected for UK Center",
      time: "8 minutes ago",
    },
    {
      type: "error",
      message: "Connection timeout for Canada Visa Center",
      time: "12 minutes ago",
    },
  ])

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats randomly
      setStats((prev) => ({
        ...prev,
        totalSlots: prev.totalSlots + Math.floor(Math.random() * 5),
        availableSlots: Math.floor(Math.random() * 30) + 10,
        alertsSent: prev.alertsSent + Math.floor(Math.random() * 10),
      }))

      // Randomly add notifications
      if (Math.random() < 0.2) {
        setNotificationCount((prev) => prev + 1)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.altKey) {
        switch (e.key) {
          case "1":
            setCurrentPage("dashboard")
            break
          case "2":
            setCurrentPage("monitor")
            break
          case "3":
            setCurrentPage("appointments")
            break
          case "6":
            setCurrentPage("website")
            break
          case "4":
            setCurrentPage("clients")
            break
          case "5":
            setCurrentPage("alerts")
            break
          default:
            break
        }
      }
      if (e.key === "Escape") {
        setSidebarVisible(!sidebarVisible)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [sidebarVisible])

  const getPageTitle = (pageId) => {
    const titles = {
      dashboard: "Dashboard",
      monitor: "Website Monitor",
      appointments: "Appointments",
      website: "Website",
      clients: "Client Management",
      alerts: "Alert Management",
      reports: "Reports & Analytics",
      profile: "User Profile",
      settings: "System Settings",
    }
    return titles[pageId] || "Dashboard"
  }

  const showAlert = (message, type = "info") => {
    // Create temporary alert notification
    const alertDiv = document.createElement("div")
    alertDiv.className = `alert-item alert-${type}`
    alertDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      min-width: 300px;
      animation: slideIn 0.3s ease-out;
    `
    alertDiv.innerHTML = `
      ${message}
      <div class="alert-time">Just now</div>
    `

    document.body.appendChild(alertDiv)

    setTimeout(() => {
      alertDiv.style.animation = "fadeOut 0.3s ease-out"
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.parentNode.removeChild(alertDiv)
        }
      }, 300)
    }, 3000)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    if (window.innerWidth <= 1024) {
      setSidebarVisible(false)
    }
  }

  const handleMenuToggle = () => {
    setSidebarVisible(!sidebarVisible)
  }

  const handleNotificationClick = () => {
    showAlert(`You have ${notificationCount} unread notifications`, "info")
    setNotificationCount(0)
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      showAlert("Logging out...", "info")
      setTimeout(() => {
        alert("You have been logged out successfully!")
      }, 1000)
    }
  }

  // Action handlers
  const handleRefreshAll = () => {
    showAlert("All websites refreshed successfully!", "success")
  }

  const handleSendTestAlert = () => {
    showAlert("Test alert sent to all clients!", "info")
  }

  const handleExportData = () => {
    showAlert("Report exported successfully!", "success")
  }

  const handleShowSettings = () => {
    setCurrentPage("settings")
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <Dashboard
            stats={stats}
            onRefreshAll={handleRefreshAll}
            onSendTestAlert={handleSendTestAlert}
            onExportData={handleExportData}
            onShowSettings={handleShowSettings}
          />
        )
      case "monitor":
        return <Monitor websites={websites} alerts={alerts} onRefreshAll={handleRefreshAll} />
      case "appointments":
        return <Appointments />
      case "website":
        return <Appointments />
      case "clients":
        return <Clients />
      case "alerts":
        return <Alerts />
      case "reports":
        return <Reports />
      case "profile":
        return <Profile />
      case "settings":
        return <Settings />
      default:
        return (
          <div className="website-section">
            <div className="section-header">
              <h2 className="section-title">{getPageTitle(currentPage)}</h2>
            </div>
            <div className="alert-item alert-info">
              This page is under development. All functionality from the original HTML has been preserved and will be
              implemented in future updates.
            </div>
          </div>
        )
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isVisible={sidebarVisible}
        onLogout={handleLogout}
      />

      <div className={`main-content ${!sidebarVisible ? "expanded" : ""}`}>
        <TopBar
          pageTitle={getPageTitle(currentPage)}
          onMenuToggle={handleMenuToggle}
          systemStatus={systemStatus}
          notificationCount={notificationCount}
          onNotificationClick={handleNotificationClick}
        />

        <div className="content-area">
          <div className="page active">{renderPage()}</div>
        </div>
      </div>
    </div>
  )
}

export default App
