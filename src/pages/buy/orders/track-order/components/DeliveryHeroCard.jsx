import React from 'react';
import { PhoneCall, MessageSquare, Star, ShieldCheck, Bike } from 'lucide-react';
import farmerImg from '../../../../../assets/farmer.png';
import './DeliveryHeroCard.css';

export default function DeliveryHeroCard() {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleMessage = () => {
    alert('Opening chat with Ramesh Kumar...');
  };

  return (
    <div className="delivery-hero-card">
      <div className="hero-top-info-row">
        {/* Delivery Partner Avatar */}
        <div className="hero-avatar-wrapper">
          <img src={farmerImg} alt="Delivery Hero Ramesh Kumar" className="hero-avatar-img" />
          <div className="hero-online-badge" />
        </div>

        {/* Hero Details */}
        <div className="hero-details">
          <div className="hero-title-row">
            <h4>Ramesh Kumar</h4>
            <span className="hero-rating-tag">
              <Star size={12} fill="#eab308" color="#eab308" />
              <span>4.9</span>
            </span>
          </div>
          <p className="hero-subtitle">
            <ShieldCheck size={13} className="shield-icon" />
            <span>Verified FarmDirect Rider</span>
          </p>

          <div className="hero-vehicle-pill">
            <Bike size={13} />
            <span>Activa EV • KA-03-EV-8842</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="hero-actions-row">
        <button type="button" className="hero-action-btn call-btn" onClick={handleCall}>
          <PhoneCall size={16} />
          <span>Call Ramesh</span>
        </button>

        <button type="button" className="hero-action-btn chat-btn" onClick={handleMessage}>
          <MessageSquare size={16} />
          <span>Message</span>
        </button>
      </div>
    </div>
  );
}
