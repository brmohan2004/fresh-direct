import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MapPin, Search, Bell, User, ChevronDown, Leaf, SlidersHorizontal, X } from 'lucide-react';
import './Header.css';

/**
 * Header Component
 * Multi-device responsive top bar:
 * - Desktop & Tablet: Centered Search Bar remains fully intact at all times while scrolling.
 * - Mobile: Row 2 search bar liquid-collapses while scrolling, morphing to search icon left of notification.
 * - Reduced compact search bar and refined header icon sizes.
 */
export default function Header({ onToggleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Scroll Hysteresis Buffer to eliminate threshold flickering on mobile
          if (currentScrollY > 70) {
            setIsScrolled(true);
          } else if (currentScrollY < 20) {
            setIsScrolled(false);
            setIsSearchOpen(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleScrolledSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <header className={`app-header ${isScrolled ? 'header-scrolled' : ''} ${isSearchOpen ? 'search-expanded' : ''}`}>
      {/* Main Top Header Row */}
      <div className="header-top-row">
        {/* Left Section: Logo & Location Picker */}
        <div className="header-left">
          <button
            className="sidebar-toggle-btn"
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <Menu size={20} />
          </button>

          <NavLink to="/buy/home" className="header-logo desktop-logo">
            <div className="header-logo-icon">
              <Leaf size={16} color="#ffffff" fill="#ffffff" />
            </div>
            <span className="logo-text">Farm<span className="logo-highlight">Direct</span></span>
          </NavLink>

          <div className="header-location">
            <MapPin size={15} className="location-pin-icon" />
            <div className="location-info">
              <span className="location-label">Deliver to</span>
              <span className="location-value">Bengaluru, 560001</span>
            </div>
            <ChevronDown size={13} className="location-arrow" />
          </div>
        </div>

        {/* Center Section: Search Bar (Desktop & Tablet - Compact height) */}
        <div className="header-center desktop-only">
          <div className="header-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search fresh vegetables, fruits, dairy..."
            />
            <button type="button" className="header-filter-btn" aria-label="Filters">
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="header-right">
          {/* Mobile-only Scrolled Compact Liquid Search Icon Button */}
          <button
            type="button"
            className={`action-btn scrolled-search-btn mobile-only ${isScrolled ? 'visible' : ''} ${isSearchOpen ? 'active' : ''}`}
            onClick={toggleScrolledSearch}
            title={isSearchOpen ? 'Close Search' : 'Search'}
            aria-label="Toggle Search"
          >
            {isSearchOpen ? <X size={18} /> : <Search size={18} />}
          </button>

          <NavLink to="/buy/notifications" className="action-btn" title="Notifications">
            <Bell size={18} />
            <span className="notification-badge" />
          </NavLink>

          <NavLink to="/buy/profile" className="action-btn profile-action-btn" title="Profile">
            <User size={18} />
          </NavLink>
        </div>
      </div>

      {/* Mobile Row 2: Search Bar with Filter Button (Mobile View with Liquid Collapse) */}
      <div className={`mobile-header-search-row mobile-only ${isScrolled && !isSearchOpen ? 'collapsed' : ''}`}>
        <div className="header-search liquid-search-bar">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search fresh vegetables, fruits, dairy..."
          />
          <button type="button" className="header-filter-btn" aria-label="Filters">
            <SlidersHorizontal size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
