import React from 'react';
import { Camera, CheckCircle2, Mail, Phone, Calendar, Edit3 } from 'lucide-react';
import { currentUser } from '../../../../config/userProfile';

export default function ProfileUserCard({ onEditProfile }) {
  return (
    <div className="profile-user-card">
      <div className="user-card-left">
        {/* User Photo with Camera Badge */}
        <div className="profile-avatar-box">
          <img src={currentUser.avatar} alt={currentUser.name} className="user-avatar-image" />
          <button className="camera-badge-btn" title="Change Profile Picture">
            <Camera size={13} color="#16a34a" />
          </button>
        </div>

        {/* User Details */}
        <div className="user-details-box">
          <div className="user-name-row">
            <h2 className="user-display-name">{currentUser.name}</h2>
            <span className="verified-status-pill">
              <CheckCircle2 size={13} fill="#16a34a" color="#ffffff" />
              <span>Verified</span>
            </span>
          </div>

          <div className="user-contact-info-list">
            <div className="contact-info-item">
              <Mail size={14} className="contact-icon" />
              <span>{currentUser.email}</span>
            </div>
            <div className="contact-info-item">
              <Phone size={14} className="contact-icon" />
              <span>{currentUser.phone}</span>
            </div>
            <div className="contact-info-item desktop-only-flex">
              <Calendar size={14} className="contact-icon" />
              <span>Member since {currentUser.memberSince || 'May 2024'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Leaf Illustration & Edit Profile Button */}
      <div className="user-card-right">
        {/* Leaf SVG Graphic Art */}
        <div className="decorative-leaf-art" aria-hidden="true">
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 80C40 80 55 50 45 25C35 0 10 10 10 10C10 10 5 35 20 60C35 85 40 80 40 80Z" fill="#16a34a" fillOpacity="0.18" />
            <path d="M75 85C75 85 85 45 70 20C55 -5 30 5 30 5C30 5 30 30 50 60C70 90 75 85 75 85Z" fill="#16a34a" fillOpacity="0.25" />
            <path d="M95 85C95 85 105 55 95 35C85 15 65 25 65 25C65 25 60 45 75 68C90 91 95 85 95 85Z" fill="#16a34a" fillOpacity="0.15" />
            <path d="M40 80L45 25" stroke="#16a34a" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M75 85L70 20" stroke="#16a34a" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <button className="edit-profile-btn desktop-only" onClick={onEditProfile}>
          <Edit3 size={15} />
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}
