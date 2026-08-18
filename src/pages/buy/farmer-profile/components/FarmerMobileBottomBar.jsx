import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import './FarmerMobileBottomBar.css';

export default function FarmerMobileBottomBar() {
  const navigate = useNavigate();

  return (
    <div className="mobile-farmer-bottom-bar mobile-only">
      <button
        className="mobile-bottom-btn btn-secondary"
        onClick={() => navigate('/buy/products?farmer=ramesh')}
      >
        <MessageCircle size={16} />
        <span>Message Farmer</span>
      </button>
      <button
        className="mobile-bottom-btn btn-primary"
        onClick={() => navigate('/buy/products?farmer=ramesh')}
      >
        <ShoppingBag size={16} />
        <span>View Products</span>
      </button>
    </div>
  );
}
