import React from 'react';
import { SlidersHorizontal, RotateCcw, X, Check } from 'lucide-react';
import './ProductFilterSidebar.css';

export default function ProductFilterSidebar({
  selectedPriceRange,
  onSelectPriceRange,
  selectedFarmingType,
  onSelectFarmingType,
  minRating,
  onSelectMinRating,
  onResetFilters,
  isOpenMobile = false,
  onCloseMobile
}) {
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

  return (
    <>
      {/* Mobile Drawer Overlay Backdrop */}
      {isOpenMobile && (
        <div className="filter-mobile-backdrop" onClick={onCloseMobile} />
      )}

      <aside className={`product-filter-sidebar ${isOpenMobile ? 'open-mobile' : ''}`}>
        {/* Sidebar Header */}
        <div className="filter-sidebar-header">
          <div className="filter-title-group">
            <SlidersHorizontal size={18} className="filter-icon" />
            <h3>Filters</h3>
          </div>

          <div className="filter-header-actions">
            <button type="button" className="reset-filter-btn" onClick={onResetFilters}>
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
            {isOpenMobile && (
              <button type="button" className="close-filter-mobile-btn" onClick={onCloseMobile}>
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Sections Container */}
        <div className="filter-sections-scroll">
          {/* Price Range Filter Section */}
          <div className="filter-group-section">
            <h4 className="filter-section-title">Price Range</h4>
            <div className="filter-options-list">
              {priceRanges.map((range) => (
                <label key={range.id} className="filter-checkbox-row">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={selectedPriceRange === range.id}
                    onChange={() => onSelectPriceRange(range.id)}
                  />
                  <span className="custom-radio-mark" />
                  <span className="filter-opt-label">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Farming Method Filter Section */}
          <div className="filter-group-section">
            <h4 className="filter-section-title">Farming Type</h4>
            <div className="filter-options-list">
              {farmingTypes.map((type) => (
                <label key={type.id} className="filter-checkbox-row">
                  <input
                    type="radio"
                    name="farmingType"
                    checked={selectedFarmingType === type.id}
                    onChange={() => onSelectFarmingType(type.id)}
                  />
                  <span className="custom-radio-mark" />
                  <span className="filter-opt-label">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Customer Rating Filter Section */}
          <div className="filter-group-section">
            <h4 className="filter-section-title">Minimum Rating</h4>
            <div className="filter-rating-chips">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className={`rating-chip-btn ${minRating === rating ? 'active' : ''}`}
                  onClick={() => onSelectMinRating(minRating === rating ? 0 : rating)}
                >
                  <span>{rating}★ & above</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Apply Button Footer */}
        {isOpenMobile && (
          <div className="filter-mobile-footer">
            <button type="button" className="apply-filter-mobile-btn" onClick={onCloseMobile}>
              <Check size={16} />
              <span>Apply Filters</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
