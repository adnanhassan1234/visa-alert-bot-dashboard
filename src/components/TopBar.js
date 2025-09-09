"use client"

const TopBar = ({ pageTitle, onMenuToggle, systemStatus, notificationCount, onNotificationClick }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <button className="menu-toggle" onClick={onMenuToggle}>
          ☰
        </button>
        <h1 className="page-title">{pageTitle}</h1>
      </div>

      <div className="top-bar-right">
        <div className="status-badge">{systemStatus}</div>
        <div className="notification-icon" onClick={onNotificationClick}>
          🔔{notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
        </div>
      </div>
    </div>
  )
}

export default TopBar
