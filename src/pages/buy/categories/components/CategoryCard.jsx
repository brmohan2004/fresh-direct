import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './CategoryCard.css';

/**
 * CategoryCard Component
 * Modular component for displaying an individual produce/product category card
 */
export default function CategoryCard({ category, onClick }) {
  const { name, itemCount, badge, image, icon, bgColor, iconColor } = category;

  return (
    <div className="cat-card" onClick={onClick}>
      <div className="cat-card-left">
        <div
          className="cat-icon-badge"
          style={{ backgroundColor: bgColor, color: iconColor }}
        >
          {icon}
        </div>
        <div className="cat-card-info">
          <h3 className="cat-card-name">{name}</h3>
          <span className="cat-card-count">{itemCount}</span>
          {badge && <span className="cat-card-tag">{badge}</span>}
        </div>
      </div>

      <div className="cat-card-right">
        <div className="cat-card-img-wrapper">
          <img src={image} alt={name} className="cat-card-img" />
        </div>
        <button className="cat-card-arrow" aria-label={`View ${name}`}>
          <ArrowRight size={18} className="arrow-desktop" />
          <ChevronRight size={18} className="arrow-mobile" />
        </button>
      </div>
    </div>
  );
}
