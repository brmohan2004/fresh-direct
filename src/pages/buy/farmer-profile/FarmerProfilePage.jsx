import React, { useState } from 'react';
import { Check, X, Play } from 'lucide-react';
import farmlandCover from '../../../assets/farmland_cover.png';

// Modular Components
import FarmerBanner from './components/FarmerBanner';
import FarmerProfileCard from './components/FarmerProfileCard';
import FarmerStatsGrid from './components/FarmerStatsGrid';
import AboutFarmerCard from './components/AboutFarmerCard';
import WhatIGrowCard from './components/WhatIGrowCard';
import CustomerReviewsCard from './components/CustomerReviewsCard';
import FarmInfoSidebar from './components/FarmInfoSidebar';
import FarmerMobileBottomBar from './components/FarmerMobileBottomBar';

import './FarmerProfilePage.css';

export default function FarmerProfilePage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ramesh Kumar - FarmDirect Farmer Profile',
        text: 'Check out Ramesh Kumar organic farm produce on FarmDirect!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2500);
    }
  };

  return (
    <div className="farmer-profile-container">
      {/* Toast Notification */}
      {showShareToast && (
        <div className="share-toast">
          <Check size={16} /> Link copied to clipboard!
        </div>
      )}

      {/* Background Image Banner & Floating Mobile Buttons */}
      <FarmerBanner
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite(!isFavorite)}
        onShare={handleShare}
      />

      {/* Main Profile Wrapper */}
      <div className="farmer-profile-wrapper">
        {/* Profile Summary Card */}
        <FarmerProfileCard onShare={handleShare} />

        {/* Highlights / 4 Metric Cards */}
        <FarmerStatsGrid />

        {/* Content Grid */}
        <div className="farmer-content-grid">
          {/* Main Column */}
          <div className="farmer-main-column">
            {/* About Farmer */}
            <AboutFarmerCard onOpenVideoModal={() => setShowVideoModal(true)} />
            
            {/* What I Grow */}
            <WhatIGrowCard />
            
            {/* Customer Reviews */}
            <CustomerReviewsCard />
          </div>

          {/* Farmer Info & Bottom Highlights Sidebar */}
          <FarmInfoSidebar />
        </div>
      </div>

      {/* Video Intro Modal */}
      {showVideoModal && (
        <div className="video-modal-backdrop" onClick={() => setShowVideoModal(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setShowVideoModal(false)}>
              <X size={20} />
            </button>
            <div className="video-player-box">
              <img src={farmlandCover} alt="Farm Tour" className="modal-video-bg" />
              <div className="modal-video-overlay">
                <Play size={48} fill="#ffffff" color="#ffffff" className="modal-play-icon" />
                <p className="modal-video-title">Virtual Tour of Green Valley Farm</p>
                <span className="modal-video-sub">Ramesh Kumar introducing organic farm practices</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Action Bar */}
      <FarmerMobileBottomBar />
    </div>
  );
}
