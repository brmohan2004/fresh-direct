import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ChevronRight } from 'lucide-react';
import farmerImg from '../../../../assets/farmer.png';
import './NearbyFarmers.css';

const nearbyFarmers = [
  { id: 'f1', name: 'Ramesh Kumar', image: farmerImg },
  { id: 'f2', name: 'Sunita Devi', image: farmerImg },
  { id: 'f3', name: 'Venkatesh Gowda', image: farmerImg },
  { id: 'f4', name: 'Anandi Patel', image: farmerImg },
  { id: 'f5', name: 'Suresh Patil', image: farmerImg },
  { id: 'f6', name: 'Lakshmi Amma', image: farmerImg },
];

/**
 * NearbyFarmers Component
 * Clean circular profile avatar cards with farmer names.
 */
export default function NearbyFarmers() {
  return (
    <section className="home-section nearby-farmers-section">
      <div className="section-header">
        <div>
          <div className="section-badge farmer-badge">
            <Award size={13} color="#16a34a" /> Direct From Source
          </div>
          <h2 className="section-title">Farmers near you</h2>
        </div>
        <Link to="/buy/products" className="see-all-link">
          See All <ChevronRight size={14} />
        </Link>
      </div>

      {/* Circular Farmers Horizontal Scroll Row */}
      <div className="farmers-horizontal-row">
        {nearbyFarmers.map((farmer) => (
          <Link
            key={farmer.id}
            to={`/buy/products?farmer=${farmer.id}`}
            className="farmer-circle-card"
          >
            <div className="farmer-circle-avatar-ring">
              <img src={farmer.image} alt={farmer.name} className="farmer-circle-img" />
            </div>
            <span className="farmer-circle-name">{farmer.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
