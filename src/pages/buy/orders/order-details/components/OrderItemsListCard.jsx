import React from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import './OrderItemsListCard.css';

export default function OrderItemsListCard({ items = [], onBuyAgain }) {
  return (
    <div className="details-card items-card">
      <div className="card-header-row">
        <h3 className="card-title">Order Items ({items.length})</h3>
        <button className="link-action-btn">
          <span>View Invoice</span>
          <ExternalLink size={13} />
        </button>
      </div>

      <div className="order-items-list">
        {items.map((item) => (
          <div key={item.id} className="order-item-row">
            <div className="item-img-box">
              <img src={item.image} alt={item.name} className="item-img" />
            </div>

            <div className="item-info-col">
              <h4 className="item-name">{item.name}</h4>
              <span className="item-weight">{item.weight}</span>
            </div>

            <div className="item-price-col">
              <span className="item-price">₹{item.price}</span>
              <span className="item-qty">Qty: {item.quantity}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Again Action */}
      <button className="buy-again-btn" onClick={onBuyAgain}>
        <ShoppingCart size={16} />
        <span>Buy Again</span>
      </button>
    </div>
  );
}
