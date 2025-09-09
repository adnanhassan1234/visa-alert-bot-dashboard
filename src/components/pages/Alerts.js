"use client"

import { useState } from "react"

const Alerts = () => {
  const [alertHistory] = useState([
    {
      id: "ALT001",
      type: "Slot Available",
      embassy: "US Embassy Islamabad",
      message: "New appointment slots available for Tourist Visa",
      sentTo: 45,
      timestamp: "2024-02-14 10:30 AM",
      status: "sent",
    },
    {
      id: "ALT002",
      type: "System Alert",
      embassy: "UK Visa Center Lahore",
      message: "Website response time exceeded threshold",
      sentTo: 0,
      timestamp: "2024-02-14 09:15 AM",
      status: "failed",
    },
    {
      id: "ALT003",
      type: "Slot Available",
      embassy: "Canada Visa Center Karachi",
      message: "Emergency slots opened for Work Visa",
      sentTo: 23,
      timestamp: "2024-02-13 04:45 PM",
      status: "sent",
    },
  ])

  return (
    <div className="appointments-container">
      <div className="appointment-filters">
        <div className="section-header">
          <h2 className="section-title">Alert Configuration</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Alert Type</label>
            <select className="form-select">
              <option>Slot Available</option>
              <option>System Alert</option>
              <option>Maintenance</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Embassy</label>
            <select className="form-select">
              <option>US Embassy Islamabad</option>
              <option>UK Visa Center Lahore</option>
              <option>Canada Visa Center Karachi</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <input type="text" className="form-input" placeholder="Enter alert message..." />
          </div>
          <div className="form-group">
            <button className="btn-primary">Send Alert</button>
          </div>
        </div>
      </div>

      <div className="appointments-table">
        <div className="section-header">
          <h2 className="section-title">Alert History</h2>
          <button className="btn-primary">📊 Export History</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Alert ID</th>
              <th>Type</th>
              <th>Embassy</th>
              <th>Message</th>
              <th>Recipients</th>
              <th>Timestamp</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alertHistory.map((alert) => (
              <tr key={alert.id}>
                <td>{alert.id}</td>
                <td>{alert.type}</td>
                <td>{alert.embassy}</td>
                <td>{alert.message}</td>
                <td>{alert.sentTo} clients</td>
                <td>{alert.timestamp}</td>
                <td>
                  <span className={`appointment-status status-${alert.status === "sent" ? "confirmed" : "cancelled"}`}>
                    {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                  </span>
                </td>
                <td>
                  <button className="action-btn btn-view">View</button>
                  <button className="action-btn btn-edit">Resend</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Alerts
