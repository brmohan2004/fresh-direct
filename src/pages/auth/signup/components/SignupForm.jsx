import React from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

/**
 * SignupForm Component
 * Renders full name, email, phone, password fields, terms checkbox and submit button.
 */
export default function SignupForm({
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit} className="reference-form">
      {/* Desktop Two-Column Row for Name & Email */}
      <div className="form-row-2col">
        <div className="form-field">
          <label>Full Name</label>
          <div className="input-box">
            <User size={18} className="field-icon" />
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>
        </div>

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
      </div>

      {/* Phone Number */}
      <div className="form-field">
        <label>Phone Number</label>
        <div className="input-box">
          <Phone size={18} className="field-icon" />
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="form-field">
        <label>Password</label>
        <div className="input-box">
          <Lock size={18} className="field-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a password"
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

      {/* Confirm Password */}
      <div className="form-field">
        <label>Confirm Password</label>
        <div className="input-box">
          <Lock size={18} className="field-icon" />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
          <button
            type="button"
            className="eye-toggle-btn"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Terms & Conditions Checkbox */}
      <div className="terms-checkbox-row">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
            required
          />
          <span className="checkbox-text">
            I agree to the <a href="#terms" className="green-text">Terms & Conditions</a> and <a href="#privacy" className="green-text">Privacy Policy</a>
          </span>
        </label>
      </div>

      <button type="submit" className="primary-submit-btn">
        Sign Up
      </button>
    </form>
  );
}
