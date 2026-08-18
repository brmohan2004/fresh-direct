import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, CheckCircle2 } from 'lucide-react';
import farmerImg from '../../../../assets/farmer.png';
import farmlandCover from '../../../../assets/farmland_cover.png';
import './FarmerBanner.css';

export default function FarmerBanner({ isFavorite, onToggleFavorite, onShare }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile-Only Floating Header Buttons */}
      <div className="mobile-floating-header">
        <button
          className="mobile-float-btn back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go Back"
          title="Go Back"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="mobile-float-right">
          <button
            className={`mobile-float-btn fav-btn ${isFavorite ? 'active' : ''}`}
            onClick={onToggleFavorite}
            aria-label="Favorite Farmer"
            title="Favorite Farmer"
          >
            <Heart size={18} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : '#ffffff'} />
          </button>
          <button
            className="mobile-float-btn share-btn"
            onClick={onShare}
            aria-label="Share Profile"
            title="Share Profile"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Cover / Banner Section */}
      <div className="farmer-banner-wrapper">
        <img src={farmlandCover} alt="Farmland Cover" className="farmer-cover-img" />
        <div className="farmer-cover-overlay"></div>
        <img src={farmerImg} alt="Farmer Ramesh Kumar" className="farmer-cover-hero-farmer desktop-hero-img" />
      </div>
    </>
  );
}
