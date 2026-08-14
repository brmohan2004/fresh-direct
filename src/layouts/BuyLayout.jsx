import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/**
 * BuyLayout
 * Layout wrapper for consumer pages (/buy/*)
 * Features fluid sizing, auto-adapting grids, and multi-device navigation header.
 */
export default function BuyLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Responsive Navigation Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', sticky: 'top', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/buy/home" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#16a34a' }}>
            FarmDirect
          </Link>
          
          <nav style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
            <Link to="/buy/home">Home</Link>
            <Link to="/buy/categories">Categories</Link>
            <Link to="/buy/products">Products</Link>
            <Link to="/buy/farmers">Farmers</Link>
            <Link to="/buy/cart">Cart</Link>
            <Link to="/buy/orders">Orders</Link>
            <Link to="/buy/profile">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '1rem 0' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ background: '#1f2937', color: '#fff', padding: '2rem 1rem', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h4 style={{ color: '#16a34a', marginBottom: '0.5rem' }}>FarmDirect</h4>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Fresh produce direct from local farmers to consumers.</p>
          </div>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>&copy; {new Date().getFullYear()} FarmDirect Consumer Portal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
