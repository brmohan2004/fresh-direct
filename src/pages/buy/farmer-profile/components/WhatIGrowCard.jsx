import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import tomatoImg from '../../../../assets/prod_tomatoes.png';
import cucumberImg from '../../../../assets/prod_cucumbers.png';
import spinachImg from '../../../../assets/prod_spinach.png';
import okraImg from '../../../../assets/prod_green_beans.png';
import chilliImg from '../../../../assets/prod_peppers.png';
import './WhatIGrowCard.css';

export default function WhatIGrowCard() {
  const navigate = useNavigate();

  const crops = [
    { id: 1, name: 'Tomato', count: '12 Products', image: tomatoImg },
    { id: 2, name: 'Cucumber', count: '8 Products', image: cucumberImg },
    { id: 3, name: 'Spinach', count: '4 Products', image: spinachImg },
    { id: 4, name: 'Lady\'s Finger', count: '5 Products', image: okraImg },
    { id: 5, name: 'Green Chilli', count: '6 Products', image: chilliImg },
  ];

  return (
    <div className="profile-section-card">
      <div className="section-header-row">
        <h2 className="section-title">What I Grow</h2>
        <button
          className="view-all-link"
          onClick={() => navigate('/buy/products?farmer=ramesh')}
        >
          <span>View All</span>
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="crops-scroll-container">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="crop-item-card"
            onClick={() => navigate('/buy/products?category=' + crop.name.toLowerCase())}
          >
            <div className="crop-img-wrapper">
              <img src={crop.image} alt={crop.name} className="crop-img" />
            </div>
            <span className="crop-name">{crop.name}</span>
            <span className="crop-count">{crop.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
