import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  MapPin,
  CreditCard,
  Heart,
  Bell,
  Headphones,
  ShieldCheck,
  FileText,
  Users,
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function ProfileAccountSettings({ onTriggerLogout }) {
  const navigate = useNavigate();

  const settingsList = [
    {
      id: 'personal',
      title: 'Personal Information',
      desc: 'Manage your personal details',
      icon: User,
      action: () => alert('Personal Information feature opened')
    },
    {
      id: 'addresses',
      title: 'Addresses',
      desc: 'Add or manage delivery addresses',
      icon: MapPin,
      action: () => navigate('/buy/addresses')
    },
    {
      id: 'payments',
      title: 'Payment Methods',
      desc: 'Manage your saved payment methods',
      icon: CreditCard,
      action: () => navigate('/buy/checkout')
    },
    {
      id: 'wishlist',
      title: 'My Wishlist',
      desc: 'View items you\'ve saved',
      icon: Heart,
      action: () => navigate('/buy/wishlist')
    },
    {
      id: 'notifications',
      title: 'Notifications',
      desc: 'Manage your notification preferences',
      icon: Bell,
      action: () => navigate('/buy/notifications')
    },
    {
      id: 'help',
      title: 'Help & Support',
      desc: 'Get help and contact support',
      icon: Headphones,
      action: () => navigate('/buy/help-support')
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      desc: 'Read our privacy policy',
      icon: ShieldCheck,
      action: () => alert('Privacy Policy opened')
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      desc: 'Read our terms and conditions',
      icon: FileText,
      desktopOnly: true,
      action: () => alert('Terms & Conditions opened')
    },
    {
      id: 'refer',
      title: 'Refer & Earn',
      desc: 'Invite your friends and earn rewards',
      icon: Users,
      desktopOnly: true,
      action: () => navigate('/buy/payment')
    },
    {
      id: 'logout',
      title: 'Log Out',
      desc: 'Sign out from your account',
      icon: LogOut,
      isDanger: true,
      action: onTriggerLogout
    }
  ];

  return (
    <div className="profile-account-settings-card">
      <h3 className="settings-card-title">Account Settings</h3>

      <div className="settings-grid-layout">
        {settingsList.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`setting-item-row ${item.isDanger ? 'danger-item' : ''} ${item.desktopOnly ? 'desktop-only-flex' : ''}`}
              onClick={item.action}
            >
              <div className="setting-left-cell">
                <div className={`setting-icon-badge ${item.isDanger ? 'danger-badge' : ''}`}>
                  <Icon size={18} className="setting-icon" />
                </div>
                <div className="setting-text-cell">
                  <h4 className="setting-item-title">{item.title}</h4>
                  <p className="setting-item-desc">{item.desc}</p>
                </div>
              </div>

              <ChevronRight size={18} className="setting-chevron-arrow" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
