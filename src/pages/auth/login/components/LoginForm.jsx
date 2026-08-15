import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

/**
 * LoginForm Component
 * Handles the email and password inputs along with form submission.
 */
export default function LoginForm({
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  handleSubmit,
  errorMsg
}) {
  return (
    <form onSubmit={handleSubmit} className="reference-form">
      {errorMsg && (
        <div style={{
          background: '#fef2f2',
          border: '1px solid #fca5a5',
          color: '#dc2626',
          borderRadius: '0.6rem',
          padding: '0.5rem 0.75rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>
          {errorMsg}
        </div>
      )}

      {/* Email Address */}
      <div className="form-field">
        <label>Email Address</label>
        <div className="input-box">
          <Mail size={18} className="field-icon" />
          <input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="form-field">
        <div className="field-label-row">
          <label>Password</label>
          <Link to="/auth/forgot-password" style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 500 }}>
            Forgot password?
          </Link>
        </div>
        <div className="input-box">
          <Lock size={18} className="field-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button
            type="button"
            className="eye-toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <button type="submit" className="primary-submit-btn">
        Sign In
      </button>
    </form>
  );
}
