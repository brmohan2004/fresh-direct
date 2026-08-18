import React from 'react';
import LiveMapCard from './components/LiveMapCard';
import DeliveryHeroCard from './components/DeliveryHeroCard';
import TrackingStepper from './components/TrackingStepper';
import TrackOrderItemsSummary from './components/TrackOrderItemsSummary';

import './TrackOrderPage.css';

export default function TrackOrderPage() {
  return (
    <div className="track-order-page-wrapper">
      <div className="page-container track-order-container">
        {/* Responsive Grid Layout */}
        <div className="track-order-layout-grid">
          {/* Main Column: Live Map & Delivery Hero Info */}
          <div className="track-column-left">
            <LiveMapCard />
            <DeliveryHeroCard />
          </div>

          {/* Side Column: Order Stepper & Items Summary */}
          <div className="track-column-right">
            <TrackingStepper />
            <TrackOrderItemsSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
