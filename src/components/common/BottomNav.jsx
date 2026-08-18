import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingCart, Package, Heart } from 'lucide-react';
import './BottomNav.css';

/**
 * BottomNav Component (Mobile Nav Bar with Liquid Active Pill Animation)
 * - Active item expands into a pill badge with label on the right side of the icon
 * - Inactive items display as sleek icon-only buttons
 * - Cart tab features live cart items count badge
 */
export default function BottomNav({ cartCount = 5 }) {
  const location = useLocation();

  if (
    location.pathname.includes('/buy/checkout') ||
    location.pathname.includes('/buy/farmer-profile') ||
    location.pathname.includes('/buy/product-details') ||
    location.pathname.includes('/buy/payment') ||
    location.pathname.includes('/buy/profile') ||
    location.pathname.includes('/buy/addresses') ||
    location.pathname.includes('/buy/orders/track-order') ||
    location.pathname.includes('/buy/farmers')
  ) {
    return null;
  }

  const items = [
    { label: 'Home', path: '/buy/home', icon: Home },
    { label: 'Categories', path: '/buy/categories', icon: LayoutGrid },
    { label: 'Cart', path: '/buy/cart', icon: ShoppingCart, badge: cartCount },
    { label: 'My Orders', path: '/buy/orders', icon: Package },
    { label: 'Wishlist', path: '/buy/wishlist', icon: Heart },
  ];

  return (
    <nav className="mobile-bottom-nav">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `bottom-nav-item ${isActive ? 'active' : ''}`
            }
          >
            <div className="nav-icon-container">
              <Icon size={22} className="nav-icon" />
              {item.badge > 0 && (
                <span className="bottom-nav-badge">{item.badge}</span>
              )}
            </div>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
