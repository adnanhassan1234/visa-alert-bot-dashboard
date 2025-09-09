"use client"

interface Website {
  name: string
  status: "available" | "unavailable" | "checking"
  lastCheck: string
  responseTime: string
  availableSlots: number | string
  nextCheck: string
}

interface Alert {
  type: "success" | "info" | "warning" | "error"
  message: string
  time: string
}

interface MonitorProps {
  websites: Website[]
  alerts: Alert[]
  onRefreshAll: () => void
}

export default function Monitor({ websites, alerts, onRefreshAll }: MonitorProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "available":
        return "status-available"
      case "unavailable":
        return "status-unavailable"
      case "checking":
        return "status-checking checking"
      default:
        return "status-unavailable"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Available"
      case "unavailable":
        return "No Slots"
      case "checking":
        return "Checking..."
      default:
        return "Unknown"
    }
  }

  return (
    <div className="monitor-grid">
      <div className="website-section">
        <div className="section-header">
          <h2 className="section-title">Website Monitoring</h2>
          <button className="refresh-btn" onClick={onRefreshAll}>
            🔄 Refresh All
          </button>
        </div>

        <div>
          {websites.map((website, index) => (
            <div key={index} className="website-card">
              <div className="website-header">
                <h3 className="website-name">{website.name}</h3>
                <span className={`status-indicator ${getStatusClass(website.status)}`}>
                  {getStatusText(website.status)}
                </span>
              </div>
              <div className="website-details">
                <div className="detail-item">
                  <span>Last Check:</span>
                  <span className="detail-value">{website.lastCheck}</span>
                </div>
                <div className="detail-item">
                  <span>Response Time:</span>
                  <span className="detail-value">{website.responseTime}</span>
                </div>
                <div className="detail-item">
                  <span>Available Slots:</span>
                  <span className="detail-value">{website.availableSlots}</span>
                </div>
                <div className="detail-item">
                  <span>Next Check:</span>
                  <span className="detail-value">{website.nextCheck}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="website-section">
        <div className="section-header">
          <h2 className="section-title">Real-time Alerts</h2>
        </div>
        <div>
          {alerts.map((alert, index) => (
            <div key={index} className={`alert-item alert-${alert.type}`}>
              {alert.message}
              <div className="alert-time">{alert.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
