import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  HelpCircle,
  Bell,
  ChevronRight,
  LogOut,
  ShieldCheck,
  Edit3,
  Mail,
  Phone,
  AlertTriangle
} from 'lucide-react';
import { currentUser } from '../../../config/userProfile';
import './ProfilePage.css';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Perform logout cleanup if needed
    navigate('/auth/login');
  };

  const menuSections = [
    {
      title: 'Order & Activity',
      items: [
        {
          id: 'orders',
          label: 'My Orders',
          subLabel: 'Track, return, or re-order items',
          icon: ShoppingBag,
          path: '/buy/orders',
          badge: '2 active'
        },
        {
          id: 'wishlist',
          label: 'My Wishlist',
          subLabel: 'Saved produce & items',
          icon: Heart,
          path: '/buy/wishlist'
        },
        {
          id: 'addresses',
          label: 'Saved Addresses',
          subLabel: 'Manage home & work addresses',
          icon: MapPin,
          path: '/buy/addresses'
        }
      ]
    },
    {
      title: 'Account & Support',
      items: [
        {
          id: 'notifications',
          label: 'Notifications',
          subLabel: 'Order updates & offers',
          icon: Bell,
          path: '/buy/notifications'
        },
        {
          id: 'help',
          label: 'Help & Support',
          subLabel: 'FAQs, contact us, and chat support',
          icon: HelpCircle,
          path: '/buy/help-support'
        }
      ]
    }
  ];

  return (
    <div className="profile-page-wrapper">
      <div className="profile-page-container">
        
        {/* Profile Hero Header Card */}
        <div className="profile-hero-card">
          <div className="profile-hero-content">
            <div className="avatar-wrapper">
              <img src={currentUser.avatar} alt={currentUser.name} className="profile-avatar-img" />
              <button className="avatar-edit-btn" title="Change Avatar">
                <Edit3 size={13} />
              </button>
            </div>

            <div className="profile-main-info">
              <div className="name-badge-row">
                <h1 className="profile-name">{currentUser.name}</h1>
                <span className="verified-badge">
                  <ShieldCheck size={13} /> Verified Buyer
                </span>
              </div>

              <div className="profile-meta-chips">
                <span className="meta-chip">
                  <Mail size={13} />
                  {currentUser.email}
                </span>
                <span className="meta-chip">
                  <Phone size={13} />
                  {currentUser.phone}
                </span>
              </div>
            </div>
          </div>

          <button className="edit-profile-btn" onClick={() => alert('Edit Profile clicked')}>
            <Edit3 size={15} />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="profile-stats-grid">
          <div className="stat-card" onClick={() => navigate('/buy/orders')}>
            <div className="stat-icon-box green">
              <ShoppingBag size={20} />
            </div>
            <div className="stat-info">
              <span className="stat-val">24</span>
              <span className="stat-lbl">Total Orders</span>
            </div>
          </div>

          <div className="stat-card" onClick={() => navigate('/buy/wishlist')}>
            <div className="stat-icon-box red">
              <Heart size={20} />
            </div>
            <div className="stat-info">
              <span className="stat-val">6</span>
              <span className="stat-lbl">Saved Wishlist</span>
            </div>
          </div>

          <div className="stat-card" onClick={() => navigate('/buy/addresses')}>
            <div className="stat-icon-box blue">
              <MapPin size={20} />
            </div>
            <div className="stat-info">
              <span className="stat-val">2</span>
              <span className="stat-lbl">Saved Addresses</span>
            </div>
          </div>
        </div>

        {/* Settings & Navigation Sections */}
        <div className="profile-menu-sections">
          {menuSections.map((section, idx) => (
            <div key={idx} className="menu-section-card">
              <h3 className="section-title">{section.title}</h3>
              <div className="menu-items-list">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="menu-item-row"
                      onClick={() => navigate(item.path)}
                    >
                      <div className="menu-item-left">
                        <div className="menu-icon-box">
                          <Icon size={18} />
                        </div>
                        <div className="menu-text">
                          <span className="menu-label">{item.label}</span>
                          <span className="menu-sublabel">{item.subLabel}</span>
                        </div>
                      </div>

                      <div className="menu-item-right">
                        {item.badge && <span className="menu-badge">{item.badge}</span>}
                        <ChevronRight size={18} className="menu-arrow" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Prominent Log Out Action Section */}
          <div className="menu-section-card logout-section">
            <button className="logout-action-btn" onClick={() => setShowLogoutModal(true)}>
              <div className="logout-btn-left">
                <div className="logout-icon-box">
                  <LogOut size={18} />
                </div>
                <div className="logout-text">
                  <span className="logout-label">Log Out</span>
                  <span className="logout-sublabel">Sign out from your FarmDirect account</span>
                </div>
              </div>
              <ChevronRight size={18} className="logout-arrow" />
            </button>
          </div>
        </div>

      </div>

      {/* Log Out Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal-overlay" onClick={() => setShowLogoutModal(false)}>
          <div className="logout-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-warning-icon">
              <AlertTriangle size={28} />
            </div>
            <h3 className="modal-title">Log Out of FarmDirect?</h3>
            <p className="modal-desc">
              Are you sure you want to log out? You will need to sign back in to access your orders, cart, and wishlist.
            </p>
            <div className="modal-actions">
              <button className="modal-cancel-btn" onClick={() => setShowLogoutModal(false)}>
                Cancel
              </button>
              <button className="modal-confirm-btn" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Yes, Log Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
