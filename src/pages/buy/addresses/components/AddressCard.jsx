import React from 'react';
import { Home, MoreVertical, Star, Edit2, Navigation } from 'lucide-react';
import './AddressCard.css';

/**
 * AddressCard Component
 * Displays a single saved address card with default badge, address details, and actions
 */
export default function AddressCard({ address, onDeliverHere, onEdit }) {
  const IconComp = address.icon || Home;

  return (
    <div className={`address-card ${address.isDefault ? 'is-default' : ''}`}>
      <div className="address-card-header">
        <div className="address-type-icon">
          <IconComp size={20} />
        </div>

        <div className="address-header-details">
          <div className="address-tags-row">
            <span className="address-tag-pill">{address.type}</span>
            {address.isDefault && (
              <span className="address-tag-pill default-pill">
                <Star size={11} fill="#16a34a" color="#16a34a" />
                <span>Default</span>
              </span>
            )}
          </div>
          <h3 className="recipient-name">{address.recipient}</h3>
        </div>

        <button className="address-menu-btn" title="Options">
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="address-body-text">
        <p>{address.line1}</p>
        <p>{address.line2}</p>
        <p>{address.state}</p>
        <p className="phone-number-line">
          Phone: <span>{address.phone}</span>
        </p>
      </div>

      <div className="address-card-actions">
        <button
          className="action-item-btn edit-btn"
          onClick={() => onEdit && onEdit(address)}
        >
          <Edit2 size={15} />
          <span>Edit</span>
        </button>
        <button
          className="action-item-btn deliver-btn"
          onClick={() => onDeliverHere && onDeliverHere(address.id)}
        >
          <Navigation size={15} />
          <span>{address.isDefault ? 'Delivering Here' : 'Deliver Here'}</span>
        </button>
      </div>
    </div>
  );
}
