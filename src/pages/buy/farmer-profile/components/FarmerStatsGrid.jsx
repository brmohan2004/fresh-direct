import React from 'react';
import { Leaf, Sprout, ShieldCheck, Users } from 'lucide-react';
import './FarmerStatsGrid.css';

export default function FarmerStatsGrid() {
  return (
    <div className="farmer-stats-grid">
      <div className="stat-card">
        <div className="stat-icon-box green">
          <Leaf size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-number">8+</span>
          <span className="stat-label">Years Farming</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-box emerald">
          <Sprout size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-number">25+</span>
          <span className="stat-label">Crops Grown</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-box teal">
          <ShieldCheck size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-number">100%</span>
          <span className="stat-label">Organic</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-box blue">
          <Users size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-number">850+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
      </div>
    </div>
  );
}
