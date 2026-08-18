import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, CheckCircle2, X, ArrowRight } from 'lucide-react';
import './FarmerPreviewCard.css';

/**
 * FarmerPreviewCard Component
 * Floating bottom preview card displayed when a farmer pin is selected on the map
 */
export default function FarmerPreviewCard({ farmer, onClose }) {
  const navigate = useNavigate();

  if (!farmer) return null;

  return (
    <div className="farmer-preview-card-floating">
      <button
        className="preview-close-btn"
        onClick={onClose}
        title="Dismiss Card"
      >
        <X size={18} />
      </button>

      <div className="preview-card-content">
        {/* Left Avatar / Image Stack */}
        <div className="preview-avatar-box" onClick={() => navigate('/buy/farmer-profile')}>
          <img src={farmer.avatar} alt={farmer.name} className="preview-avatar-img" />
          {farmer.verified && (
            <span className="preview-verified-badge" title="Verified Direct Farmer">
              <CheckCircle2 size={14} color="#16a34a" fill="#dcfce7" />
            </span>
          )}
        </div>

        {/* Center Info Details */}
        <div className="preview-info-box" onClick={() => navigate('/buy/farmer-profile')}>
          <div className="preview-header-line">
            <h3 className="preview-farmer-name">{farmer.name}</h3>
            <span className="preview-badge-pill">{farmer.badge}</span>
          </div>

          <p className="preview-farm-title">{farmer.farmName}</p>

          <div className="preview-meta-row">
            <div className="preview-rating-pill">
              <Star size={13} fill="#f59e0b" color="#f59e0b" />
              <span className="rating-num">{farmer.rating}</span>
              <span className="reviews-num">({farmer.reviewsCount})</span>
            </div>
            <span className="preview-dot-separator">•</span>
            <span className="preview-distance-text">{farmer.distance}</span>
          </div>

          {/* Produce Specialties Chips */}
          <div className="preview-specialties-row">
            {farmer.specialties.map((item, idx) => (
              <span key={idx} className="specialty-tag">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="preview-actions-row">
        <button
          className="btn-view-farmer-profile"
          onClick={() => navigate('/buy/farmer-profile')}
        >
          <span>View Farmer Profile</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
