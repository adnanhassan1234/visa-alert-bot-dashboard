"use client"
import StatCard from "../StatCard"

const Dashboard = ({ stats, onRefreshAll, onSendTestAlert, onExportData, onShowSettings }) => {
  const recentActivity = [
    {
      icon: "✅",
      title: "New appointment slots detected",
      time: "2 minutes ago",
      iconClass: "icon-success",
    },
    {
      icon: "📧",
      title: "Alert sent to 45 clients",
      time: "5 minutes ago",
      iconClass: "icon-info",
    },
    {
      icon: "⚠️",
      title: "Website response time increased",
      time: "8 minutes ago",
      iconClass: "icon-warning",
    },
    {
      icon: "👤",
      title: "New client registered",
      time: "12 minutes ago",
      iconClass: "icon-primary",
    },
  ]

  return (
    <div>
      <div className="stats-grid">
        <StatCard
          icon="📊"
          title="Total Slots Monitored"
          value={stats.totalSlots}
          trend="↗️ +12 this week"
          iconClass="icon-primary"
        />
        <StatCard
          icon="✅"
          title="Available Slots"
          value={stats.availableSlots}
          trend="↗️ +5 today"
          iconClass="icon-success"
        />
        <StatCard
          icon="👥"
          title="Active Clients"
          value={stats.activeClients}
          trend="↗️ +8 this month"
          iconClass="icon-info"
        />
        <StatCard icon="🔔" title="Alerts Sent" value={stats.alertsSent} trend="↗️ +23 today" iconClass="icon-warning" />
      </div>

      <div className="monitor-grid">
        <div className="website-section">
          <div className="section-header">
            <h2 className="section-title">Quick Actions</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
            <button className="btn-primary" onClick={onRefreshAll}>
              🔄 Refresh All Websites
            </button>
            <button className="btn-primary" onClick={onSendTestAlert}>
              📧 Send Test Alert
            </button>
            <button className="btn-primary" onClick={onExportData}>
              📊 Export Reports
            </button>
            <button className="btn-primary" onClick={onShowSettings}>
              ⚙️ System Settings
            </button>
          </div>
        </div>

        <div className="website-section">
          <div className="section-header">
            <h2 className="section-title">Recent Activity</h2>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity, index) => (
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
      </div>
    </div>
  )
}

export default Dashboard
