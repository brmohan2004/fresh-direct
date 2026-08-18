import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import './DeliveryAddressCard.css';

/**
 * DeliveryAddressCard Component
 * Displays selected delivery address with change button
 */
export default function DeliveryAddressCard({ address }) {
  const navigate = useNavigate();

  const defaultAddress = address || {
    recipient: 'Priya S.',
    type: 'Home',
    line1: '123, Green Valley Layout,',
    line2: 'Peelamedu, Coimbatore - 641004',
    state: 'Tamil Nadu, India',
    phone: '+91 98765 43210'
  };

  return (
    <div className="checkout-card delivery-address-card">
      <div className="card-top-title-row">
        <h3>Delivery Address</h3>
        <button
          className="change-link-btn"
          onClick={() => navigate('/buy/addresses')}
        >
          Change
        </button>
      </div>

      <div className="address-content-box">
        <div className="address-pin-icon-box">
          <MapPin size={18} />
        </div>
        <div className="address-info-details">
          <div className="address-title-row">
            <h4 className="recipient-title">
              {defaultAddress.recipient} <span className="address-type-tag">{defaultAddress.type}</span>
            </h4>
          </div>
          <div className="address-lines-text">
            <p>{defaultAddress.line1}</p>
            <p>{defaultAddress.line2}</p>
            <p>{defaultAddress.state}</p>
            <p className="address-phone-line">
              Phone: {defaultAddress.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
