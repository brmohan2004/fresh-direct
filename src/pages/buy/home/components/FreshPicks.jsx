import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import './FreshPicks.css';

/**
 * FreshPicks Component
 * Dedicated "Today's Fresh Picks" section with single-row horizontal scrolling.
 */
export default function FreshPicks({
  products,
  cartQuantities = {},
  favorites = {},
  onQuantityChange,
  onToggleFavorite
}) {
  return (
    <section className="home-section fresh-picks-section">
      <div className="section-header">
        <div>
          <div className="section-badge fresh-badge">
            <Leaf size={13} color="#16a34a" fill="#16a34a" /> Daily Harvest
          </div>
          <h2 className="section-title">Today's Fresh Picks</h2>
        </div>
        <Link to="/buy/products" className="see-all-link">
          See All <ChevronRight size={16} />
        </Link>
      </div>

      {/* Single Row Horizontally Scrollable Products */}
      <div className="products-horizontal-row">
        {products.map((prod) => (
          <div key={prod.id} className="product-card-item">
            <ProductCard
              product={prod}
              quantity={cartQuantities[prod.id] || 0}
              isFavorite={!!favorites[prod.id]}
              onQuantityChange={onQuantityChange}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
