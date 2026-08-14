import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, ShoppingBag, User, ShoppingCart } from 'lucide-react';

/**
 * BottomNav Component
 * Mobile-only bottom navigation bar
 */
export default function BottomNav() {
  const items = [
    { label: 'Home', path: '/buy/home', icon: Home },
    { label: 'Categories', path: '/buy/categories', icon: Grid },
    { label: 'Products', path: '/buy/products', icon: ShoppingBag },
    { label: 'Farmers', path: '/buy/farmers', icon: User },
    { label: 'Cart', path: '/buy/cart', icon: ShoppingCart },
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
