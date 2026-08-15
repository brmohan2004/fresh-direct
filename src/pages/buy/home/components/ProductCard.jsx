import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Plus, Minus } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({
  product,
  quantity = 0,
  isFavorite = false,
  onQuantityChange,
  onToggleFavorite
}) {
  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="prod-img-container">
        {product.tag && <span className="prod-tag">{product.tag}</span>}
        <button
          type="button"
          className={`fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label="Add to Wishlist"
        >
          <Heart
            size={16}
            fill={isFavorite ? '#ef4444' : 'none'}
            color={isFavorite ? '#ef4444' : '#6b7280'}
          />
        </button>
        <Link to={`/buy/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="prod-img" />
        </Link>
      </div>

      {/* Product Meta & Information */}
      <div className="prod-content">
        <div className="prod-rating-row">
          <span className="prod-farmer">{product.farmer}</span>
          <span className="rating-badge">
            <Star size={12} fill="#f59e0b" color="#f59e0b" /> {product.rating}
          </span>
        </div>

        <Link to={`/buy/product/${product.id}`} className="prod-title">
          {product.name}
        </Link>
        <span className="prod-unit">{product.unit} • {product.harvestTime}</span>

        {/* Price & Add to Cart Bar */}
        <div className="prod-footer">
          <div className="price-box">
            <span className="curr-price">₹{product.price}</span>
            {product.originalPrice && <span className="orig-price">₹{product.originalPrice}</span>}
          </div>

          {quantity === 0 ? (
            <button
              type="button"
              className="add-cart-btn"
              onClick={() => onQuantityChange(product.id, 1)}
            >
              <Plus size={16} /> Add
            </button>
          ) : (
            <div className="qty-control">
              <button type="button" onClick={() => onQuantityChange(product.id, -1)}>
                <Minus size={14} />
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => onQuantityChange(product.id, 1)}>
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
