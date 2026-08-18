import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

export default function PaymentReferEarnBanner() {
  return (
    <div className="refer-earn-banner">
      <div className="gift-graphic-wrapper">
        <div className="gift-box-circle">
          <Gift size={32} className="gift-icon" />
          <span className="gift-particle particle-1"></span>
          <span className="gift-particle particle-2"></span>
          <span className="gift-particle particle-3"></span>
        </div>
      </div>

      <div className="refer-text-content">
        <h3 className="refer-title">Refer & Earn</h3>
        <p className="refer-description">
          Refer your friends and get <span className="highlight-cash">₹100</span> FarmDirect Cash
          <span className="desktop-only-inline"> when they place their first order.</span>
        </p>
      </div>

      <div className="refer-action">
        <button className="refer-now-btn">
          <span>Refer Now</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
