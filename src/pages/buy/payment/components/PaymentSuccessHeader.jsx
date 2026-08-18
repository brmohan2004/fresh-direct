import React from 'react';
import { Check } from 'lucide-react';

export default function PaymentSuccessHeader() {
  return (
    <div className="payment-success-header">
      {/* Decorative Confetti Shapes */}
      <div className="confetti-wrapper" aria-hidden="true">
        <span className="confetti-shape shape-diamond shape-yellow-1"></span>
        <span className="confetti-shape shape-circle shape-purple-1"></span>
        <span className="confetti-shape shape-triangle shape-pink-1"></span>
        <span className="confetti-shape shape-diamond shape-teal-1"></span>
        <span className="confetti-shape shape-circle shape-pink-2"></span>
        <span className="confetti-shape shape-triangle shape-yellow-2"></span>
        <span className="confetti-shape shape-diamond shape-purple-2"></span>
        <span className="confetti-shape shape-circle shape-teal-2"></span>
      </div>

      {/* Main Success Circle Checkmark Icon */}
      <div className="success-icon-circle">
        <Check size={38} strokeWidth={3} color="#ffffff" />
      </div>

      {/* Main Success Heading & Subtitle */}
      <h1 className="payment-success-title">Payment Successful!</h1>
      <p className="payment-success-subtitle">
        <span className="mobile-only-inline">Your order has been confirmed.</span>
        <span className="desktop-only-inline">Your order has been confirmed and will be delivered soon.</span>
      </p>
    </div>
  );
}
