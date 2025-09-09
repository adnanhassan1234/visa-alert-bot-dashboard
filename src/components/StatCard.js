const StatCard = ({ icon, title, value, trend, iconClass }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className={`stat-icon ${iconClass}`}>{icon}</div>
        <div className="stat-content">
          <h3>{value}</h3>
          <p>{title}</p>
          {trend && <div className="stat-trend">{trend}</div>}
        </div>
      </div>
    </div>
  )
}

export default StatCard
