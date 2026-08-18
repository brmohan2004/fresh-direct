import React from 'react';
import { HelpCircle, ShieldCheck } from 'lucide-react';
import './PriceDetailsSummary.css';

/**
 * PriceDetailsSummary Component
 * Displays subtotal, delivery fee, discounts, total amount, and secure payment badge
 */
export default function PriceDetailsSummary({ subtotal, deliveryFee, discount, totalAmount }) {
  return (
    <div className="checkout-card price-details-card">
      <div className="card-top-title-row">
        <h3>Price Details</h3>
      </div>

      <div className="price-breakdown-list">
        <div className="price-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="price-row">
          <span>
            Delivery Fee <HelpCircle size={13} className="info-help-icon" />
          </span>
          <span>₹{deliveryFee}</span>
        </div>
        {discount > 0 && (
          <div className="price-row discount-row">
            <span>Discount</span>
            <span>- ₹{discount}</span>
          </div>
        )}

        <div className="price-divider" />

        <div className="total-amount-row">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      <div className="security-footer-badge">
        <ShieldCheck size={16} color="#16a34a" />
        <span>Safe and Secure Payments</span>
      </div>
    </div>
  );
}
