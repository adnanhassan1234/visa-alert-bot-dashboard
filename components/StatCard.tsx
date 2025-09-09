interface StatCardProps {
  icon: string
  iconType: "primary" | "success" | "warning" | "info"
  value: string | number
  label: string
  trend: string
}

export default function StatCard({ icon, iconType, value, label, trend }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className={`stat-icon icon-${iconType}`}>{icon}</div>
        <div className="stat-content">
          <h3>{value}</h3>
          <p>{label}</p>
          <div className="stat-trend">{trend}</div>
        </div>
      </div>
    </div>
  )
}
