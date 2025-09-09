"use client";

const Sidebar = ({ currentPage, onPageChange, isVisible, onLogout }) => {
  const menuItems = [
    { id: "dashboard", icon: "📊", label: "Dashboard" },
    { id: "monitor", icon: "🖥️", label: "Website Monitor" },
    { id: "appointments", icon: "📅", label: "Appointments" },
    { id: "website", icon: "📅", label: "Website" },
    { id: "clients", icon: "👥", label: "Client Management" },
    { id: "alerts", icon: "🔔", label: "Alert Management" },
    { id: "reports", icon: "📈", label: "Reports & Analytics" },
    { id: "profile", icon: "👤", label: "User Profile" },
    { id: "settings", icon: "⚙️", label: "System Settings" },
  ];

  return (
    <div className={`sidebar ${!isVisible ? "hidden" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">🤖</div>
          <h2>Visa Alert Bot</h2>
        </div>
        <div className="user-info">
          <div className="user-avatar">JD</div>
          <div className="user-details">
            <h4>John Doe</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>

      <nav className="nav-menu">
        <div className="nav-section">Main Menu</div>
        {menuItems.slice(0, 6).map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? "active" : ""}`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <div className="nav-section">Account</div>
        {menuItems.slice(6).map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? "active" : ""}`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <button className="nav-item" onClick={onLogout}>
          <span className="nav-icon">🚪</span>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
