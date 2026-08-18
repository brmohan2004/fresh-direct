import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Plus, Star, Heart, Check, ChevronRight } from 'lucide-react';
import prodCarrots from '../../../../assets/prod_carrots.png';
import prodSpinach from '../../../../assets/prod_spinach.png';
import prodCucumbers from '../../../../assets/prod_cucumbers.png';
import prodOnions from '../../../../assets/prod_onions.png';
import './RelatedProductsGrid.css';

const relatedItems = [
  { id: 1, name: 'Fresh Carrots', price: 45, originalPrice: 55, unit: '1 kg', rating: 4.8, reviews: 124, img: prodCarrots },
  { id: 2, name: 'Organic Spinach', price: 25, originalPrice: 30, unit: '250 g', rating: 4.9, reviews: 88, img: prodSpinach },
  { id: 3, name: 'Farm Cucumbers', price: 30, originalPrice: 40, unit: '500 g', rating: 4.7, reviews: 62, img: prodCucumbers },
  { id: 4, name: 'Red Onions', price: 35, originalPrice: 45, unit: '1 kg', rating: 4.8, reviews: 195, img: prodOnions }
];

export default function RelatedProductsGrid() {
  const [addedItems, setAddedItems] = useState({});
  const [favorites, setFavorites] = useState({});

  const handleAdd = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const toggleFav = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="related-products-section">
      {/* Header with Title & View All */}
      <div className="related-section-header">
        <div className="header-text-group">
          <h3 className="section-subtitle">You Might Also Like</h3>
          <p className="section-subdesc">Fresh organic produce harvested directly from local farms</p>
        </div>
        <NavLink to="/buy/products" className="view-all-link">
          <span>View All</span>
          <ChevronRight size={15} />
        </NavLink>
      </div>

      {/* Product Cards Container / Grid */}
      <div className="related-grid">
        {relatedItems.map((prod) => (
          <div key={prod.id} className="related-card">
            {/* Top Badges & Favorite Toggle */}
            <div className="related-card-top-bar">
              <span className="related-rating-badge">
                <Star size={11} className="star-icon" />
                <span>{prod.rating}</span>
              </span>
              <button
                type="button"
                className={`card-fav-btn ${favorites[prod.id] ? 'active' : ''}`}
                onClick={() => toggleFav(prod.id)}
                aria-label="Save to wishlist"
              >
                <Heart size={13} fill={favorites[prod.id] ? '#ef4444' : 'none'} color={favorites[prod.id] ? '#ef4444' : '#6b7280'} />
              </button>
            </div>

            {/* Product Image */}
            <NavLink to="/buy/product-details" className="related-img-box">
              <img src={prod.img} alt={prod.name} loading="lazy" />
            </NavLink>

            {/* Content Details */}
            <div className="related-details">
              <NavLink to="/buy/product-details" className="related-name" title={prod.name}>
                {prod.name}
              </NavLink>
              <span className="related-unit">{prod.unit}</span>

              {/* Pricing & Add Button Row */}
              <div className="related-price-row">
                <div className="price-stack">
                  <span className="related-price">₹{prod.price}</span>
                  {prod.originalPrice && (
                    <span className="related-mrp">₹{prod.originalPrice}</span>
                  )}
                </div>

                <button
                  type="button"
                  className={`related-add-btn ${addedItems[prod.id] ? 'added' : ''}`}
                  onClick={() => handleAdd(prod.id)}
                  aria-label={`Add ${prod.name}`}
                >
                  {addedItems[prod.id] ? (
                    <>
                      <Check size={13} />
                      <span>ADDED</span>
                    </>
                  ) : (
                    <>
                      <Plus size={13} />
                      <span>ADD</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
