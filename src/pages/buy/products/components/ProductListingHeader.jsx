import React from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import './ProductListingHeader.css';

export default function ProductListingHeader({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onOpenMobileFilters
}) {
  const isTyping = searchQuery && searchQuery.trim().length > 0;

  return (
    <div className="product-listing-header">
      {/* Search & Sort Controls Bar */}
      <div className="header-controls-group">
        {/* Search Input Box with Filter / Search Toggle Button */}
        <div className="listing-search-input-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search vegetables, fruits, crops..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {isTyping ? (
            <button
              type="button"
              className="search-inner-filter-btn search-active-mode"
              onClick={() => onSearchChange(searchQuery)}
              aria-label="Search"
              title="Search Produce"
            >
              <Search size={14} />
            </button>
          ) : (
            <button
              type="button"
              className="search-inner-filter-btn"
              onClick={onOpenMobileFilters}
              aria-label="Open filter sheet"
              title="Filter Produce"
            >
              <SlidersHorizontal size={14} />
            </button>
          )}
        </div>

        {/* Sort Selector Dropdown */}
        <div className="listing-sort-wrapper">
          <ArrowUpDown size={14} className="sort-icon" />
          <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
            <option value="relevance">Sort by: Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>
      </div>
    </div>
  );
}
