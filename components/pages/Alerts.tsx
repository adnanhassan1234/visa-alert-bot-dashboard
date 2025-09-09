"use client"

import { useState } from "react"

export default function Alerts() {
  const [filters, setFilters] = useState({
    type: "",
    dateFrom: new Date().toISOString().split("T")[0],
    dateTo: new Date().toISOString().split("T")[0],
  })

  const alerts = [
    {
      type: "success",
      title: "Slot Found Alert",
      message: "New visa slots available at US Embassy Islamabad. 8 slots found for next week.",
      time: "2 minutes ago",
    },
    {
      type: "info",
      title: "Client Registration",
      message: "New client Sarah Khan registered for UK visa monitoring.",
      time: "15 minutes ago",
    },
    {
      type: "warning",
      title: "System Warning",
      message: "High response time detected for UK Visa Center website.",
      time: "28 minutes ago",
    },
    {
      type: "error",
      title: "Connection Error",
      message: "Failed to connect to Canada Visa Center. Retrying in 5 minutes.",
      time: "45 minutes ago",
    },
    {
      type: "success",
      title: "WhatsApp Alert Sent",
      message: "Alert successfully sent to 25 clients about new US Embassy slots.",
      time: "1 hour ago",
    },
    {
      type: "info",
      title: "System Update",
      message: "Monitoring system updated with new security patches.",
      time: "2 hours ago",
    },
  ]

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const handleFilter = () => {
    alert(`Filtering alerts with: ${JSON.stringify(filters)}`)
  }

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all alerts?")) {
      alert("All alerts cleared!")
    }
  }

  return (
    <div className="appointments-container">
      <div className="appointment-filters">
        <div className="section-header">
          <h2 className="section-title">Alert Management</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Alert Type</label>
            <select
              className="form-select"
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
            >
              <option value="">All Types</option>
              <option value="slot_found">Slot Found</option>
              <option value="system_error">System Error</option>
              <option value="client_update">Client Update</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date From</label>
            <input
              type="date"
              className="form-input"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date To</label>
            <input
              type="date"
              className="form-input"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange("dateTo", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">&nbsp;</label>
            <button className="btn-primary" onClick={handleFilter}>
              🔍 Filter
            </button>
          </div>
        </div>
      </div>

      <div className="appointments-table">
        <div className="section-header">
          <h2 className="section-title">Alert History</h2>
          <button className="btn-primary" onClick={handleClearAll}>
            🗑️ Clear All
          </button>
        </div>

        <div style={{ maxHeight: "600px", overflowY: "auto" }}>
          {alerts.map((alert, index) => (
            <div key={index} className={`alert-item alert-${alert.type}`}>
              <strong>{alert.title}</strong>
              <br />
              {alert.message}
              <div className="alert-time">{alert.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
