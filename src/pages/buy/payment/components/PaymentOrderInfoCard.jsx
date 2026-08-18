import React from 'react';

export default function PaymentOrderInfoCard() {
  return (
    <div className="payment-order-info-card">
      <div className="order-info-grid">
        {/* Order ID */}
        <div className="info-cell order-id-cell">
          <span className="info-label">Order ID</span>
          <span className="info-value order-id-value">#FD1234567890</span>
        </div>

        {/* Order Date */}
        <div className="info-cell order-date-cell">
          <span className="info-label">Order Date</span>
          <span className="info-value">12 May 2024, 09:41 AM</span>
        </div>

        {/* Paid Amount */}
        <div className="info-cell paid-amount-cell">
          <span className="info-label">Paid Amount</span>
          <span className="info-value paid-amount-value">₹486.50</span>
        </div>

        {/* Payment Method */}
        <div className="info-cell payment-method-cell">
          <span className="info-label">Payment Method</span>
          <div className="payment-method-badge-row">
            <div className="upi-logo-badge">
              <span className="upi-text">UPI</span>
              <span className="upi-arrow">▶</span>
            </div>
            <span className="upi-id-subtext">UPI ID: priya@upi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
