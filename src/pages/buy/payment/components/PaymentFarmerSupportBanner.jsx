import React from 'react';
import { Leaf } from 'lucide-react';

export default function PaymentFarmerSupportBanner() {
  return (
    <div className="farmer-support-banner">
      <div className="leaf-icon-circle">
        <Leaf size={20} className="leaf-icon" />
      </div>
      <div className="banner-text-content">
        <h4 className="banner-title">Thank you for supporting local farmers!</h4>
        <p className="banner-subtitle">You're making a difference 💚</p>
      </div>
    </div>
  );
}
