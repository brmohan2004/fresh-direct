import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PaymentSidebarOrderDetails() {
  return (
    <div className="payment-sidebar-card order-details-sidebar-card">
      <h3 className="sidebar-card-title">Order Details</h3>

      <div className="order-details-rows">
        <div className="details-row">
          <span>Item Total</span>
          <span className="row-amount">₹542.00</span>
        </div>

        <div className="details-row">
          <span>Delivery Fee</span>
          <div className="delivery-fee-badge">
            <span className="strikethrough-fee">₹40.00</span>
            <span className="free-text">FREE</span>
          </div>
        </div>

        <div className="details-row">
          <span>Packaging Fee</span>
          <span className="row-amount">₹10.00</span>
        </div>

        <div className="details-row discount-row">
          <span>Discount</span>
          <span className="discount-amount">- ₹65.50</span>
        </div>

        <div className="details-divider" />

        <div className="details-row total-paid-row">
          <span className="total-paid-label">Total Paid</span>
          <span className="total-paid-amount">₹486.50</span>
        </div>
      </div>

      <div className="security-note">
        <ShieldCheck size={16} className="security-icon" />
        <span>Your payment is secure and encrypted</span>
      </div>
    </div>
  );
}
