import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBasket from '../../../../assets/hero_basket.png';
import './CategoryBanner.css';

/**
 * CategoryBanner Component
 * Modular hero banner displayed at top of Categories page on desktop/tablet views
 */
export default function CategoryBanner() {
  const navigate = useNavigate();

  return (
    <div className="cat-desktop-hero-section">
      <div className="cat-banner-card">
        <div className="cat-banner-text">
          <h2>Fresh from farms,<br />straight to you.</h2>
          <button className="cat-banner-btn" onClick={() => navigate('/buy/products')}>
            Explore Now
          </button>
        </div>
        <div className="cat-banner-image-box">
          <img src={heroBasket} alt="Fresh Farm Produce" className="cat-banner-img" />
        </div>
      </div>
    </div>
  );
}
