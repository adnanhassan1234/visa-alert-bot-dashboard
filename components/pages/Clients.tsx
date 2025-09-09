"use client"

import { useState } from "react"

export default function Clients() {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    country: "",
  })

  const clients = [
    {
      name: "Ahmad Hassan",
      email: "ahmad@email.com",
      phone: "+92-300-1234567",
      country: "USA",
      status: "active",
      joined: "2024-11-15",
    },
    {
      name: "Sarah Khan",
      email: "sarah@email.com",
      phone: "+92-321-9876543",
      country: "UK",
      status: "pending",
      joined: "2024-11-20",
    },
    {
      name: "Ali Ahmed",
      email: "ali@email.com",
      phone: "+92-333-5555666",
      country: "Canada",
      status: "inactive",
      joined: "2024-10-05",
    },
  ]

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const handleSearch = () => {
    alert(`Searching clients with filters: ${JSON.stringify(filters)}`)
  }

  const handleAddClient = () => {
    alert("Add new client functionality would open here")
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "active":
        return "status-confirmed"
      case "pending":
        return "status-pending"
      case "inactive":
        return "status-cancelled"
      default:
        return "status-pending"
    }
  }

  return (
    <div className="appointments-container">
      <div className="appointment-filters">
        <div className="section-header">
          <h2 className="section-title">Client Management</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Search Clients</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter name or phone..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              value={filters.country}
              onChange={(e) => handleFilterChange("country", e.target.value)}
            >
              <option value="">All Countries</option>
              <option value="usa">USA</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">&nbsp;</label>
            <button className="btn-primary" onClick={handleSearch}>
              🔍 Search
            </button>
          </div>
        </div>
      </div>

      <div className="appointments-table">
        <div className="section-header">
          <h2 className="section-title">Clients List</h2>
          <button className="btn-primary" onClick={handleAddClient}>
            ➕ Add Client
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.country}</td>
                <td>
                  <span className={`appointment-status ${getStatusClass(client.status)}`}>
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </span>
                </td>
                <td>{client.joined}</td>
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
