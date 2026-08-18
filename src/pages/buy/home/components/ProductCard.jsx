import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, Plus, Minus } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({
  product,
  quantity = 0,
  isFavorite = false,
  onQuantityChange,
  onToggleFavorite
}) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    navigate('/buy/product-details');
  };

  const handleFavClick = (e) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(product.id);
    }
  };

  const handleQtyClick = (e, delta) => {
    e.stopPropagation();
    if (onQuantityChange) {
      onQuantityChange(product.id, delta);
    }
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {/* Image Container */}
      <div className="prod-img-container">
        {product.tag && <span className="prod-tag">{product.tag}</span>}
        <button
          type="button"
          className={`fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleFavClick}
          aria-label="Add to Wishlist"
        >
          <Heart
            size={16}
            fill={isFavorite ? '#ef4444' : 'none'}
            color={isFavorite ? '#ef4444' : '#6b7280'}
          />
        </button>
        <img src={product.image} alt={product.name} className="prod-img" />
      </div>

      {/* Product Meta & Information */}
      <div className="prod-content">
        <div className="prod-rating-row">
          <span className="prod-farmer">{product.farmer}</span>
          <span className="rating-badge">
            <Star size={12} fill="#f59e0b" color="#f59e0b" /> {product.rating}
          </span>
        </div>

        <span className="prod-title">
          {product.name}
        </span>
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
              onClick={(e) => handleQtyClick(e, 1)}
            >
              <Plus size={16} /> Add
            </button>
          ) : (
            <div className="qty-control" onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={(e) => handleQtyClick(e, -1)}>
                <Minus size={14} />
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={(e) => handleQtyClick(e, 1)}>
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
