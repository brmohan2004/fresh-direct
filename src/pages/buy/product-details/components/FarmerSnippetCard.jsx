import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle2, MapPin, Award, ChevronRight } from 'lucide-react';
import farmerImg from '../../../../assets/farmer.png';
import './FarmerSnippetCard.css';

export default function FarmerSnippetCard() {
  return (
    <div className="farmer-snippet-card">
      <div className="farmer-card-header">
        <h3 className="section-subtitle">Meet Your Farmer</h3>
        <span className="direct-badge">100% Direct Sourced</span>
      </div>

      <div className="farmer-profile-row">
        <div className="farmer-avatar-box">
          <img src={farmerImg} alt="Ramesh Kumar" />
        </div>

        <div className="farmer-details-col">
          <div className="farmer-name-row">
            <h4>Ramesh Kumar</h4>
            <CheckCircle2 size={16} fill="#16a34a" color="#ffffff" />
          </div>
          <span className="farm-title-sub">Sunrise Organic Farms</span>
          <div className="farmer-meta-row">
            <span className="meta-pill"><MapPin size={12} /> Mandya, KA</span>
            <span className="meta-pill"><Award size={12} /> 12+ Yrs Organic</span>
          </div>
        </div>

        <NavLink to="/buy/farmer-profile" className="visit-farmer-btn">
          <span>Profile</span>
          <ChevronRight size={16} />
        </NavLink>
      </div>
    </div>
  );
}
