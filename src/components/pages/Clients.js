"use client"

import { useState } from "react"

const Clients = () => {
  const [clients] = useState([
    {
      id: "CLT001",
      name: "Ahmed Khan",
      email: "ahmed.khan@email.com",
      phone: "+92-300-1234567",
      visaType: "Tourist Visa",
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: "CLT002",
      name: "Sarah Ali",
      email: "sarah.ali@email.com",
      phone: "+92-321-9876543",
      visaType: "Student Visa",
      status: "active",
      joinDate: "2024-01-20",
    },
    {
      id: "CLT003",
      name: "Muhammad Hassan",
      email: "hassan@email.com",
      phone: "+92-333-5555555",
      visaType: "Work Visa",
      status: "inactive",
      joinDate: "2024-01-10",
    },
  ])

  return (
    <div className="appointments-container">
      <div className="appointment-filters">
        <div className="section-header">
          <h2 className="section-title">Client Filters</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Search</label>
            <input type="text" className="form-input" placeholder="Search by name or email..." />
          </div>
          <div className="form-group">
            <label className="form-label">Visa Type</label>
            <select className="form-select">
              <option>All Types</option>
              <option>Tourist Visa</option>
              <option>Student Visa</option>
              <option>Work Visa</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </div>

      <div className="appointments-table">
        <div className="section-header">
          <h2 className="section-title">Client Management</h2>
          <button className="btn-primary">+ Add New Client</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Visa Type</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.visaType}</td>
                <td>
                  <span
                    className={`appointment-status status-${client.status === "active" ? "confirmed" : "cancelled"}`}
                  >
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </span>
                </td>
                <td>{client.joinDate}</td>
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

export default Clients
