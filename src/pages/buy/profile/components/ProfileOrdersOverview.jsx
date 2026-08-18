import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, CheckCircle2, RotateCcw, ArrowRight, ChevronRight } from 'lucide-react';

const orderStats = [
  { id: 'total', label: 'Total Orders', value: 12, icon: Package },
  { id: 'in_progress', label: 'In Progress', value: 3, icon: Truck },
  { id: 'delivered', label: 'Delivered', value: 8, icon: CheckCircle2 },
  { id: 'cancelled', label: 'Cancelled', value: 1, icon: RotateCcw }
];

export default function ProfileOrdersOverview() {
  const navigate = useNavigate();

  return (
    <div className="profile-orders-overview-card">
      <div className="orders-overview-header">
        <h3 className="orders-overview-title">
          <span className="desktop-only-inline">My Orders Overview</span>
          <span className="mobile-only-inline">My Orders</span>
        </h3>

        <button
          className="view-all-orders-btn"
          onClick={() => navigate('/buy/orders')}
        >
          <span>View All Orders</span>
          <ArrowRight size={15} className="desktop-only-inline" />
          <ChevronRight size={16} className="mobile-only-inline" />
        </button>
      </div>

      <div className="orders-stats-grid">
        {orderStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="order-stat-box"
              onClick={() => navigate('/buy/orders')}
            >
              <div className="stat-icon-wrapper">
                <Icon size={22} className="stat-icon" />
              </div>
              <div className="stat-text-details">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-name">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
