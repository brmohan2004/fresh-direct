import React from 'react';
import { Heart, ShoppingBag, Plus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './WishlistSummaryCard.css';

export default function WishlistSummaryCard({ totalItems, onMoveAllToCart, recommendedProduce }) {
  const navigate = useNavigate();

  return (
    <div className="wishlist-summary-wrapper">
      {/* Wishlist Summary Box */}
      <div className="wishlist-summary-card">
        <h3 className="summary-card-title">Wishlist Summary</h3>
        
        <div className="summary-count-box">
          <div className="heart-circle">
            <Heart size={20} fill="#16a34a" color="#16a34a" />
          </div>
          <div className="count-info">
            <span className="count-num">{totalItems}</span>
            <span className="count-label">Items in your wishlist</span>
          </div>
        </div>

        <button className="move-all-btn" onClick={onMoveAllToCart}>
          <ShoppingBag size={18} />
          <span>Move All to Cart</span>
        </button>
      </div>

      {/* Recommended "You May Also Like" Box */}
      <div className="rec-summary-box">
        <h4 className="rec-summary-title">You May Also Like</h4>
        <div className="rec-items-list">
          {recommendedProduce.map((item) => (
            <div key={item.id} className="rec-item-mini">
              <img src={item.image} alt={item.name} className="rec-mini-img" />
              <div className="rec-mini-info">
                <span className="rec-mini-name">{item.name}</span>
                <span className="rec-mini-farm">{item.farm}</span>
                <span className="rec-mini-price">₹{item.price}/{item.unit}</span>
              </div>
              <button className="rec-mini-add" title="Add to cart">
                <Plus size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Share Fresh Goodness Banner */}
      <div className="share-banner-card">
        <div className="share-text">
          <h5>Share Fresh Goodness</h5>
          <p>Invite friends to order fresh farm produce directly from local farmers.</p>
          <button className="invite-btn" onClick={() => navigate('/buy/home')}>
            Explore Farmers <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
