import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import './CheckoutOrderItems.css';

/**
 * CheckoutOrderItems Component
 * Lists order items with quantity modifier, trash button, and savings highlight banner
 */
export default function CheckoutOrderItems({ items, onUpdateQuantity, onRemoveItem, discount }) {
  const navigate = useNavigate();

  return (
    <div className="checkout-card order-items-card">
      <div className="card-top-title-row">
        <h3>Order Items ({items.length})</h3>
        <button
          className="change-link-btn"
          onClick={() => navigate('/buy/cart')}
        >
          Edit Cart
        </button>
      </div>

      <div className="order-items-list">
        {items.map((item) => (
          <div key={item.id} className="checkout-item-row">
            <div className="item-left-info">
              <img src={item.img} alt={item.name} className="item-thumbnail" />
              <div className="item-text-details">
                <h4>{item.name}</h4>
                <p className="item-weight">{item.weight}</p>
                <p className="item-unit-price">₹{item.price}</p>
              </div>
            </div>

            <div className="item-right-controls">
              <div className="quantity-picker">
                <button
                  className="qty-btn"
                  onClick={() => onUpdateQuantity(item.id, -1)}
                >
                  <Minus size={14} />
                </button>
                <span className="qty-number">{item.qty}</span>
                <button
                  className="qty-btn"
                  onClick={() => onUpdateQuantity(item.id, 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                className="trash-btn"
                onClick={() => onRemoveItem(item.id)}
                title="Remove item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {discount > 0 && (
        <div className="savings-highlight-pill">
          <span>🍃 Yay! You saved ₹{discount} on this order</span>
        </div>
      )}
    </div>
  );
}
