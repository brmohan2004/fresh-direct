import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/**
 * AuthLayout
 * Layout wrapper for authentication routes (/auth/login, /auth/signup, etc.)
 */
export default function AuthLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f6f8' }}>
      <header style={{ padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#16a34a' }}>
          FarmDirect Auth
        </div>
        <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup">Signup</Link>
          <Link to="/auth/mode-selection">Mode Selection</Link>
        </nav>
      </header>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', textAlign: 'center', fontSize: '0.85rem', color: '#6b7280', background: '#fff', borderTop: '1px solid #e5e7eb' }}>
        &copy; {new Date().getFullYear()} FarmDirect. All rights reserved.
      </footer>
    </div>
  );
}
