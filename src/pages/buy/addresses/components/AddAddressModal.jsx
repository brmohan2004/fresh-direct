import React from 'react';
import { X } from 'lucide-react';
import AddAddressForm from './AddAddressForm';
import './AddAddressModal.css';

/**
 * AddAddressModal Component
 * Mobile slide-up bottom sheet modal containing the address creation form
 */
export default function AddAddressModal({ isOpen, onClose, formData, onChange, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-address-modal-overlay" onClick={onClose}>
      <div className="mobile-address-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <div>
            <h3 className="form-header-title">Add New Address</h3>
            <p className="form-header-desc" style={{ margin: 0 }}>
              Fill in the details to add a new delivery address.
            </p>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-form-scroll-body">
          <AddAddressForm
            formData={formData}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
