import React from 'react';
import { Link } from 'react-router-dom';
import farmerImg from '../../../../assets/farmer.png';
import './FarmerCard.css';

export default function FarmerCard() {
  return (
    <section className="farmer-spotlight-section">
      <div className="spotlight-content">
        <span className="spotlight-badge">Meet Your Local Farmer</span>
        <h2 className="spotlight-title">Ramesh Kumar's Organic Farm</h2>
        <p className="spotlight-desc">
          Located 15 km from your city in Ramanagara. Ramesh practices natural farming using indigenous seeds and zero chemical pesticides.
        </p>
        <div className="spotlight-stats">
          <div>
            <strong>15+ Yrs</strong>
            <span>Organic Farming</span>
          </div>
          <div>
            <strong>4.9 ★</strong>
            <span>Farmer Rating</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Natural Harvest</span>
          </div>
        </div>
        <Link to="/buy/products?farmer=ramesh" className="spotlight-btn">
          Shop Farmer Ramesh's Produce
        </Link>
      </div>
      <div className="spotlight-image-box">
        <img src={farmerImg} alt="Local Indian Organic Farmer" className="spotlight-img" />
      </div>
    </section>
  );
}
