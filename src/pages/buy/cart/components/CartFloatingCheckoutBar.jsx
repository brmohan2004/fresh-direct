import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import OrderSummaryModal from './OrderSummaryModal';
import './CartFloatingCheckoutBar.css';

/**
 * CartFloatingCheckoutBar Component
 * Floating checkout bar positioned above the bottom navigation bar with Total Amount dropdown trigger
 */
export default function CartFloatingCheckoutBar({
  subtotal,
  totalItemsCount,
  remainingForFree,
  freeDeliveryTotal,
  deliveryCharge,
  grandTotal
}) {
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="cart-floating-bar-wrapper">
      <div className="cart-mobile-floating-bar">
        <div
          className="mobile-bar-price-group clickable-dropdown"
          onClick={() => setShowSummaryModal(!showSummaryModal)}
          title="Click to view order summary breakdown"
        >
          <div className="price-label-row">
            <span className="mobile-bar-total-label">Total Amount</span>
            {showSummaryModal ? (
              <ChevronUp size={16} className="dropdown-arrow-icon" />
            ) : (
              <ChevronDown size={16} className="dropdown-arrow-icon" />
            )}
          </div>
          <span className="mobile-bar-total-price">₹{grandTotal}</span>
        </div>

        <button
          className="mobile-bar-checkout-btn"
          onClick={() => navigate('/buy/checkout')}
        >
          <span>Proceed to Checkout</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Slide-Up Order Summary Modal */}
      <OrderSummaryModal
        isOpen={showSummaryModal}
        onClose={() => setShowSummaryModal(false)}
        subtotal={subtotal}
        totalItemsCount={totalItemsCount}
        remainingForFree={remainingForFree}
        freeDeliveryTotal={freeDeliveryTotal}
        deliveryCharge={deliveryCharge}
        grandTotal={grandTotal}
      />
    </div>
  );
}
