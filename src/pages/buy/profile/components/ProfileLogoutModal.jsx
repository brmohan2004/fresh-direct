import React from 'react';
import { AlertTriangle, LogOut } from 'lucide-react';

export default function ProfileLogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="logout-modal-overlay" onClick={onClose}>
      <div className="logout-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-warning-icon">
          <AlertTriangle size={28} />
        </div>
        <h3 className="modal-title">Log Out of FarmDirect?</h3>
        <p className="modal-desc">
          Are you sure you want to log out? You will need to sign back in to access your orders, cart, and wishlist.
        </p>
        <div className="modal-actions">
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-confirm-btn" onClick={onConfirm}>
            <LogOut size={16} />
            <span>Yes, Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
