import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Home,
  Briefcase,
  Heart,
  ShieldCheck,
  Plus
} from 'lucide-react';
import AddressCard from './components/AddressCard';
import AddAddressForm from './components/AddAddressForm';
import AddAddressModal from './components/AddAddressModal';
import './AddressesPage.css';

const initialSavedAddresses = [
  {
    id: 1,
    type: 'Home',
    icon: Home,
    isDefault: true,
    recipient: 'Priya S.',
    line1: '123, Green Valley Layout,',
    line2: 'Peelamedu, Coimbatore - 641004,',
    state: 'Tamil Nadu, India',
    phone: '+91 98765 43210'
  },
  {
    id: 2,
    type: 'Work',
    icon: Briefcase,
    isDefault: false,
    recipient: 'Priya S.',
    line1: '8th Floor, WTC, Avinashi Road,',
    line2: 'Peelamedu, Coimbatore - 641004,',
    state: 'Tamil Nadu, India',
    phone: '+91 98765 43210'
  },
  {
    id: 3,
    type: "Parent's Home",
    icon: Heart,
    isDefault: false,
    recipient: 'Mrs. Lakshmi',
    line1: '45, Lakshmi Nagar, Saravanampatti,',
    line2: 'Coimbatore - 641035,',
    state: 'Tamil Nadu, India',
    phone: '+91 98765 43210'
  }
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(initialSavedAddresses);
  const [showAddModal, setShowAddModal] = useState(false);

  const [formData, setFormData] = useState({
    addressType: '',
    fullName: '',
    mobileNumber: '',
    addressText: '',
    city: '',
    pincode: '',
    setAsDefault: false
  });

  // Listen for custom event fired from mobile header button
  useEffect(() => {
    const handleOpenModal = () => setShowAddModal(true);
    window.addEventListener('open-add-address-modal', handleOpenModal);
    return () => window.removeEventListener('open-add-address-modal', handleOpenModal);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDeliverHere = (id) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id
      }))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.addressText) return;

    const newAddr = {
      id: Date.now(),
      type: formData.addressType || 'Home',
      icon: formData.addressType === 'Work' ? Briefcase : formData.addressType === "Parent's Home" ? Heart : Home,
      isDefault: formData.setAsDefault || addresses.length === 0,
      recipient: formData.fullName,
      line1: formData.addressText,
      line2: `${formData.city} ${formData.pincode ? '- ' + formData.pincode : ''}`,
      state: 'Tamil Nadu, India',
      phone: formData.mobileNumber ? `+91 ${formData.mobileNumber}` : '+91 98765 43210'
    };

    if (newAddr.isDefault) {
      setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: false })));
    }

    setAddresses((prev) => [...prev, newAddr]);

    setFormData({
      addressType: '',
      fullName: '',
      mobileNumber: '',
      addressText: '',
      city: '',
      pincode: '',
      setAsDefault: false
    });

    setShowAddModal(false);
  };

  return (
    <div className="addresses-page-wrapper">
      {/* Desktop Header */}
      <div className="addresses-desktop-header desktop-only">
        <h1>My Addresses</h1>
        <p>Manage your saved addresses for a seamless delivery experience.</p>
      </div>

      <div className="addresses-grid-container">
        {/* Left Column: Top Banner + Saved Addresses */}
        <div className="addresses-left-column">
          {/* Top Banner */}
          <div className="addresses-top-banner">
            <div className="banner-left-content">
              <div className="banner-icon-box">
                <MapPin size={22} />
              </div>
              <div className="banner-text-info">
                <h3>Deliver to the right place</h3>
                <p>Manage your addresses for a seamless delivery experience.</p>
              </div>
            </div>
            <div className="banner-map-graphic">
              <MapPin size={90} color="#16a34a" />
            </div>
          </div>

          {/* Section Title */}
          <div className="section-title-row">
            <h2>Saved Addresses ({addresses.length})</h2>
          </div>

          {/* Saved Address Cards List */}
          <div className="addresses-list">
            {addresses.map((addr) => (
              <AddressCard
                key={addr.id}
                address={addr}
                onDeliverHere={handleDeliverHere}
              />
            ))}
          </div>

          {/* Security Banner */}
          <div className="security-banner-card">
            <div className="security-left">
              <div className="security-icon-box">
                <ShieldCheck size={22} />
              </div>
              <div className="security-text">
                <h4>Secure & Reliable</h4>
                <p>Your addresses are saved securely and used only for deliveries.</p>
              </div>
            </div>
          </div>

          {/* Mobile Bottom CTA Button */}
          <div className="mobile-add-address-cta mobile-only">
            <button
              className="mobile-add-address-btn"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={18} />
              <span>Add New Address</span>
            </button>
          </div>
        </div>

        {/* Right Column: Desktop Permanent Add Address Form */}
        <div className="addresses-right-column desktop-only-flex" id="add-address-section">
          <div className="add-address-card">
            <h3 className="form-header-title">Add New Address</h3>
            <p className="form-header-desc">
              Fill in the details to add a new delivery address.
            </p>
            <AddAddressForm
              formData={formData}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      {/* Mobile Slide-Up Modal Sheet */}
      <AddAddressModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
