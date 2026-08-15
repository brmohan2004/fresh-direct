import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

/**
 * ForgotPasswordForm Component
 * Renders the email input field & submission CTA.
 */
export default function ForgotPasswordForm({ email, setEmail, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="reference-form">
      <div className="form-field">
        <label>Email Address</label>
        <div className="input-box">
          <Mail size={18} className="field-icon" />
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className="primary-submit-btn">
        <span>Send Reset Instructions</span>
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
