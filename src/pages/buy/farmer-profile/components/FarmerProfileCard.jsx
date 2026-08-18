import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MapPin, Star, MessageCircle, Share2 } from 'lucide-react';
import farmerImg from '../../../../assets/farmer.png';
import './FarmerProfileCard.css';

export default function FarmerProfileCard({ onShare }) {
  const navigate = useNavigate();

  return (
    <div className="farmer-main-card">
      <div className="farmer-card-top">
        <div className="farmer-avatar-container">
          <img src={farmerImg} alt="Ramesh Kumar" className="farmer-avatar-img" />
        </div>

        <div className="farmer-identity">
          <div className="farmer-name-header">
            <h1 className="farmer-name">Ramesh Kumar</h1>
          </div>

          <div className="farmer-location-row">
            <MapPin size={14} className="location-pin" />
            <span>Green Valley Farm, Coimbatore, Tamil Nadu</span>
          </div>

          <div className="farmer-stats-meta">
            <div className="meta-rating-pill">
              <Star size={13} className="star-icon" fill="#f59e0b" color="#f59e0b" />
              <span className="rating-score">4.8</span>
              <span className="rating-count">(120+ reviews)</span>
            </div>
            <div className="meta-orders-pill">
              <span className="orders-count">250+ Orders</span>
            </div>
          </div>
        </div>

        {/* Verified Farmer Badge */}
        <div className="farmer-verified-badge-box">
          <span className="verified-badge">
            <CheckCircle2 size={13} />
            <span>Verified Farmer</span>
          </span>
        </div>

        {/* Desktop Action Buttons */}
        <div className="farmer-card-actions desktop-only">
          <button
            className="btn-primary-action"
            onClick={() => navigate('/buy/products?farmer=ramesh')}
          >
            <MessageCircle size={16} />
            <span>Message Farmer</span>
          </button>
          <button
            className="btn-outline-action"
            onClick={onShare}
          >
            <Share2 size={16} />
            <span>Share Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
