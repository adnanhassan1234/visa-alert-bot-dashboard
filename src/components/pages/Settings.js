"use client"

import { useState } from "react"

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    autoRefresh: true,
    darkMode: false,
    soundAlerts: true,
  })

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="settings-container">
      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">Notification Settings</h2>
        </div>
        <div className="settings-group">
          <div className="settings-item">
            <div className="setting-info">
              <h4>Email Notifications</h4>
              <p>Receive alerts and updates via email</p>
            </div>
            <div
              className={`toggle-switch ${settings.emailNotifications ? "active" : ""}`}
              onClick={() => toggleSetting("emailNotifications")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>SMS Notifications</h4>
              <p>Receive urgent alerts via SMS</p>
            </div>
            <div
              className={`toggle-switch ${settings.smsNotifications ? "active" : ""}`}
              onClick={() => toggleSetting("smsNotifications")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Push Notifications</h4>
              <p>Receive browser push notifications</p>
            </div>
            <div
              className={`toggle-switch ${settings.pushNotifications ? "active" : ""}`}
              onClick={() => toggleSetting("pushNotifications")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">System Settings</h2>
        </div>
        <div className="settings-group">
          <div className="settings-item">
            <div className="setting-info">
              <h4>Auto Refresh</h4>
              <p>Automatically refresh website status every 30 seconds</p>
            </div>
            <div
              className={`toggle-switch ${settings.autoRefresh ? "active" : ""}`}
              onClick={() => toggleSetting("autoRefresh")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Dark Mode</h4>
              <p>Use dark theme for better viewing in low light</p>
            </div>
            <div
              className={`toggle-switch ${settings.darkMode ? "active" : ""}`}
              onClick={() => toggleSetting("darkMode")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Sound Alerts</h4>
              <p>Play sound when new slots are detected</p>
            </div>
            <div
              className={`toggle-switch ${settings.soundAlerts ? "active" : ""}`}
              onClick={() => toggleSetting("soundAlerts")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">Advanced Settings</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Check Interval (seconds)</label>
            <input type="number" className="form-input" defaultValue="30" min="10" max="300" />
          </div>
          <div className="form-group">
            <label className="form-label">Max Retry Attempts</label>
            <input type="number" className="form-input" defaultValue="3" min="1" max="10" />
          </div>
          <div className="form-group">
            <label className="form-label">Timeout (seconds)</label>
            <input type="number" className="form-input" defaultValue="10" min="5" max="60" />
          </div>
          <div className="form-group">
            <button className="btn-primary">Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
