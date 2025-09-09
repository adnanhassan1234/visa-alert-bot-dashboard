"use client"

import { useState } from "react"

const Appointments = () => {
  const [appointments] = useState([
    {
      id: "APT001",
      client: "Ahmed Khan",
      embassy: "US Embassy Islamabad",
      date: "2024-02-15",
      time: "10:00 AM",
      status: "confirmed",
      type: "Tourist Visa",
    },
    {
      id: "APT002",
      client: "Sarah Ali",
      embassy: "UK Visa Center Lahore",
      date: "2024-02-16",
      time: "2:30 PM",
      status: "pending",
      type: "Student Visa",
    },
    {
      id: "APT003",
      client: "Muhammad Hassan",
      embassy: "Canada Visa Center Karachi",
      date: "2024-02-17",
      time: "11:15 AM",
      status: "cancelled",
      type: "Work Visa",
    },
  ])

  return (
    <div className="appointments-container">
      <div className="appointment-filters">
        <div className="section-header">
          <h2 className="section-title">Filter Appointments</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Embassy</label>
            <select className="form-select">
              <option>All Embassies</option>
              <option>US Embassy Islamabad</option>
              <option>UK Visa Center Lahore</option>
              <option>Canada Visa Center Karachi</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date Range</label>
            <input type="date" className="form-input" />
          </div>
          <div className="form-group">
            <button className="btn-primary">Apply Filters</button>
          </div>
        </div>
      </div>

      <div className="appointments-table">
        <div className="section-header">
          <h2 className="section-title">Appointment List</h2>
          <button className="btn-primary">+ New Appointment</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Embassy</th>
              <th>Date & Time</th>
              <th>Visa Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.client}</td>
                <td>{appointment.embassy}</td>
                <td>
                  {appointment.date} at {appointment.time}
                </td>
                <td>{appointment.type}</td>
                <td>
                  <span className={`appointment-status status-${appointment.status}`}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>
                </td>
                <td>
                  <button className="action-btn btn-view">View</button>
                  <button className="action-btn btn-edit">Edit</button>
                  <button className="action-btn btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Appointments
