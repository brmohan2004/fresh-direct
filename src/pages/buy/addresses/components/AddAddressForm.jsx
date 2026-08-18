import React from 'react';
import { Plus } from 'lucide-react';
import './AddAddressForm.css';

/**
 * AddAddressForm Component
 * Form for creating/editing delivery addresses
 */
export default function AddAddressForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="address-form">
      <div className="form-group">
        <label>Address Type</label>
        <select
          name="addressType"
          value={formData.addressType}
          onChange={onChange}
          className="form-select"
        >
          <option value="">Select Type</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Parent's Home">Parent's Home</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={onChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobileNumber"
          placeholder="Enter mobile number"
          value={formData.mobileNumber}
          onChange={onChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="addressText"
          rows={3}
          placeholder="House / Flat No., Building, Street, Area, Landmark"
          value={formData.addressText}
          onChange={onChange}
          className="form-textarea"
          required
        />
      </div>

      <div className="form-row-2col">
        <div className="form-group">
          <label>City / Town</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={onChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            placeholder="Enter pincode"
            value={formData.pincode}
            onChange={onChange}
            className="form-input"
          />
        </div>
      </div>

      <label className="form-checkbox-label">
        <input
          type="checkbox"
          name="setAsDefault"
          checked={formData.setAsDefault}
          onChange={onChange}
          className="form-checkbox"
        />
        <span>Set as default address</span>
      </label>

      <button type="submit" className="submit-address-btn">
        <Plus size={16} />
        <span>Save Address</span>
      </button>
    </form>
  );
}
