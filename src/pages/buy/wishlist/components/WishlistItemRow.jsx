import React from 'react';
import { Heart, MoreVertical, ShoppingCart } from 'lucide-react';
import './WishlistItemRow.css';

export default function WishlistItemRow({ item, onRemove, onAddToCart }) {
  const { id, name, farm, price, unit, image, badge, addedDate } = item;

  return (
    <div className="wishlist-item-row">
      <div className="wishlist-item-left">
        <div className="wishlist-img-box">
          <img src={image} alt={name} className="wishlist-img" />
        </div>
        <div className="wishlist-info">
          <h4 className="wishlist-item-name">{name}</h4>
          <span className="wishlist-item-farm">{farm}</span>
          <div className="wishlist-price-unit">
            <span className="price-val">₹{price}</span>
            <span className="unit-text">/{unit}</span>
          </div>
          {badge && <span className="wishlist-tag">{badge}</span>}
        </div>
      </div>

      {addedDate && (
        <div className="wishlist-item-date desktop-only">
          <span>Added on {addedDate}</span>
        </div>
      )}

      <div className="wishlist-item-actions">
        <button
          className="wishlist-heart-btn active"
          onClick={() => onRemove(id)}
          title="Remove from wishlist"
          aria-label="Remove from wishlist"
        >
          <Heart size={18} fill="#16a34a" color="#16a34a" />
        </button>

        <button className="wishlist-more-btn desktop-only" title="Options">
          <MoreVertical size={16} />
        </button>

        <button
          className="wishlist-add-cart-btn"
          onClick={() => onAddToCart(item)}
        >
          <ShoppingCart size={15} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
