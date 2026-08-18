import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, MapPin, Search, ChevronDown, Leaf, SlidersHorizontal, X, ArrowLeft, Plus, Check, Headphones, Settings } from 'lucide-react';
import userAvatar from '../../assets/image.png';
import FilterDropUpSheet from './FilterDropUpSheet';
import './Header.css';

/**
 * Helper to map route pathnames to friendly page titles
 */
const getPageTitle = (pathname, searchString = '') => {
  if (pathname.includes('/buy/categories')) return 'Categories';
  if (pathname.includes('/buy/products')) {
    const params = new URLSearchParams(searchString);
    const searchQuery = params.get('search');
    const category = params.get('category');
    const seeAll = params.get('seeAll') === 'true';

    if (searchQuery && searchQuery.trim()) {
      return `Search: "${searchQuery}"`;
    }
    if (category && category !== 'all') {
      const categoryTitles = {
        vegetables: 'Fresh Vegetables',
        organic: '100% Organic Produce',
        fruits: 'Fresh Fruits',
        herbs: 'Herbs & Spices',
        dairy: 'Dairy & Eggs'
      };
      return categoryTitles[category.toLowerCase()] || `${category.charAt(0).toUpperCase() + category.slice(1)} Produce`;
    }
    if (seeAll) {
      return 'All Farm Produce';
    }
    return 'Fresh Farm Produce';
  }
  if (pathname.includes('/buy/product-details')) return 'Product Details';
  if (pathname.includes('/buy/farmers')) return 'Farmers';
  if (pathname.includes('/buy/farmer-profile')) return 'Farmer Profile';
  if (pathname.includes('/buy/search')) return 'Search';
  if (pathname.includes('/buy/cart')) return 'My Cart';
  if (pathname.includes('/buy/checkout')) return 'Checkout';
  if (pathname.includes('/buy/payment')) return 'Payment';
  if (pathname.includes('/buy/orders/track-order')) return 'Track Order';
  if (pathname.includes('/buy/orders/order-details')) return 'Order Details';
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
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [headerSearchText, setHeaderSearchText] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(initialSavedAddresses[0]);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/buy/home' || location.pathname === '/';
  const isCategoriesPage = location.pathname === '/buy/categories';
  const isWishlistPage = location.pathname.includes('/buy/wishlist');
  const isOrdersPage = location.pathname === '/buy/orders';
  const isOrderDetailsPage = location.pathname.includes('/buy/orders/order-details');
  const isTrackOrderPage = location.pathname.includes('/buy/orders/track-order');
  const isCartPage = location.pathname.includes('/buy/cart');
  const isProfilePage = location.pathname.includes('/buy/profile');
  const isAddressesPage = location.pathname.includes('/buy/addresses');
  const isCheckoutPage = location.pathname.includes('/buy/checkout');
  const isFarmerProfilePage = location.pathname.includes('/buy/farmer-profile');
  const isProductDetailsPage = location.pathname.includes('/buy/product-details');
  const isPaymentPage = location.pathname.includes('/buy/payment');

  const pageTitle = isOrderDetailsPage ? 'Order Details' : isTrackOrderPage ? 'Track Order' : isAddressesPage ? 'My Addresses' : isPaymentPage ? 'Payment Confirm' : isProfilePage ? 'My Profile' : getPageTitle(location.pathname, location.search);

  const hideSearch = isCartPage || isProfilePage || isOrderDetailsPage || isTrackOrderPage || isAddressesPage || isCheckoutPage || isPaymentPage;

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
    const val = e.target.value;
    setHeaderSearchText(val);
    if ((isCategoriesPage || isWishlistPage || isOrdersPage) && onCategorySearchChange) {
      onCategorySearchChange(val);
    }
  };

  const handleHeaderSearchSubmit = () => {
    if (headerSearchText.trim()) {
      navigate(`/buy/products?search=${encodeURIComponent(headerSearchText.trim())}`);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleHeaderSearchSubmit();
    }
  };

  const handleApplyFilters = (filterData) => {
    const params = new URLSearchParams();
    if (filterData.category && filterData.category !== 'all') {
      params.set('category', filterData.category);
    }
    if (filterData.sort && filterData.sort !== 'relevance') {
      params.set('sort', filterData.sort);
    }
    navigate(`/buy/products?${params.toString()}`);
  };

  const handleBackButtonClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/buy/orders');
    }
  };

  const currentSearchValue = (isCategoriesPage || isWishlistPage || isOrdersPage) ? categorySearchQuery : headerSearchText;
  const searchPlaceholder = isCategoriesPage
    ? "Search categories or products..."
    : isWishlistPage
      ? "Search wishlist items..."
      : isOrdersPage
        ? "Search your orders or items..."
        : "Search fresh vegetables, fruits, dairy...";

  const isHeaderTyping = (currentSearchValue || headerSearchText || '').trim().length > 0;

  if (location.pathname === '/buy/farmers' || location.pathname.includes('/buy/farmers')) {
    return null;
  }

  if (isCheckoutPage) {
    return (
      <header className="app-header checkout-minimal-header">
        <div className="header-top-row checkout-header-row">
          <div className="header-logo" style={{ cursor: 'default' }}>
            <div className="header-logo-icon">
              <Leaf size={18} color="#ffffff" fill="#ffffff" />
            </div>
            <span className="logo-text">Farm<span className="logo-highlight">Direct</span></span>
          </div>
        </div>
      </header>
    );
  }

  if (isPaymentPage || isProfilePage || isAddressesPage) {
    return (
      <header className="app-header payment-custom-header">
        {/* Mobile Header: Back button, Page title, Action button (No common search/location) */}
        <div className="header-top-row mobile-only" style={{ justifyContent: 'space-between' }}>
          <div className="header-left">
            <button
              className="header-back-btn"
              type="button"
              onClick={handleBackButtonClick}
              aria-label="Go Back"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="header-categories-title show-always">
              <h1>
                {isAddressesPage
                  ? 'My Addresses'
                  : isProfilePage
                    ? 'My Profile'
                    : 'Payment Confirm'}
              </h1>
            </div>
          </div>
          <div className="header-right">
            {isAddressesPage ? (
              <button
                className="header-support-pill-btn"
                onClick={() => window.dispatchEvent(new CustomEvent('open-add-address-modal'))}
              >
                <Plus size={15} />
                <span>Add Address</span>
              </button>
            ) : isProfilePage ? (
              <button
                className="header-support-pill-btn"
                onClick={() => alert('Settings opened')}
              >
                <Settings size={15} />
                <span>Settings</span>
              </button>
            ) : isPaymentPage ? (
              <button
                className="header-support-pill-btn"
                onClick={() => navigate('/buy/help-support')}
              >
                <Headphones size={15} />
                <span>Help</span>
              </button>
            ) : null}
          </div>
        </div>

        {/* Desktop Header: Logo/App Name, Search Bar, Profile */}
        <div className="header-top-row desktop-only" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto' }}>
          <div className="header-left">
            <NavLink to="/buy/home" className="header-logo">
              <div className="header-logo-icon">
                <Leaf size={16} color="#ffffff" fill="#ffffff" />
              </div>
              <span className="logo-text">Farm<span className="logo-highlight">Direct</span></span>
            </NavLink>
          </div>

          <div className="header-center">
            <div className="header-search">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search fresh vegetables, fruits, dairy..."
                value={currentSearchValue}
                onChange={handleSearchInput}
                onKeyDown={handleSearchKeyDown}
              />
              {isHeaderTyping ? (
                <button
                  type="button"
                  className="header-filter-btn search-active-btn"
                  aria-label="Search"
                  title="Search"
                  onClick={handleHeaderSearchSubmit}
                >
                  <Search size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  className="header-filter-btn"
                  aria-label="Filters"
                  onClick={() => setIsFilterSheetOpen(true)}
                >
                  <SlidersHorizontal size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="header-right">
            <NavLink to="/buy/profile" className="header-user-avatar-link" title="Profile">
              <img src={userAvatar} alt="User Avatar" className="header-user-avatar-img" />
            </NavLink>
          </div>
        </div>

        <FilterDropUpSheet
          isOpen={isFilterSheetOpen}
          onClose={() => setIsFilterSheetOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
      </header>
    );
  }

  return (
    <>
      <header className={`app-header ${isScrolled ? 'header-scrolled' : ''} ${isSearchOpen ? 'search-expanded' : ''} ${isFarmerProfilePage ? 'farmer-profile-header' : ''} ${isProductDetailsPage ? 'product-details-header' : ''}`}>
        {/* Main Top Header Row */}
        <div className="header-top-row">
          {/* Left Section: Logo & Location (Home) / Page Title (Other pages) */}
          <div className="header-left">
            {/* Back Button for Order Details, Track Order & Profile Page */}
            {(isProfilePage || isOrderDetailsPage || isTrackOrderPage) && (
              <button
                type="button"
                className="header-back-btn"
                onClick={handleBackButtonClick}
                aria-label="Go Back"
                title="Go Back"
              >
                <ArrowLeft size={20} />
              </button>
            )}

            {/* Sidebar Menu Toggle */}
            {(!isProfilePage && !isOrderDetailsPage && !isTrackOrderPage) && (
              <button
                className="sidebar-toggle-btn"
                onClick={onToggleSidebar}
                aria-label="Toggle Sidebar"
              >
                <Menu size={20} />
              </button>
            )}
            {(isOrderDetailsPage || isTrackOrderPage) && (
              <button
                className="sidebar-toggle-btn desktop-only"
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
                  title="Change Delivery Location"
                >
                  <div className="location-pin-badge">
                    <MapPin size={14} className="location-pin-icon" />
                  </div>
                  <span className="location-value">{selectedAddress.address}</span>
                  <ChevronDown size={14} className={`location-arrow ${isAddressDropdownOpen ? 'rotated' : ''}`} />
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
              <div className={`header-categories-title ${(isOrderDetailsPage || isTrackOrderPage) ? 'show-always' : ''}`}>
                <h1>{pageTitle}</h1>
              </div>
            )}
          </div>

          {/* Center Section: Search Bar (Desktop & Tablet) */}
          {!hideSearch && (
            <div className="header-center desktop-only">
              <div className="header-search">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={currentSearchValue}
                  onChange={handleSearchInput}
                  onKeyDown={handleSearchKeyDown}
                />
                {isHeaderTyping ? (
                  <button
                    type="button"
                    className="header-filter-btn search-active-btn"
                    aria-label="Search"
                    title="Search"
                    onClick={handleHeaderSearchSubmit}
                  >
                    <Search size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="header-filter-btn"
                    aria-label="Filters"
                    onClick={() => setIsFilterSheetOpen(true)}
                  >
                    <SlidersHorizontal size={16} />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Right Section: Actions */}
          <div className="header-right">
            {/* Support Button for Order Details & Track Order Pages */}
            {(isOrderDetailsPage || isTrackOrderPage) && (
              <button
                className="header-support-pill-btn"
                type="button"
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
                className={`header-user-avatar-link ${(isOrderDetailsPage || isTrackOrderPage) ? 'desktop-only' : ''}`}
                title="Profile"
              >
                <img src={userAvatar} alt="User Avatar" className="header-user-avatar-img" />
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile Row 2: Search Bar with Filter Button */}
        {!hideSearch && (
          <div className={`mobile-header-search-row mobile-only ${isScrolled && !isSearchOpen ? 'collapsed' : ''}`}>
            <div className="header-search liquid-search-bar">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={currentSearchValue}
                onChange={handleSearchInput}
                onKeyDown={handleSearchKeyDown}
              />
              {isHeaderTyping ? (
                <button
                  type="button"
                  className="header-filter-btn search-active-btn"
                  aria-label="Search"
                  title="Search"
                  onClick={handleHeaderSearchSubmit}
                >
                  <Search size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  className="header-filter-btn"
                  aria-label="Filters"
                  onClick={() => setIsFilterSheetOpen(true)}
                >
                  <SlidersHorizontal size={16} />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Global Filter Drop-Up Sheet */}
      <FilterDropUpSheet
        isOpen={isFilterSheetOpen}
        onClose={() => setIsFilterSheetOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
}
