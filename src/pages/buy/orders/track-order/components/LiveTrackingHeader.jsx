import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Headphones, ShieldCheck } from 'lucide-react';
import './LiveTrackingHeader.css';

export default function LiveTrackingHeader({ orderId = 'FD-94820' }) {
  const navigate = useNavigate();

  return (
    <div className="mobile-track-floating-header mobile-only">
      <button
        type="button"
        className="track-float-btn"
        onClick={() => navigate(-1)}
        aria-label="Go back"
        title="Go back"
      >
        <ArrowLeft size={18} />
      </button>

      <div className="track-header-title-badge">
        <ShieldCheck size={14} className="shield-icon" />
        <span className="order-id-label">Tracking Order #{orderId}</span>
      </div>

      <button
        type="button"
        className="track-float-btn help-btn"
        onClick={() => navigate('/buy/help-support')}
        aria-label="Help & Support"
        title="Help & Support"
      >
        <Headphones size={18} />
      </button>
    </div>
  );
}
