"use client"

import StatCard from "../StatCard"

export default function Reports() {
  const handleGenerateReport = (type: string) => {
    alert(`Generating ${type} report...`)
    setTimeout(() => {
      alert(`${type.charAt(0).toUpperCase() + type.slice(1)} report generated successfully!`)
    }, 2000)
  }

  return (
    <div>
      <div className="stats-grid">
        <StatCard icon="📊" iconType="primary" value="1,245" label="Total Alerts Sent" trend="+15% this month" />
        <StatCard icon="✅" iconType="success" value="89%" label="Success Rate" trend="+3% from last month" />
        <StatCard icon="⏱️" iconType="info" value="1.8s" label="Avg Response Time" trend="-0.2s improvement" />
        <StatCard icon="📱" iconType="warning" value="156" label="Active WhatsApp Users" trend="+12 new this week" />
      </div>

      <div className="appointments-container">
        <div className="appointments-table">
          <div className="section-header">
            <h2 className="section-title">Generate Reports</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <button
              className="btn-primary"
              style={{ padding: "20px", height: "auto" }}
              onClick={() => handleGenerateReport("daily")}
            >
              📅 Daily Report
              <br />
              <small>Today&apos;s activity summary</small>
            </button>
            <button
              className="btn-primary"
              style={{ padding: "20px", height: "auto" }}
              onClick={() => handleGenerateReport("weekly")}
            >
              📊 Weekly Report
              <br />
              <small>Past 7 days analysis</small>
            </button>
            <button
              className="btn-primary"
              style={{ padding: "20px", height: "auto" }}
              onClick={() => handleGenerateReport("monthly")}
            >
              📈 Monthly Report
              <br />
              <small>Full month statistics</small>
            </button>
            <button
              className="btn-primary"
              style={{ padding: "20px", height: "auto" }}
              onClick={() => handleGenerateReport("clients")}
            >
              👥 Client Report
              <br />
              <small>Client activity & engagement</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
