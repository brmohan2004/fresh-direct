import React from 'react';
import './OrderSummaryCard.css';

export default function OrderSummaryCard({ summary }) {
  const { subtotal, deliveryFee, discount, total } = summary || {
    subtotal: 58,
    deliveryFee: 20,
    discount: 10,
    total: 68
  };

  return (
    <div className="details-card summary-card">
      <h3 className="card-title">Order Summary</h3>

      <div className="pricing-rows-list">
        <div className="price-row">
          <span className="price-label">Subtotal</span>
          <span className="price-val">₹{subtotal}</span>
        </div>

        <div className="price-row">
          <span className="price-label">Delivery Fee</span>
          <span className="price-val">₹{deliveryFee}</span>
        </div>

        {discount > 0 && (
          <div className="price-row discount-row">
            <span className="price-label">Discount</span>
            <span className="price-val green-text">- ₹{discount}</span>
          </div>
        )}
      </div>

      <div className="total-amount-row">
        <span className="total-label">Total Amount</span>
        <span className="total-val">₹{total}</span>
      </div>
    </div>
  );
}
