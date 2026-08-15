import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, MapPin, Search, ChevronDown, Leaf, SlidersHorizontal, X, ArrowLeft, Plus, Check, Headphones } from 'lucide-react';
import userAvatar from '../../assets/image.png';
import './Header.css';

/**
 * Helper to map route pathnames to friendly page titles
 */
const getPageTitle = (pathname) => {
  if (pathname.includes('/buy/categories')) return 'Categories';
  if (pathname.includes('/buy/products')) return 'Products';
  if (pathname.includes('/buy/product-details')) return 'Product Details';
  if (pathname.includes('/buy/farmers')) return 'Farmers';
  if (pathname.includes('/buy/farmer-profile')) return 'Farmer Profile';
  if (pathname.includes('/buy/search')) return 'Search';
  if (pathname.includes('/buy/cart')) return 'My Cart';
  if (pathname.includes('/buy/checkout')) return 'Checkout';
  if (pathname.includes('/buy/payment')) return 'Payment';
  if (pathname.includes('/buy/orders')) return 'My Orders';
  if (pathname.includes('/buy/wishlist')) return 'Wishlist';
  if (pathname.includes('/buy/notifications')) return 'Notifications';
  if (pathname.includes('/buy/profile')) return 'My Profile';
  if (pathname.includes('/buy/addresses')) return 'Addresses';
  if (pathname.includes('/buy/help-support')) return 'Help & Support';
  return 'FarmDirect';
};

const initialSavedAddresses = [
  { id: 1, label: 'Home', address: 'Bengaluru, 560001', tag: 'Primary' },
  { id: 2, label: 'Work', address: 'Indiranagar, Bengaluru - 560038', tag: '' },
  { id: 3, label: 'Parents', address: 'Jayanagar, Bengaluru - 560041', tag: '' }
];

export default function Header({ onToggleSidebar, categorySearchQuery = '', onCategorySearchChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAddressDropdownOpen, setIsAddressDropdownOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(initialSavedAddresses[0]);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/buy/home' || location.pathname === '/';
  const isCategoriesPage = location.pathname === '/buy/categories';
  const isWishlistPage = location.pathname.includes('/buy/wishlist');
  const isOrdersPage = location.pathname === '/buy/orders';
  const isOrderDetailsPage = location.pathname.includes('/buy/orders/order-details');
  const isCartPage = location.pathname.includes('/buy/cart');
  const isProfilePage = location.pathname.includes('/buy/profile');
  const pageTitle = isOrderDetailsPage ? 'Order Details' : getPageTitle(location.pathname);

  const hideSearch = isCartPage || isProfilePage || isOrderDetailsPage;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAddressDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleScrolledSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearchInput = (e) => {
    if ((isCategoriesPage || isWishlistPage || isOrdersPage) && onCategorySearchChange) {
      onCategorySearchChange(e.target.value);
    }
  };

  const currentSearchValue = (isCategoriesPage || isWishlistPage || isOrdersPage) ? categorySearchQuery : undefined;
  const searchPlaceholder = isCategoriesPage
    ? "Search categories or products..."
    : isWishlistPage
    ? "Search wishlist items..."
    : isOrdersPage
    ? "Search your orders or items..."
    : "Search fresh vegetables, fruits, dairy...";

  return (
    <header className={`app-header ${isScrolled ? 'header-scrolled' : ''} ${isSearchOpen ? 'search-expanded' : ''}`}>
      {/* Main Top Header Row */}
      <div className="header-top-row">
        {/* Left Section: Logo & Location (Home) / Page Title (Other pages) */}
        <div className="header-left">
          {/* Mobile Back Button for Order Details & Profile Page */}
          {(isProfilePage || isOrderDetailsPage) && (
            <button
              className={`header-back-btn ${isOrderDetailsPage ? 'mobile-only' : ''}`}
              onClick={() => navigate(-1)}
              aria-label="Go Back"
              title="Go Back"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {/* Sidebar Menu Toggle */}
          {(!isProfilePage || isOrderDetailsPage) && (
            <button
              className={`sidebar-toggle-btn ${isOrderDetailsPage ? 'desktop-only' : ''}`}
              onClick={onToggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <Menu size={20} />
            </button>
          )}

          <NavLink to="/buy/home" className="header-logo desktop-logo">
            <div className="header-logo-icon">
              <Leaf size={16} color="#ffffff" fill="#ffffff" />
            </div>
            <span className="logo-text">Farm<span className="logo-highlight">Direct</span></span>
          </NavLink>

          {isHomePage ? (
            <div className="location-wrapper" ref={dropdownRef}>
              <div
                className={`header-location ${isAddressDropdownOpen ? 'active' : ''}`}
                onClick={() => setIsAddressDropdownOpen((prev) => !prev)}
              >
                <MapPin size={15} className="location-pin-icon" />
                <div className="location-info">
                  <span className="location-label">Deliver to</span>
                  <span className="location-value">{selectedAddress.address}</span>
                </div>
                <ChevronDown size={13} className={`location-arrow ${isAddressDropdownOpen ? 'rotated' : ''}`} />
              </div>

              {/* Saved Address Dropdown Popup */}
              {isAddressDropdownOpen && (
                <div className="address-dropdown-menu">
                  <div className="address-dropdown-header">
                    <span>Select Delivery Address</span>
                    <button
                      className="add-address-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAddressDropdownOpen(false);
                        navigate('/buy/addresses');
                      }}
                      title="Add New Address"
                    >
                      <Plus size={14} />
                      <span>Add New</span>
                    </button>
                  </div>

                  <div className="address-items-list">
                    {initialSavedAddresses.map((item) => (
                      <div
                        key={item.id}
                        className={`address-dropdown-item ${selectedAddress.id === item.id ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedAddress(item);
                          setIsAddressDropdownOpen(false);
                        }}
                      >
                        <MapPin size={16} className="item-pin" />
                        <div className="item-details">
                          <div className="item-title-row">
                            <span className="item-label">{item.label}</span>
                            {item.tag && <span className="item-tag">{item.tag}</span>}
                          </div>
                          <span className="item-address-text">{item.address}</span>
                        </div>
                        {selectedAddress.id === item.id && <Check size={16} className="check-icon" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={`header-categories-title ${isOrderDetailsPage ? 'mobile-order-details-title' : ''}`}>
              <h1>{pageTitle}</h1>
            </div>
          )}
        </div>

        {/* Center Section: Search Bar (Desktop & Tablet) - Hidden on Cart, Profile & Order Details Pages */}
        {!hideSearch && (
          <div className="header-center desktop-only">
            <div className="header-search">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={currentSearchValue}
                onChange={handleSearchInput}
              />
              <button type="button" className="header-filter-btn" aria-label="Filters">
                <SlidersHorizontal size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Right Section: Actions */}
        <div className="header-right">
          {/* Support Button for Order Details Page on Mobile Header */}
          {isOrderDetailsPage && (
            <button
              className="header-support-pill-btn mobile-only"
              onClick={() => navigate('/buy/help-support')}
            >
              <Headphones size={15} />
              <span>Support</span>
            </button>
          )}

          {/* Mobile-only Scrolled Compact Liquid Search Icon Button */}
          {!hideSearch && (
            <button
              type="button"
              className={`action-btn scrolled-search-btn mobile-only ${isScrolled ? 'visible' : ''} ${isSearchOpen ? 'active' : ''}`}
              onClick={toggleScrolledSearch}
              title={isSearchOpen ? 'Close Search' : 'Search'}
              aria-label="Toggle Search"
            >
              {isSearchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          )}

          {!isProfilePage && (
            <NavLink
              to="/buy/profile"
              className={`header-user-avatar-link ${isOrderDetailsPage ? 'desktop-only' : ''}`}
              title="Profile"
            >
              <img src={userAvatar} alt="User Avatar" className="header-user-avatar-img" />
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Row 2: Search Bar with Filter Button - Hidden on Cart & Profile Pages */}
      {!hideSearch && (
        <div className={`mobile-header-search-row mobile-only ${isScrolled && !isSearchOpen ? 'collapsed' : ''}`}>
          <div className="header-search liquid-search-bar">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={currentSearchValue}
              onChange={handleSearchInput}
            />
            <button type="button" className="header-filter-btn" aria-label="Filters">
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
