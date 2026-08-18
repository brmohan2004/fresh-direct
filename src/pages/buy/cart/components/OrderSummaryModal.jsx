import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Tag, ChevronRight, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import './OrderSummaryModal.css';

/**
 * OrderSummaryModal Component
 * Slide-up sheet showing detailed order breakdown (Free delivery, coupons, subtotal, delivery charge, total)
 */
export default function OrderSummaryModal({
  isOpen,
  onClose,
  subtotal,
  totalItemsCount,
  remainingForFree,
  freeDeliveryTotal,
  deliveryCharge,
  grandTotal
}) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const progressPercent = Math.min(100, (subtotal / freeDeliveryTotal) * 100);

  return (
    <div className="order-summary-modal-overlay" onClick={onClose}>
      <div className="order-summary-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="summary-modal-header">
          <h3>Order Summary</h3>
          <button
            className="summary-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Delivery Banner inside modal */}
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
        </div>

        {/* Coupon Box */}
        <div className="coupon-box-trigger" onClick={() => alert('Coupon code selection')}>
          <div className="coupon-box-left">
            <Tag size={18} className="coupon-tag-icon" />
            <span className="coupon-text">Apply Coupon</span>
          </div>
          <ChevronRight size={18} className="coupon-arrow" />
        </div>

        {/* Price Breakdown Details */}
        <div className="summary-rows-group">
          <div className="summary-row">
            <span className="summary-label">Subtotal ({totalItemsCount} items)</span>
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
            <span className="total-value">₹{grandTotal}</span>
          </div>
        </div>

        <div className="safe-payments-pill">
          <ShieldCheck size={16} className="safe-icon" />
          <span>Safe & Secure Payments</span>
        </div>

        <button
          className="modal-proceed-checkout-btn"
          onClick={() => navigate('/buy/checkout')}
        >
          <span>Proceed to Checkout</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
