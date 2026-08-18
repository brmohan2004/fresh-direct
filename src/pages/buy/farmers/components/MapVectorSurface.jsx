import React from 'react';
import { Navigation } from 'lucide-react';
import FarmerMapPin from './FarmerMapPin';
import './MapVectorSurface.css';

/**
 * MapVectorSurface Component
 * Renders vector map grid, rivers, farmland plots, distance radii, user position marker, and farmer pins
 */
export default function MapVectorSurface({ farmers, selectedFarmer, onPinClick }) {
  return (
    <div className="map-viewport">
      <svg
        className="map-svg-surface"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Map Base Gradients & Plots */}
        <defs>
          <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="50%" stopColor="#f0fdf4" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>

        {/* Background Surface */}
        <rect width="100" height="100" fill="url(#terrainGrad)" />

        {/* Farmland Plots */}
        <path d="M 5,10 Q 25,5 35,25 T 10,45 Z" fill="#dcfce7" opacity="0.6" />
        <path d="M 55,5 Q 85,15 95,40 T 60,50 Z" fill="#dcfce7" opacity="0.7" />
        <path d="M 65,60 Q 90,70 85,95 T 50,85 Z" fill="#d1fae5" opacity="0.6" />
        <path d="M 10,60 Q 30,55 40,85 T 15,95 Z" fill="#dcfce7" opacity="0.7" />

        {/* Distance Radii Circles from User */}
        <circle cx="50" cy="50" r="18" fill="none" stroke="#16a34a" strokeDasharray="1,1" strokeOpacity="0.25" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#16a34a" strokeDasharray="1.5,1.5" strokeOpacity="0.2" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#16a34a" strokeDasharray="2,2" strokeOpacity="0.15" strokeWidth="0.3" />

        {/* Curved Rivers & Water Streams */}
        <path
          d="M 0,30 Q 30,45 50,35 T 100,60"
          fill="none"
          stroke="#bae6fd"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Road Network Grid Lines */}
        <path d="M 50,0 L 50,100" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 0,50 L 100,50" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 15,0 Q 40,50 85,100" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        <path d="M 85,0 Q 45,60 10,100" fill="none" stroke="#ffffff" strokeWidth="1.2" />

        {/* Secondary Road Connections */}
        <path d="M 38,42 L 50,50" stroke="#16a34a" strokeWidth="0.6" strokeDasharray="0.8,0.8" opacity="0.6" />
        <path d="M 62,28 L 50,50" stroke="#16a34a" strokeWidth="0.6" strokeDasharray="0.8,0.8" opacity="0.6" />
        <path d="M 50,55 L 50,50" stroke="#16a34a" strokeWidth="0.6" strokeDasharray="0.8,0.8" opacity="0.6" />
      </svg>

      {/* User Current Location Radar Pulse Pin */}
      <div className="user-location-marker" style={{ left: '50%', top: '50%' }}>
        <div className="user-radar-wave"></div>
        <div className="user-dot">
          <Navigation size={14} color="#ffffff" fill="#ffffff" />
        </div>
        <span className="user-location-tooltip">You (Bengaluru)</span>
      </div>

      {/* Interactive Farmer Pins Overlay */}
      {farmers.map((farmer) => (
        <FarmerMapPin
          key={farmer.id}
          farmer={farmer}
          isSelected={selectedFarmer?.id === farmer.id}
          onClick={onPinClick}
        />
      ))}
    </div>
  );
}
