import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

/**
 * AuthLayout Component
 * Responsive layout for authentication pages (/auth/*)
 */
export default function AuthLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb' }}>
      <header style={{ background: '#ffffff', borderBottom: '1px solid var(--border)', padding: '1rem var(--page-padding)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/buy/home" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={24} />
            <span>FarmDirect Auth</span>
          </Link>
          <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <Link to="/auth/login" style={{ color: 'var(--text-main)' }}>Login</Link>
            <Link to="/auth/signup" style={{ color: 'var(--primary)' }}>Signup</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--page-padding)' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>
          <Outlet />
        </div>
      </main>

      <footer style={{ background: '#ffffff', borderTop: '1px solid var(--border)', padding: '1rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        &copy; {new Date().getFullYear()} FarmDirect. All rights reserved.
      </footer>
    </div>
  );
}
