import React from 'react';
import { MapPin, Award, Sprout, Calendar, ShieldCheck, Check, Leaf, Truck } from 'lucide-react';
import './FarmInfoSidebar.css';

export default function FarmInfoSidebar() {
  return (
    <div className="farmer-sidebar-column">
      {/* Farm Information Card */}
      <div className="profile-sidebar-card">
        <h3 className="sidebar-card-title">Farm Information</h3>
        <div className="info-list">
          <div className="info-item">
            <MapPin size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Location</span>
              <span className="info-value">Green Valley Farm, Coimbatore</span>
            </div>
          </div>

          <div className="info-item">
            <Award size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Farm Size</span>
              <span className="info-value">12 Acres</span>
            </div>
          </div>

          <div className="info-item">
            <Sprout size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Farming Type</span>
              <span className="info-value">100% Organic</span>
            </div>
          </div>

          <div className="info-item">
            <Calendar size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Experience</span>
              <span className="info-value">8+ Years</span>
            </div>
          </div>

          <div className="info-item">
            <ShieldCheck size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Certification</span>
              <span className="info-value">NPOP Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Buy From Ramesh Kumar */}
      <div className="profile-sidebar-card highlights-card">
        <h3 className="sidebar-card-title">Why Buy From Ramesh Kumar?</h3>
        <ul className="benefits-list">
          <li>
            <Check size={15} className="check-bullet" />
            <span>100% Organic & Pesticide-Free</span>
          </li>
          <li>
            <Check size={15} className="check-bullet" />
            <span>Harvested fresh after ordering</span>
          </li>
          <li>
            <Check size={15} className="check-bullet" />
            <span>Direct farm-to-table delivery</span>
          </li>
          <li>
            <Check size={15} className="check-bullet" />
            <span>Sustainable & traditional methods</span>
          </li>
        </ul>
      </div>

      {/* Trust Badges / Bottom Highlights */}
      <div className="profile-sidebar-card trust-badges-card">
        <div className="trust-badge-item">
          <div className="badge-icon-circle green">
            <Leaf size={18} />
          </div>
          <span className="badge-text">100% Organic</span>
        </div>

        <div className="trust-badge-item">
          <div className="badge-icon-circle emerald">
            <ShieldCheck size={18} />
          </div>
          <span className="badge-text">Pesticide Free</span>
        </div>

        <div className="trust-badge-item">
          <div className="badge-icon-circle blue">
            <Truck size={18} />
          </div>
          <span className="badge-text">Fast Delivery</span>
        </div>
      </div>
    </div>
  );
}
