import React from 'react';
import { MapPin, ShoppingBag, Receipt, Check } from 'lucide-react';
import prodTomatoes from '../../../../../assets/prod_tomatoes.png';
import prodCarrots from '../../../../../assets/prod_carrots.png';
import prodSpinach from '../../../../../assets/prod_spinach.png';
import './TrackOrderItemsSummary.css';

const items = [
  { id: 1, name: 'Fresh Red Tomatoes', weight: '1 kg', qty: 1, price: 32, image: prodTomatoes },
  { id: 2, name: 'Crunchy Orange Carrots', weight: '1 kg', qty: 1, price: 45, image: prodCarrots },
  { id: 3, name: 'Fresh Farm Spinach', weight: '250 g', qty: 1, price: 25, image: prodSpinach }
];

export default function TrackOrderItemsSummary() {
  return (
    <div className="track-items-summary-card">
      {/* Delivery Address Block */}
      <div className="delivery-address-block">
        <div className="address-badge-icon">
          <MapPin size={18} />
        </div>
        <div className="address-text-group">
          <span className="address-label">Delivery Address</span>
          <strong className="address-name">Home (Primary)</strong>
          <span className="address-full">124, 4th Cross, 100 Feet Rd, Indiranagar, Bengaluru - 560038</span>
        </div>
      </div>

      {/* Ordered Items List */}
      <div className="ordered-items-section">
        <div className="section-title-bar">
          <ShoppingBag size={16} className="bag-icon" />
          <span>Items in Order (3)</span>
        </div>

        <div className="items-mini-list">
          {items.map((item) => (
            <div key={item.id} className="item-mini-row">
              <img src={item.image} alt={item.name} className="item-mini-img" />
              <div className="item-mini-info">
                <span className="item-mini-name">{item.name}</span>
                <span className="item-mini-meta">{item.weight} • Qty: {item.qty}</span>
              </div>
              <span className="item-mini-price">₹{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Summary Row */}
      <div className="payment-summary-row">
        <div className="payment-method-badge">
          <Receipt size={15} />
          <span>Total Paid: <strong>₹102</strong></span>
        </div>
        <span className="payment-status-pill">
          <Check size={13} />
          <span>UPI Paid</span>
        </span>
      </div>
    </div>
  );
}
