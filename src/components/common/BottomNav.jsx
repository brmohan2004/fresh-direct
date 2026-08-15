import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingCart, Package, Heart } from 'lucide-react';
import './BottomNav.css';

/**
 * BottomNav Component (Mobile Nav Bar)
 * Mobile-only bottom navigation bar:
 * - Home (/buy/home)
 * - Categories (/buy/categories)
 * - Cart (/buy/cart)
 * - My Orders (/buy/orders)
 * - Wishlist (/buy/wishlist)
 */
export default function BottomNav() {
  const items = [
    { label: 'Home', path: '/buy/home', icon: Home },
    { label: 'Categories', path: '/buy/categories', icon: LayoutGrid },
    { label: 'Cart', path: '/buy/cart', icon: ShoppingCart },
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
            <Icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
