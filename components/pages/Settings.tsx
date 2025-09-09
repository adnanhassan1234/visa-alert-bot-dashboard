"use client"

import { useState } from "react"

export default function Settings() {
  const [settings, setSettings] = useState({
    whatsappNotifications: true,
    emailNotifications: true,
    autoRefresh: true,
    soundAlerts: false,
  })

  const [config, setConfig] = useState({
    checkInterval: "5",
    requestTimeout: "30",
    retryAttempts: "3",
    whatsappToken: "********************************",
    phoneNumberId: "1234567890123456",
    webhookUrl: "https://api.visaalert.com/webhook",
  })

  const handleToggleSetting = (setting: string) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev],
    }))
    alert(`Setting ${settings[setting as keyof typeof settings] ? "disabled" : "enabled"}`)
  }

  const handleConfigChange = (field: string, value: string) => {
    setConfig((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveSettings = () => {
    alert("Settings saved successfully!")
  }

  const handleTestWhatsApp = () => {
    alert("Testing WhatsApp connection...")
    setTimeout(() => {
      alert("WhatsApp connection test successful!")
    }, 2000)
  }

  return (
    <div className="settings-container">
      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">System Settings</h2>
        </div>
        <div className="settings-group">
          <div className="settings-item">
            <div className="setting-info">
              <h4>Enable WhatsApp Notifications</h4>
              <p>Send alerts via WhatsApp to clients</p>
            </div>
            <div
              className={`toggle-switch ${settings.whatsappNotifications ? "active" : ""}`}
              onClick={() => handleToggleSetting("whatsappNotifications")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Email Notifications</h4>
              <p>Send backup email notifications</p>
            </div>
            <div
              className={`toggle-switch ${settings.emailNotifications ? "active" : ""}`}
              onClick={() => handleToggleSetting("emailNotifications")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Auto Refresh</h4>
              <p>Automatically refresh website status</p>
            </div>
            <div
              className={`toggle-switch ${settings.autoRefresh ? "active" : ""}`}
              onClick={() => handleToggleSetting("autoRefresh")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Sound Alerts</h4>
              <p>Play sound when new slots are found</p>
            </div>
            <div
              className={`toggle-switch ${settings.soundAlerts ? "active" : ""}`}
              onClick={() => handleToggleSetting("soundAlerts")}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">Monitoring Settings</h2>
        </div>
        <div className="settings-group">
          <div className="form-group">
            <label className="form-label">Check Interval (minutes)</label>
            <select
              className="form-select"
              value={config.checkInterval}
              onChange={(e) => handleConfigChange("checkInterval", e.target.value)}
            >
              <option value="1">Every 1 minute</option>
              <option value="2">Every 2 minutes</option>
              <option value="5">Every 5 minutes</option>
              <option value="10">Every 10 minutes</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Request Timeout (seconds)</label>
            <input
              type="number"
              className="form-input"
              value={config.requestTimeout}
              min="10"
              max="120"
              onChange={(e) => handleConfigChange("requestTimeout", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Retry Attempts</label>
            <input
              type="number"
              className="form-input"
              value={config.retryAttempts}
              min="1"
              max="10"
              onChange={(e) => handleConfigChange("retryAttempts", e.target.value)}
            />
          </div>
        </div>
        <button className="btn-primary" onClick={handleSaveSettings}>
          💾 Save Settings
        </button>
      </div>

      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">WhatsApp Configuration</h2>
        </div>
        <div className="settings-group">
          <div className="form-group">
            <label className="form-label">WhatsApp API Token</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your WhatsApp API token"
              value={config.whatsappToken}
              onChange={(e) => handleConfigChange("whatsappToken", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number ID</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter phone number ID"
              value={config.phoneNumberId}
              onChange={(e) => handleConfigChange("phoneNumberId", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Webhook URL</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://your-webhook-url.com"
              value={config.webhookUrl}
              onChange={(e) => handleConfigChange("webhookUrl", e.target.value)}
            />
          </div>
        </div>
        <button className="btn-primary" onClick={handleTestWhatsApp}>
          📱 Test WhatsApp Connection
        </button>
      </div>
    </div>
  )
}
