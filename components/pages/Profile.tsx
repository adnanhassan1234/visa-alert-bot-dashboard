"use client"

export default function Profile() {
  const handleEditProfile = () => {
    alert("Profile editing functionality would open here")
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">AH</div>
        <h2 className="profile-name">Ahmad Hassan</h2>
        <p className="profile-email">admin@visaalert.com</p>
        <div className="profile-stats">
          <div className="profile-stat">
            <div className="profile-stat-value">156</div>
            <div className="profile-stat-label">Clients</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">1,245</div>
            <div className="profile-stat-label">Alerts Sent</div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">Profile Information</h2>
          <button className="btn-primary" onClick={handleEditProfile}>
            ✏️ Edit Profile
          </button>
        </div>

        <div className="settings-group">
          <div className="settings-item">
            <div className="setting-info">
              <h4>Full Name</h4>
              <p>Ahmad Hassan</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Email Address</h4>
              <p>admin@visaalert.com</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Phone Number</h4>
              <p>+92-300-1234567</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Role</h4>
              <p>System Administrator</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="setting-info">
              <h4>Member Since</h4>
              <p>January 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
