import React, { useState } from 'react';
import { mockFarmers } from './data/mockFarmers';
import MapVectorSurface from './components/MapVectorSurface';
import MapTopFilterBar from './components/MapTopFilterBar';
import FarmerPreviewCard from './components/FarmerPreviewCard';
import './FarmerListingPage.css';

/**
 * FarmerListingPage Component
 * Route: /buy/farmers
 * Interactive Nearby Farmers Map View modularized into components:
 * - MapVectorSurface: Vector map terrain, rivers, user radar, and pins
 * - MapTopFilterBar: Top search input and filter chips
 * - FarmerPreviewCard: Floating bottom preview card sheet
 */
export default function FarmerListingPage() {
  const [selectedFarmer, setSelectedFarmer] = useState(mockFarmers[0]);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredFarmers = mockFarmers.filter((farmer) => {
    const matchesSearch =
      farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.farmName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (activeFilter === 'organic') return farmer.badge.includes('Organic') || farmer.farmName.includes('Organic');
    if (activeFilter === 'nearest') return parseFloat(farmer.distance) < 2.0;
    if (activeFilter === 'top') return farmer.rating >= 4.85;
    return true;
  });

  const handlePinClick = (farmer) => {
    setSelectedFarmer(farmer);
    setIsCardVisible(true);
  };

  return (
    <div className="farmers-map-container">
      {/* Interactive Map Vector Surface & Pins */}
      <MapVectorSurface
        farmers={filteredFarmers}
        selectedFarmer={selectedFarmer}
        onPinClick={handlePinClick}
      />

      {/* Floating Top Map Search & Filter Bar */}
      <MapTopFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        totalFarmersCount={mockFarmers.length}
      />

      {/* Selected Farmer Floating Bottom Preview Card */}
      {selectedFarmer && isCardVisible && (
        <FarmerPreviewCard
          farmer={selectedFarmer}
          onClose={() => setIsCardVisible(false)}
        />
      )}
    </div>
  );
}
