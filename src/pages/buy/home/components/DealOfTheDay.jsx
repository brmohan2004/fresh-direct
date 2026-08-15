import React from 'react';
import { Flame } from 'lucide-react';
import ProductCard from './ProductCard';
import './DealOfTheDay.css';

/**
 * DealOfTheDay Component
 * Attractive multi-colored deal container without See All button.
 * Displaying deal products in a compact single-row horizontal scroll.
 */
export default function DealOfTheDay({
  products,
  cartQuantities = {},
  favorites = {},
  onQuantityChange,
  onToggleFavorite
}) {
  return (
    <section className="home-section deal-of-the-day-container">
      <div className="deal-header">
        <div className="deal-badge">
          <Flame size={14} className="flame-icon" /> Limited Time Deals
        </div>
        <h2 className="deal-title">Deal of the Day 🔥</h2>
      </div>

      {/* Single Row Horizontally Scrollable Deal Products */}
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
