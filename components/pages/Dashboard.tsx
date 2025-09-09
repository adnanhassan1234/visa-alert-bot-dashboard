"use client"

import StatCard from "../StatCard"

interface DashboardProps {
  stats: {
    totalSlots: number
    availableSlots: number
    activeClients: number
    alertsSent: number
  }
  onRefreshAll: () => void
  onSendTestAlert: () => void
  onExportData: () => void
  onShowSettings: () => void
}

export default function Dashboard({
  stats,
  onRefreshAll,
  onSendTestAlert,
  onExportData,
  onShowSettings,
}: DashboardProps) {
  const activities = [
    {
      icon: "✅",
      iconClass: "icon-success",
      title: "New slot found at US Embassy Islamabad",
      time: "2 minutes ago",
    },
    {
      icon: "📧",
      iconClass: "icon-info",
      title: "WhatsApp alert sent to 15 clients",
      time: "5 minutes ago",
    },
    {
      icon: "⚠️",
      iconClass: "icon-warning",
      title: "Website check failed for UK Visa Center",
      time: "8 minutes ago",
    },
    {
      icon: "👤",
      iconClass: "icon-primary",
      title: "New client registered: John Smith",
      time: "15 minutes ago",
    },
  ]

  return (
    <div>
      <div className="stats-grid">
        <StatCard
          icon="🎯"
          iconType="primary"
          value={stats.totalSlots}
          label="Total Slots Found"
          trend="+12% from last week"
        />
        <StatCard
          icon="✅"
          iconType="success"
          value={stats.availableSlots}
          label="Available Slots"
          trend="+5% from yesterday"
        />
        <StatCard
          icon="👥"
          iconType="info"
          value={stats.activeClients}
          label="Active Clients"
          trend="+8% from last month"
        />
        <StatCard
          icon="⚡"
          iconType="warning"
          value={stats.alertsSent}
          label="Alerts Sent Today"
          trend="+23% from yesterday"
        />
      </div>

      <div className="monitor-grid">
        <div className="website-section">
          <div className="section-header">
            <h2 className="section-title">Recent Activity</h2>
          </div>
          <div className="activity-list">
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${activity.iconClass}`}>{activity.icon}</div>
                <div className="activity-info">
                  <div className="activity-title">{activity.title}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="website-section">
          <div className="section-header">
            <h2 className="section-title">Quick Actions</h2>
          </div>
          <div style={{ display: "grid", gap: "15px" }}>
            <button className="btn-primary" onClick={onRefreshAll}>
              🔄 Refresh All Sites
            </button>
            <button className="btn-primary" onClick={onSendTestAlert}>
              📧 Send Test Alert
            </button>
            <button className="btn-primary" onClick={onExportData}>
              📊 Export Report
            </button>
            <button className="btn-primary" onClick={onShowSettings}>
              ⚙️ System Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
