"use client"

import { useState } from "react"

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@visaalert.com",
    phone: "+92-300-1234567",
    role: "Administrator",
    joinDate: "January 15, 2024",
    lastLogin: "February 14, 2024 at 10:30 AM",
  })

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">JD</div>
        <h2 className="profile-name">{profileData.name}</h2>
        <p className="profile-email">{profileData.email}</p>
        <div className="profile-stats">
          <div className="profile-stat">
            <div className="profile-stat-value">156</div>
            <div className="profile-stat-label">Alerts Sent</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">89</div>
            <div className="profile-stat-label">Active Clients</div>
          </div>
        </div>
      </div>

      <div className="website-section">
        <div className="section-header">
          <h2 className="section-title">Profile Information</h2>
          <button className="btn-primary">Edit Profile</button>
        </div>
        <div className="settings-group">
          <div className="settings-item">
            <div className="setting-info">
              <h4>Full Name</h4>
              <p>{profileData.name}</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Email Address</h4>
              <p>{profileData.email}</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Phone Number</h4>
              <p>{profileData.phone}</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Role</h4>
              <p>{profileData.role}</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Join Date</h4>
              <p>{profileData.joinDate}</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Last Login</h4>
              <p>{profileData.lastLogin}</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h3 className="section-title">Security Settings</h3>
          <div className="filter-row">
            <button className="btn-primary">Change Password</button>
            <button className="btn-primary">Enable 2FA</button>
            <button className="btn-primary">Download Data</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
