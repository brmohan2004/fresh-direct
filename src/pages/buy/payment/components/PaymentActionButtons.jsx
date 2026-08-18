import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Package } from 'lucide-react';

export default function PaymentActionButtons() {
  const navigate = useNavigate();

  return (
    <div className="payment-action-buttons">
      <button
        className="continue-shopping-btn"
        onClick={() => navigate('/buy/home')}
      >
        <ShoppingBag size={18} />
        <span>Continue Shopping</span>
      </button>

      <button
        className="view-orders-btn"
        onClick={() => navigate('/buy/orders')}
      >
        <Package size={18} />
        <span>View My Orders</span>
      </button>
    </div>
  );
}
