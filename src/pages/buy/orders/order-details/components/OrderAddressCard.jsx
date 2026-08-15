import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import './OrderAddressCard.css';

export default function OrderAddressCard({ address }) {
  const { name, tag, street, phone } = address || {
    name: 'Priya S.',
    tag: 'Home',
    street: '123, Green Valley Layout, Peelamedu, Coimbatore - 641004, Tamil Nadu, India',
    phone: '+91 98765 43210'
  };

  return (
    <div className="details-card address-card">
      <div className="card-header-row">
        <h3 className="card-title">Delivery Address</h3>
        <button className="link-action-btn">
          <span>View on Map</span>
          <ExternalLink size={13} />
        </button>
      </div>

      <div className="address-content-box">
        <div className="address-icon-box">
          <MapPin size={18} className="pin-icon" />
        </div>
        <div className="address-details-info">
          <div className="name-tag-row">
            <span className="recipient-name">{name}</span>
            {tag && <span className="address-tag-pill">{tag}</span>}
          </div>
          <p className="address-street">{street}</p>
          <span className="phone-number">Phone: {phone}</span>
        </div>
      </div>
    </div>
  );
}
