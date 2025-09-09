const Reports = () => {
  const reportData = [
    { metric: "Total Alerts Sent", value: "1,247", change: "+15%", period: "This Month" },
    { metric: "Active Clients", value: "89", change: "+8%", period: "This Month" },
    { metric: "Successful Appointments", value: "156", change: "+23%", period: "This Month" },
    { metric: "System Uptime", value: "99.8%", change: "+0.2%", period: "This Month" },
  ]

  return (
    <div className="appointments-container">
      <div className="stats-grid">
        {reportData.map((report, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <div className="stat-icon icon-primary">📊</div>
              <div className="stat-content">
                <h3>{report.value}</h3>
                <p>{report.metric}</p>
                <div className="stat-trend">
                  {report.change} {report.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="appointments-table">
        <div className="section-header">
          <h2 className="section-title">Generate Reports</h2>
        </div>
        <div className="filter-row">
          <div className="form-group">
            <label className="form-label">Report Type</label>
            <select className="form-select">
              <option>Client Activity Report</option>
              <option>Alert Performance Report</option>
              <option>System Usage Report</option>
              <option>Embassy Statistics Report</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date Range</label>
            <select className="form-select">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Format</label>
            <select className="form-select">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn-primary">Generate Report</button>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h3 className="section-title">Recent Reports</h3>
          <div className="alert-item alert-info">
            📊 Client Activity Report - Generated on Feb 14, 2024 at 2:30 PM
            <button className="action-btn btn-view" style={{ float: "right" }}>
              Download
            </button>
          </div>
          <div className="alert-item alert-success">
            📈 Alert Performance Report - Generated on Feb 13, 2024 at 5:15 PM
            <button className="action-btn btn-view" style={{ float: "right" }}>
              Download
            </button>
          </div>
          <div className="alert-item alert-warning">
            🔧 System Usage Report - Generated on Feb 12, 2024 at 11:00 AM
            <button className="action-btn btn-view" style={{ float: "right" }}>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
