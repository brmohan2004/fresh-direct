import React from 'react';
import { MapPin, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './DeliveryLocationCard.css';

export default function DeliveryLocationCard() {
  const navigate = useNavigate();

  return (
    <div className="delivery-location-card">
      <div className="location-main-info">
        <div className="pin-icon-badge">
          <MapPin size={18} />
        </div>
        <div className="location-text-col">
          <div className="location-label-row">
            <span className="deliver-label">Deliver to</span>
            <span className="pincode-bold">560100, Bengaluru</span>
          </div>
          <div className="delivery-speed-tag">
            <Truck size={12} />
            <span>Express delivery by Today, 5:00 PM</span>
          </div>
        </div>
      </div>

      <button
        className="change-location-link-btn"
        onClick={() => navigate('/buy/addresses')}
      >
        Change
      </button>
    </div>
  );
}
