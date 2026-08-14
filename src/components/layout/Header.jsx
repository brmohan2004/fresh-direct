import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, Search, Bell, ShoppingCart } from 'lucide-react';

/**
 * Header Component
 * Top app bar containing logo, toggle button for tablet sidebar, search bar, and action icons.
 */
export default function Header({ onToggleSidebar }) {
  return (
    <header className="app-header">
      <div className="header-left">
        {/* Toggle Button for Tablet Sidebar (Hamburger 3 horizontal lines) */}
        <button
          className="sidebar-toggle-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={22} />
        </button>

        <NavLink to="/buy/home" className="header-logo">
          <ShoppingBag size={24} color="#16a34a" />
          <span className="logo-text">FarmDirect</span>
        </NavLink>
      </div>

      <div className="header-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search fresh vegetables, fruits..." />
      </div>

      <div className="header-actions">
        <NavLink to="/buy/notifications" className="action-btn" title="Notifications">
          <Bell size={20} />
        </NavLink>
        <NavLink to="/buy/cart" className="action-btn cart-btn" title="Cart">
          <ShoppingCart size={20} />
          <span className="cart-badge">3</span>
        </NavLink>
      </div>
    </header>
  );
}
