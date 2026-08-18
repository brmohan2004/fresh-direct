import React, { useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import farmerImg from '../../../../assets/farmer.png';
import './AboutFarmerCard.css';

export default function AboutFarmerCard({ onOpenVideoModal }) {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <div className="profile-section-card about-card">
      <div className="about-content-layout">
        <div className="about-text-side">
          <h2 className="section-title">About Ramesh Kumar</h2>
          <p className={`bio-text ${bioExpanded ? 'expanded' : ''}`}>
            I have been farming for over 8 years with a passion for growing organic and pesticide-free produce. My farm focuses on traditional and sustainable farming practices to ensure healthy, chemical-free food for every family.
          </p>
          <button
            className="read-more-btn"
            onClick={() => setBioExpanded(!bioExpanded)}
          >
            <span>{bioExpanded ? 'Show Less' : 'Read More'}</span>
            <ChevronDown size={14} className={`chevron ${bioExpanded ? 'rotated' : ''}`} />
          </button>
        </div>

        <div className="about-video-side">
          <div
            className="video-thumbnail-box"
            onClick={onOpenVideoModal}
          >
            <img src={farmerImg} alt="Farmer Video Intro" className="video-thumb-img" />
            <div className="video-play-overlay">
              <div className="play-button-icon">
                <Play size={22} fill="#ffffff" color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
