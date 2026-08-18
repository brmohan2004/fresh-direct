import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Plus, Minus } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart, onUpdateQuantity, cartQuantity = 0 }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/buy/product-details', { state: { product } });
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (onUpdateQuantity) {
      onUpdateQuantity(product.id, Math.max(0, cartQuantity - 1));
    }
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    if (onUpdateQuantity) {
      onUpdateQuantity(product.id, cartQuantity + 1);
    }
  };

  const discountPercent = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : null;

  return (
    <div className="product-listing-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {/* Top Badges Bar */}
      <div className="card-top-bar">
        {discountPercent ? (
          <span className="discount-tag-badge">{discountPercent}% OFF</span>
        ) : product.isOrganic ? (
          <span className="organic-tag-badge">Organic</span>
        ) : <span />}

        <button
          type="button"
          className={`card-wishlist-btn ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
          aria-label="Add to wishlist"
        >
          <Heart size={14} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : '#6b7280'} />
        </button>
      </div>

      {/* Product Image Box */}
      <div className="card-img-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      {/* Card Info Section */}
      <div className="card-content-body">
        {/* Rating & Farmer */}
        <div className="card-meta-line">
          <span className="card-rating-badge">
            <Star size={11} className="star-icon" />
            <span>{product.rating}</span>
            <span className="reviews-count">({product.reviewsCount})</span>
          </span>
          <span className="card-farm-name">{product.farmName}</span>
        </div>

        {/* Product Title */}
        <span className="card-product-title" title={product.name}>
          {product.name}
        </span>

        {/* Unit & Weight */}
        <span className="card-unit-label">{product.unit}</span>

        {/* Price & Add Button Row */}
        <div className="card-action-row">
          <div className="card-price-stack">
            <span className="card-current-price">₹{product.price}</span>
            {product.mrp && <span className="card-mrp-price">₹{product.mrp}</span>}
          </div>

          {cartQuantity === 0 ? (
            <button
              type="button"
              className="card-add-btn"
              onClick={handleAddClick}
            >
              <Plus size={14} />
              <span>ADD</span>
            </button>
          ) : (
            <div className="card-stepper-wrapper" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="card-stepper-btn"
                onClick={handleDecrement}
                aria-label="Decrease quantity"
              >
                <Minus size={13} />
              </button>
              <span className="card-stepper-val">{cartQuantity}</span>
              <button
                type="button"
                className="card-stepper-btn"
                onClick={handleIncrement}
                aria-label="Increase quantity"
              >
                <Plus size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
