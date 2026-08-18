import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProfileUserCard from './components/ProfileUserCard';
import ProfileOrdersOverview from './components/ProfileOrdersOverview';
import ProfileAccountSettings from './components/ProfileAccountSettings';
import ProfileMobilePromoBanner from './components/ProfileMobilePromoBanner';
import ProfileLogoutModal from './components/ProfileLogoutModal';

import './ProfilePage.css';

/**
 * ProfilePage Component
 * Route: /buy/profile
 * 
 * Implements the uploaded My Profile & Settings design:
 * - Desktop: Page title header, user card with leaf graphic, 4 order stats, 2-column settings grid
 * - Mobile: Minimal custom header, user card, 4 stats side-by-side, 1-column settings list, bottom promo banner
 */
export default function ProfilePage() {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    navigate('/auth/login');
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-page-container">
        
        {/* Desktop Page Title Banner */}
        <div className="profile-desktop-header desktop-only">
          <h1 className="profile-page-title">My Profile</h1>
          <p className="profile-page-subtitle">Manage your account details and preferences</p>
        </div>

        {/* 1. User Info Card */}
        <ProfileUserCard onEditProfile={() => alert('Edit Profile clicked')} />

        {/* 2. My Orders Overview Card */}
        <ProfileOrdersOverview />

        {/* 3. Account Settings Card */}
        <ProfileAccountSettings onTriggerLogout={() => setIsLogoutModalOpen(true)} />

        {/* 4. Mobile Bottom Promo Banner */}
        <ProfileMobilePromoBanner />

      </div>

      {/* Log Out Confirmation Modal */}
      <ProfileLogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}
