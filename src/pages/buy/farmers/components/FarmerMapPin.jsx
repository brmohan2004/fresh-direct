import React from 'react';
import './FarmerMapPin.css';

/**
 * FarmerMapPin Component
 * Interactive map pin marker representing a nearby farmer location
 */
export default function FarmerMapPin({ farmer, isSelected, onClick }) {
  return (
    <div
      className={`farmer-map-pin ${isSelected ? 'active' : ''}`}
      style={{ left: `${farmer.coordinates.x}%`, top: `${farmer.coordinates.y}%` }}
      onClick={() => onClick(farmer)}
      title={`${farmer.name} - ${farmer.farmName}`}
    >
      {/* Pulsing ring for active farmer */}
      {isSelected && <div className="active-pin-pulse"></div>}

      {/* Pin Head Avatar Frame */}
      <div className="pin-avatar-frame">
        <img src={farmer.avatar} alt={farmer.name} className="pin-farmer-img" />
        <span className="pin-online-indicator"></span>
      </div>

      {/* Pin Label Tag */}
      <div className="pin-label-tag">
        <span className="pin-farmer-name">{farmer.name.split(' ')[0]}</span>
        <span className="pin-distance-badge">{farmer.distance}</span>
      </div>

      {/* Pin Tail Pointer */}
      <div className="pin-tail"></div>
    </div>
  );
}
