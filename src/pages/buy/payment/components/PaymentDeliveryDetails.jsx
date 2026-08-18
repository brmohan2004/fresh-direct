import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Bike, CreditCard, ChevronRight } from 'lucide-react';

export default function PaymentDeliveryDetails() {
  const navigate = useNavigate();

  return (
    <div className="payment-delivery-details-wrapper">
      {/* 3 Info Cards / Rows */}
      <div className="delivery-cards-grid">
        {/* Section 1: Delivering to */}
        <div className="delivery-info-card" onClick={() => navigate('/buy/addresses')}>
          <div className="card-icon-circle">
            <Store size={18} className="info-icon" />
          </div>
          <div className="card-main-content">
            <span className="card-label">Delivering to</span>
            <h4 className="card-title">Home</h4>
            <p className="card-subtext">123, Green Street, Coimbatore, Tamil Nadu - 641004</p>
          </div>
          <div className="card-action-end">
            <button className="change-btn desktop-only" onClick={(e) => { e.stopPropagation(); navigate('/buy/addresses'); }}>
              Change
            </button>
            <ChevronRight size={18} className="arrow-icon mobile-only" />
          </div>
        </div>

        {/* Section 2: Delivery Date & Time */}
        <div className="delivery-info-card" onClick={() => navigate('/buy/checkout')}>
          <div className="card-icon-circle">
            <Bike size={18} className="info-icon" />
          </div>
          <div className="card-main-content">
            <span className="card-label">Delivery Date & Time</span>
            <h4 className="card-title font-normal">14 May 2024, 10:00 AM - 12:00 PM</h4>
          </div>
          <div className="card-action-end">
            <button className="change-btn desktop-only" onClick={(e) => { e.stopPropagation(); navigate('/buy/checkout'); }}>
              Change
            </button>
            <ChevronRight size={18} className="arrow-icon mobile-only" />
          </div>
        </div>

        {/* Section 3: Paid Using */}
        <div className="delivery-info-card" onClick={() => navigate('/buy/checkout')}>
          <div className="card-icon-circle">
            <CreditCard size={18} className="info-icon" />
          </div>
          <div className="card-main-content">
            <span className="card-label">Paid Using</span>
            <h4 className="card-title font-normal">UPI - priya@upi</h4>
          </div>
          <div className="card-action-end">
            <button className="change-btn desktop-only" onClick={(e) => { e.stopPropagation(); navigate('/buy/checkout'); }}>
              Change
            </button>
            <ChevronRight size={18} className="arrow-icon mobile-only" />
          </div>
        </div>
      </div>
    </div>
  );
}
