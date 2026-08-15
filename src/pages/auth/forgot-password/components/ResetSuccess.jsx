import React from 'react';
import { CheckCircle2 } from 'lucide-react';

/**
 * ResetSuccess Component
 * Displays success message and redirect button after reset link dispatch.
 */
export default function ResetSuccess({ email, onBackToSignIn }) {
  return (
    <div className="reset-success-box">
      <div className="success-icon-circle">
        <CheckCircle2 size={36} color="#16a34a" />
      </div>
      <h2>Check Your Email</h2>
      <p>
        We have sent password reset instructions to <strong>{email}</strong>.
      </p>
      <button
        type="button"
        className="primary-submit-btn"
        onClick={onBackToSignIn}
      >
        Back to Sign In
      </button>
    </div>
  );
}
