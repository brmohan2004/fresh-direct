import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './ProductDescriptionCard.css';

export default function ProductDescriptionCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="product-description-card">
      <h3 className="section-subtitle">About This Product</h3>
      <p className="description-text">
        Fresh local grown tomatoes. Rich in vitamin C and antioxidants. Perfect for cooking, salads, and everyday meals.
      </p>

      {isExpanded && (
        <div className="expanded-details-box">
          <div className="detail-item-row">
            <span className="detail-key">Origin:</span>
            <span className="detail-val">Mandya Organic Farms, Karnataka</span>
          </div>
          <div className="detail-item-row">
            <span className="detail-key">Storage:</span>
            <span className="detail-val">Store at room temperature until ripe, then refrigerate</span>
          </div>
          <div className="detail-item-row">
            <span className="detail-key">Shelf Life:</span>
            <span className="detail-val">4 - 6 days from date of harvest</span>
          </div>
          <div className="nutrition-table-mini">
            <span className="nutrition-heading">Nutrition Facts (per 100g):</span>
            <div className="nutrition-pills-row">
              <span className="nutri-pill">Calories: 18 kcal</span>
              <span className="nutri-pill">Vit C: 28% DV</span>
              <span className="nutri-pill">Fiber: 1.2g</span>
              <span className="nutri-pill">Potassium: 237mg</span>
            </div>
          </div>
        </div>
      )}

      <button
        className="read-more-toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? 'Show Less' : 'Read More +'}</span>
        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
    </div>
  );
}
