import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import basketImg from '../../../../assets/hero_basket.png';
import tomatoImg from '../../../../assets/prod_tomatoes.png';
import potatoImg from '../../../../assets/prod_potatoes.png';
import spinachImg from '../../../../assets/prod_spinach.png';
import onionImg from '../../../../assets/prod_onions.png';

const summaryItems = [
  { id: 1, name: 'Mixed Vegetables', weight: '1 kg', badge: '1kg', img: basketImg },
  { id: 2, name: 'Tomato - Local', weight: '1 kg', badge: '1kg', img: tomatoImg },
  { id: 3, name: 'Potato', weight: '1 kg', badge: '1kg', img: potatoImg },
  { id: 4, name: 'Spinach', weight: '500 g', badge: '500g', img: spinachImg },
  { id: 5, name: 'Onion', weight: '500 g', badge: '500g', img: onionImg }
];

export default function PaymentOrderSummary() {
  const navigate = useNavigate();

  return (
    <div className="payment-order-summary-card">
      <div className="summary-header">
        <h3 className="summary-title">Order Summary</h3>
        <button
          className="view-details-btn"
          onClick={() => navigate('/buy/orders/order-details')}
        >
          <span>View Details</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="summary-items-list">
        {summaryItems.map((item) => (
          <div key={item.id} className="summary-item-card">
            <div className="item-img-wrapper">
              <img src={item.img} alt={item.name} className="summary-item-img" />
              <span className="item-weight-badge mobile-only-badge">{item.badge}</span>
            </div>
            <div className="item-info-wrapper desktop-only">
              <span className="item-name">{item.name}</span>
              <span className="item-weight">{item.weight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
