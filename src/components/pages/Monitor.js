"use client"

const Monitor = ({ websites, alerts, onRefreshAll }) => {
  return (
    <div className="monitor-grid">
      <div className="website-section">
        <div className="section-header">
          <h2 className="section-title">Website Status</h2>
          <button className="refresh-btn" onClick={onRefreshAll}>
            🔄 Refresh All
          </button>
        </div>
        {websites.map((website, index) => (
          <div key={index} className="website-card">
            <div className="website-header">
              <h3 className="website-name">{website.name}</h3>
              <span className={`status-indicator status-${website.status}`}>
                {website.status === "available" && "✅ Available"}
                {website.status === "unavailable" && "❌ Unavailable"}
                {website.status === "checking" && "🔄 Checking"}
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

      <div className="website-section">
        <div className="section-header">
          <h2 className="section-title">Recent Alerts</h2>
        </div>
        {alerts.map((alert, index) => (
          <div key={index} className={`alert-item alert-${alert.type}`}>
            {alert.message}
            <div className="alert-time">{alert.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Monitor
