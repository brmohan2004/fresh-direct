import React from 'react';
import { Trash2 } from 'lucide-react';
import './CartItemRow.css';

export default function CartItemRow({ item, onUpdateQuantity, onRemove }) {
  const { id, name, farm, priceUnit, unit, price, quantity, image, badge } = item;
  const itemTotal = price * quantity;

  return (
    <div className="cart-item-row">
      <div className="cart-item-left">
        <div className="cart-item-img-box">
          <img src={image} alt={name} className="cart-item-img" />
        </div>
        <div className="cart-item-details">
          <h4 className="cart-item-name">{name}</h4>
          <span className="cart-item-farm">{farm}</span>
          <div className="cart-item-price-unit">
            <span className="unit-price">₹{price}</span>
            <span className="unit-text">/{unit}</span>
          </div>
          {badge && <span className="cart-item-tag">{badge}</span>}
        </div>
      </div>

      <div className="cart-item-actions">
        <div className="cart-item-total-mobile desktop-hidden">
          <span className="total-price">₹{itemTotal}</span>
          <span className="total-unit-qty">{quantity} {unit}</span>
        </div>

        <div className="quantity-stepper">
          <button
            className="stepper-btn minus"
            onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="stepper-value">{quantity} {unit}</span>
          <button
            className="stepper-btn plus"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <div className="cart-item-total-desktop mobile-hidden">
          <span className="total-price">₹{itemTotal}</span>
        </div>

        <button
          className="remove-item-btn"
          onClick={() => onRemove(id)}
          aria-label={`Remove ${name}`}
          title="Remove item"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
