import React from 'react';
import './ProductCategoryPills.css';

// Asset Images
import catAll from '../../../../assets/hero_basket.png';
import catVegetables from '../../../../assets/cat_vegetables.png';
import catFruits from '../../../../assets/cat_fruits.png';
import catOrganic from '../../../../assets/cat_organic.png';
import catHerbs from '../../../../assets/cat_herbs_spices.png';
import catDairy from '../../../../assets/cat_dairy_eggs.png';

const categoriesList = [
  { id: 'all', label: 'All Produce', count: 48, icon: catAll },
  { id: 'vegetables', label: 'Vegetables', count: 24, icon: catVegetables },
  { id: 'fruits', label: 'Fruits', count: 12, icon: catFruits },
  { id: 'organic', label: '100% Organic', count: 18, icon: catOrganic },
  { id: 'herbs', label: 'Herbs & Spices', count: 8, icon: catHerbs },
  { id: 'dairy', label: 'Dairy & Eggs', count: 6, icon: catDairy }
];

export default function ProductCategoryPills({ activeCategory, onSelectCategory }) {
  return (
    <div className="category-cards-container">
      <div className="cards-scroll-wrapper">
        {categoriesList.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-full-img-card ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <img src={cat.icon} alt={cat.label} className="card-full-bg-img" />
            <div className="card-gradient-overlay" />
            <span className="card-count-badge">{cat.count}</span>
            <span className="category-card-label">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
