"use client";

import { useState } from "react";

export default function Appointments() {
  const [filters, setFilters] = useState({
    clientSearch: "",
    embassy: "",
    status: "",
  });

  const appointments = [
    {
      clientName: "Ahmad Hassan",
      embassy: "US Embassy Islamabad",
      dateTime: "2024-12-25 10:00 AM",
      status: "confirmed",
      contact: "+92-300-1234567",
    },
    {
      clientName: "Sarah Khan",
      embassy: "UK Visa Center Lahore",
      dateTime: "2024-12-26 02:30 PM",
      status: "pending",
      contact: "+92-321-9876543",
    },
    {
      clientName: "Ali Ahmed",
      embassy: "Canada Visa Center",
      dateTime: "2024-12-27 11:15 AM",
      status: "cancelled",
      contact: "+92-333-5555666",
    },
    {
      clientName: "Ahmad Hassan",
      embassy: "US Embassy Islamabad",
      dateTime: "2024-12-25 10:00 AM",
      status: "confirmed",
      contact: "+92-300-1234567",
    },
    {
      clientName: "Sarah Khan",
      embassy: "UK Visa Center Lahore",
      dateTime: "2024-12-26 02:30 PM",
      status: "pending",
      contact: "+92-321-9876543",
    },
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    alert(`Searching appointments with filters: ${JSON.stringify(filters)}`);
  };

  const handleAddNew = () => {
    alert("Add new appointment functionality would open here");
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "confirmed":
        return "status-confirmed";
      case "pending":
        return "status-pending";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-pending";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <>✅</>;
      case "pending":
        return <>⏳</>;
      case "cancelled":
        return <>❌</>;
      default:
        return <>ℹ️</>;
    }
  };

  return (
    <div className="appointments-container">
      <div className="appointment-filters">
        <div className="section-header">
          <h2 className="section-title">Filter Appointments</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Search Client</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter client name..."
              value={filters.clientSearch}
              onChange={(e) =>
                handleFilterChange("clientSearch", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label className="form-label">Embassy</label>
            <select
              className="form-select"
              value={filters.embassy}
              onChange={(e) => handleFilterChange("embassy", e.target.value)}
            >
              <option value="">All Embassies</option>
              <option value="us-islamabad">US Embassy Islamabad</option>
              <option value="us-karachi">US Embassy Karachi</option>
              <option value="uk-lahore">UK Visa Center Lahore</option>
              <option value="canada-islamabad">Canada Visa Center</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
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
          <h2 className="section-title">Appointments List</h2>
          <button className="btn-primary" onClick={handleAddNew}>
            ➕ Add New
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Embassy</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.clientName}</td>
                <td>{appointment.embassy}</td>
                <td>{appointment.dateTime}</td>
                <td>
                  <span
                    className={`appointment-status ${getStatusClass(
                      appointment.status
                    )}`}
                  >
                    {getStatusIcon(appointment.status)} 
                    {appointment.status.charAt(0).toUpperCase() +
                      appointment.status.slice(1)}
                  </span>
                </td>
                <td>{appointment.contact}</td>
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
  );
}
