import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, CheckCircle2, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
import './ProductHeaderInfo.css';

export default function ProductHeaderInfo({ selectedPrice = 32, unitLabel = '1 kg' }) {
  return (
    <div className="product-header-info">
      {/* Title & Price Top Bar */}
      <div className="product-title-price-row">
        <div>
          <h1 className="product-main-title">Tomato</h1>
          <div className="farmer-affiliation-link">
            <NavLink to="/buy/farmer-profile" className="farmer-name-badge">
              <span>Sunrise Farms</span>
              <CheckCircle2 size={15} fill="#16a34a" color="#ffffff" className="verified-check" />
            </NavLink>
          </div>
        </div>

        <div className="product-price-box">
          <div className="price-tag-row">
            <span className="current-price">₹{selectedPrice}</span>
            <span className="price-unit">/{unitLabel}</span>
          </div>
          <div className="discount-tag-row">
            <span className="original-price">₹{Math.round(selectedPrice * 1.25)}</span>
            <span className="savings-badge">20% OFF</span>
          </div>
        </div>
      </div>

      {/* Ratings & Monthly Purchases Bar */}
      <div className="product-rating-row">
        <div className="rating-pill">
          <Star size={14} fill="#f59e0b" color="#f59e0b" />
          <span className="rating-score">4.8</span>
          <span className="rating-count">(128 reviews)</span>
        </div>
        <span className="divider-dot">•</span>
        <span className="bought-stat-text">500+ bought this month</span>
      </div>

      {/* Feature Badges Row */}
      <div className="product-badges-strip">
        <div className="feature-badge fresh">
          <Sparkles size={13} />
          <span>Fresh</span>
        </div>
        <div className="feature-badge safe">
          <ShieldCheck size={13} />
          <span>Pesticide Free</span>
        </div>
      </div>
    </div>
  );
}
