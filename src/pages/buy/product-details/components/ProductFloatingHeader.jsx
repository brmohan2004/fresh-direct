import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import './ProductFloatingHeader.css';

export default function ProductFloatingHeader({ isFavorite, onToggleFavorite, onShare }) {
  const navigate = useNavigate();

  return (
    <div className="product-mobile-floating-header">
      <button
        className="product-float-btn back-btn"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
        title="Go Back"
      >
        <ArrowLeft size={18} />
      </button>

      <div className="product-float-right">
        <button
          className={`product-float-btn fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
          aria-label="Favorite Product"
          title="Favorite Product"
        >
          <Heart size={18} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : '#374151'} />
        </button>
        <button
          className="product-float-btn share-btn"
          onClick={onShare}
          aria-label="Share Product"
          title="Share Product"
        >
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
}
