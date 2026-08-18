import React from 'react';
import { Search, X } from 'lucide-react';
import './MapTopFilterBar.css';

/**
 * MapTopFilterBar Component
 * Renders floating top map search bar input and filter chip pills
 */
export default function MapTopFilterBar({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  totalFarmersCount
}) {
  return (
    <div className="map-top-overlay">
      <div className="map-search-bar">
        <Search size={20} className="map-search-icon" />
        <input
          type="text"
          placeholder="Search nearby farmers or crops..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="map-search-input"
        />
        {searchQuery && (
          <button className="clear-search-btn" onClick={() => onSearchChange('')}>
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter Chips Row */}
      <div className="map-filter-row">
        <button
          className={`map-filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All Farms ({totalFarmersCount})
        </button>
        <button
          className={`map-filter-chip ${activeFilter === 'organic' ? 'active' : ''}`}
          onClick={() => onFilterChange('organic')}
        >
          Organic Certified
        </button>
        <button
          className={`map-filter-chip ${activeFilter === 'nearest' ? 'active' : ''}`}
          onClick={() => onFilterChange('nearest')}
        >
          Nearest (&lt; 2km)
        </button>
        <button
          className={`map-filter-chip ${activeFilter === 'top' ? 'active' : ''}`}
          onClick={() => onFilterChange('top')}
        >
          Top Rated (4.8+)
        </button>
      </div>
    </div>
  );
}
