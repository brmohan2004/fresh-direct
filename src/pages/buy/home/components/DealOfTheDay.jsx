import React, { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';
import ProductCard from './ProductCard';
import './DealOfTheDay.css';

/**
 * DealOfTheDay Component
 * Features a live ticking countdown timer positioned on the right side of the container.
 */
export default function DealOfTheDay({
  products,
  cartQuantities = {},
  favorites = {},
  onQuantityChange,
  onToggleFavorite
}) {
  // Live countdown timer state (5 hours, 42 mins, 18 secs default)
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="home-section deal-of-the-day-container">
      {/* Header with Title on Left & Countdown Timer on Right */}
      <div className="deal-header">
        <div className="deal-title-box">
          <div className="deal-badge">
            <Flame size={13} className="flame-icon" /> Limited Time Deals
          </div>
          <h2 className="deal-title">Deal of the Day 🔥</h2>
        </div>

        {/* Right-aligned Countdown Timer */}
        <div className="deal-countdown-box">
          <span className="timer-label">Ends in:</span>
          <div className="timer-digits">
            <Clock size={13} className="clock-icon" />
            <span className="digit-box">{formatNumber(timeLeft.hours)}</span>
            <span className="digit-colon">:</span>
            <span className="digit-box">{formatNumber(timeLeft.minutes)}</span>
            <span className="digit-colon">:</span>
            <span className="digit-box">{formatNumber(timeLeft.seconds)}</span>
          </div>
        </div>
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
