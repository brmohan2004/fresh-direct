import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import BottomNav from '../components/common/BottomNav';

/**
 * BuyLayout Component
 * Multi-device Layout System:
 * - Separate Header component
 * - Desktop (> 1024px): Side Navigation Bar in OPEN state
 * - Tablet (641px - 1024px): Side Navigation Bar CLOSED (Icon mode / expandable via 3-line hamburger menu in Header)
 * - Mobile (<= 640px): Fixed Bottom Navigation Bar
 */
export default function BuyLayout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="layout-root">
      {/* Separate Header */}
      <Header onToggleSidebar={toggleSidebar} />

      {/* Main Body Shell (Sidebar + Content) */}
      <div className="layout-body">
        {/* Responsive Side Navigation */}
        <Sidebar
          isOpen={sidebarExpanded}
          onClose={() => setSidebarExpanded(false)}
        />

        {/* Content View */}
        <main className="layout-content">
          <Outlet />
        </main>
      </div>

      {/* Mobile-only Bottom Navigation Bar */}
      <BottomNav />
    </div>
  );
}
