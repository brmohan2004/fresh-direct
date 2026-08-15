import React from 'react';
import { Tag, ChevronRight, Info, ShieldCheck, RefreshCw, Leaf, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CartSummaryCard.css';

export default function CartSummaryCard({ subtotal, itemCount, threshold, freeDeliveryTotal }) {
  const navigate = useNavigate();
  const deliveryCharge = subtotal >= freeDeliveryTotal ? 0 : 25;
  const remainingForFree = Math.max(0, freeDeliveryTotal - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeDeliveryTotal) * 100);

  return (
    <div className="cart-summary-card">
      {/* Free Delivery Bar Header */}
      <div className="free-delivery-banner">
        <div className="delivery-banner-top">
          <span className="truck-icon-badge">🚚</span>
          <div className="delivery-banner-text">
            {remainingForFree === 0 ? (
              <span className="free-title">Yay! You got <strong>FREE delivery</strong></span>
            ) : (
              <span className="free-title">Add ₹{remainingForFree} more for <strong>FREE delivery</strong></span>
            )}
            <p className="free-desc">Shop for ₹{freeDeliveryTotal} to save on delivery.</p>
          </div>
        </div>

        <div className="delivery-progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {remainingForFree > 0 && (
          <span className="progress-remaining-text">₹{remainingForFree} more</span>
        )}
      </div>

      {/* Coupon Trigger Box */}
      <div className="coupon-box-trigger" onClick={() => alert('Coupon code selection modal')}>
        <div className="coupon-box-left">
          <Tag size={18} className="coupon-tag-icon" />
          <span className="coupon-text">Apply Coupon</span>
        </div>
        <ChevronRight size={18} className="coupon-arrow" />
      </div>

      {/* Order Summary Details */}
      <div className="summary-section">
        <h3 className="summary-title">Order Summary</h3>

        <div className="summary-row">
          <span className="summary-label">Subtotal ({itemCount} items)</span>
          <span className="summary-value">₹{subtotal}</span>
        </div>

        <div className="summary-row">
          <span className="summary-label delivery-label">
            Delivery Charges <Info size={14} className="info-icon" />
          </span>
          <span className="summary-value delivery-value">
            {deliveryCharge === 0 ? (
              <>
                <span className="strikethrough-price">₹25</span>
                <span className="free-tag">FREE</span>
              </>
            ) : (
              `₹${deliveryCharge}`
            )}
          </span>
        </div>

        <div className="summary-divider" />

        <div className="summary-row total-row">
          <span className="total-label">Total Amount</span>
          <span className="total-value">₹{subtotal + deliveryCharge}</span>
        </div>

        <div className="safe-payments-pill">
          <ShieldCheck size={16} className="safe-icon" />
          <span>Safe & Secure Payments</span>
        </div>

        <button
          className="proceed-checkout-btn"
          onClick={() => navigate('/buy/checkout')}
        >
          <span>Proceed to Checkout</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Trust Badges Footer */}
      <div className="cart-trust-badges">
        <div className="trust-item">
          <ShieldCheck size={20} className="trust-icon" />
          <span className="trust-title">100% Secure</span>
          <span className="trust-desc">Payments</span>
        </div>
        <div className="trust-item">
          <RefreshCw size={20} className="trust-icon" />
          <span className="trust-title">Easy Returns</span>
          <span className="trust-desc">Within 7 days</span>
        </div>
        <div className="trust-item">
          <Leaf size={20} className="trust-icon" />
          <span className="trust-title">Always Fresh</span>
          <span className="trust-desc">Quality Produce</span>
        </div>
      </div>
    </div>
  );
}
