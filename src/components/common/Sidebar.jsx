import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Grid, ShoppingBag, User, ShoppingCart, Heart, Package, HelpCircle, Settings } from 'lucide-react';
import './Sidebar.css';

/**
 * Sidebar Component
 * - Desktop: Always open
 * - Tablet: Collapsed by default (icon-only or overlay toggled via hamburger)
 */
export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  if (
    location.pathname.includes('/buy/checkout') ||
    location.pathname.includes('/buy/payment')
  ) {
    return null;
  }
  const mainNav = [
    { label: 'Home', path: '/buy/home', icon: Home },
    { label: 'Categories', path: '/buy/categories', icon: Grid },
    { label: 'Products', path: '/buy/products', icon: ShoppingBag },
    { label: 'Farmers', path: '/buy/farmers', icon: User },
    { label: 'Cart', path: '/buy/cart', icon: ShoppingCart },
    { label: 'Wishlist', path: '/buy/wishlist', icon: Heart },
    { label: 'My Orders', path: '/buy/orders', icon: Package },
  ];

  const secondaryNav = [
    { label: 'Profile', path: '/buy/profile', icon: Settings },
    { label: 'Help & Support', path: '/buy/help-support', icon: HelpCircle },
  ];

  return (
    <>
      {/* Mobile/Tablet Backdrop overlay when expanded */}
      <div
        className={`sidebar-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />

      <aside className={`app-sidebar ${isOpen ? 'expanded' : ''}`}>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Navigation</div>
          <nav className="sidebar-nav">
            {mainNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`
                  }
                  onClick={onClose}
                >
                  <Icon size={20} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-section" style={{ marginTop: 'auto' }}>
          <div className="sidebar-section-title">Account</div>
          <nav className="sidebar-nav">
            {secondaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`
                  }
                  onClick={onClose}
                >
                  <Icon size={20} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
