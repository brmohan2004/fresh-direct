import React from 'react';
import { Outlet } from 'react-router-dom';
import '../pages/auth/auth.css';

/**
 * AuthLayout Component
 * Wraps login, signup, forgot password, mode selection pages in a full-screen responsive view.
 * Desktop: Dual pane split layout or centered shell.
 * Mobile: Clean full-width container without nested overflow.
 */
export default function AuthLayout() {
  return (
    <div className="auth-layout-root">
      <Outlet />
    </div>
  );
}
