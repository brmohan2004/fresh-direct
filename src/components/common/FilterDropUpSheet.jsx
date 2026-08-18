import React, { useState } from 'react';
import { X, RotateCcw, Check, SlidersHorizontal, Star } from 'lucide-react';
import './FilterDropUpSheet.css';

// Asset Images
import catAll from '../../assets/hero_basket.png';
import catVegetables from '../../assets/cat_vegetables.png';
import catFruits from '../../assets/cat_fruits.png';
import catOrganic from '../../assets/cat_organic.png';
import catHerbs from '../../assets/cat_herbs_spices.png';
import catDairy from '../../assets/cat_dairy_eggs.png';

const sortOptions = [
  { id: 'relevance', label: 'Popularity' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Rating: High to Low' },
  { id: 'discount', label: 'Highest Discount' }
];

const categoryOptions = [
  { id: 'all', label: 'All Produce', icon: catAll },
  { id: 'vegetables', label: 'Vegetables', icon: catVegetables },
  { id: 'organic', label: '100% Organic', icon: catOrganic },
  { id: 'fruits', label: 'Fruits', icon: catFruits },
  { id: 'herbs', label: 'Herbs & Spices', icon: catHerbs },
  { id: 'dairy', label: 'Dairy & Eggs', icon: catDairy }
];

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under30', label: 'Under ₹30' },
  { id: '30to60', label: '₹30 - ₹60' },
  { id: '60to100', label: '₹60 - ₹100' },
  { id: 'above100', label: 'Above ₹100' }
];

const farmingTypes = [
  { id: 'all', label: 'All Methods' },
  { id: 'organic', label: '100% Organic' },
  { id: 'hydroponic', label: 'Hydroponic' },
  { id: 'natural', label: 'Natural Farming' }
];

export default function FilterDropUpSheet({ isOpen, onClose, onApplyFilters }) {
  const [selectedSort, setSelectedSort] = useState('relevance');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedFarmingType, setSelectedFarmingType] = useState('all');
  const [selectedRating, setSelectedRating] = useState(0);

  if (!isOpen) return null;

  const handleReset = () => {
    setSelectedSort('relevance');
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedFarmingType('all');
    setSelectedRating(0);
  };

  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters({
        sort: selectedSort,
        category: selectedCategory,
        priceRange: selectedPriceRange,
        farmingType: selectedFarmingType,
        minRating: selectedRating
      });
    }
    onClose();
  };

  return (
    <div className="filter-sheet-backdrop" onClick={onClose}>
      <div className="filter-sheet-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Drag Handle */}
        <div className="sheet-drag-handle" />

        {/* Sheet Header */}
        <div className="filter-sheet-header">
          <div className="sheet-title-group">
            <SlidersHorizontal size={20} className="sheet-header-icon" />
            <div>
              <h3>Filter & Sort</h3>
              <p className="sheet-subtitle">Refine your fresh produce preferences</p>
            </div>
          </div>

          <div className="sheet-header-right">
            <button type="button" className="sheet-reset-btn" onClick={handleReset}>
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
            <button type="button" className="sheet-close-btn" onClick={onClose} aria-label="Close filters">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Filter Sections */}
        <div className="filter-sheet-body">
          {/* Sort By Section */}
          <div className="sheet-section">
            <h4 className="sheet-section-title">Sort By</h4>
            <div className="sheet-chips-group">
              {sortOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`sheet-chip-btn ${selectedSort === opt.id ? 'active' : ''}`}
                  onClick={() => setSelectedSort(opt.id)}
                >
                  {selectedSort === opt.id && <Check size={13} />}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="sheet-section">
            <h4 className="sheet-section-title">Categories</h4>
            <div className="sheet-chips-group">
              {categoryOptions.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`sheet-chip-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.icon && (
                    <img src={cat.icon} alt={cat.label} className="sheet-cat-chip-img" />
                  )}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Section */}
          <div className="sheet-section">
            <h4 className="sheet-section-title">Price Range</h4>
            <div className="sheet-radio-grid">
              {priceRanges.map((range) => (
                <label key={range.id} className="sheet-radio-card">
                  <input
                    type="radio"
                    name="dropup-price"
                    checked={selectedPriceRange === range.id}
                    onChange={() => setSelectedPriceRange(range.id)}
                  />
                  <span className="radio-card-label">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Farming Method Section */}
          <div className="sheet-section">
            <h4 className="sheet-section-title">Farming Method</h4>
            <div className="sheet-chips-group">
              {farmingTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`sheet-chip-btn ${selectedFarmingType === type.id ? 'active' : ''}`}
                  onClick={() => setSelectedFarmingType(type.id)}
                >
                  {selectedFarmingType === type.id && <Check size={13} />}
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Minimum Rating Section */}
          <div className="sheet-section">
            <h4 className="sheet-section-title">Minimum Rating</h4>
            <div className="sheet-rating-chips">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className={`sheet-rating-btn ${selectedRating === rating ? 'active' : ''}`}
                  onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                >
                  <Star size={13} className="star-icon" />
                  <span>{rating}★ & above</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions Bar */}
        <div className="filter-sheet-footer">
          <button type="button" className="sheet-apply-primary-btn" onClick={handleApply}>
            <Check size={18} />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
