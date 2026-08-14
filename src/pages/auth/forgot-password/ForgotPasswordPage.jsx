import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle2, Leaf, Users, Truck, ArrowLeft } from 'lucide-react';
import heroImg from '../../../assets/image.png';

/**
 * ForgotPasswordPage Component
 * Adheres to the established desktop & mobile responsive authentication design system:
 * - Desktop: Dual-pane view with farm illustration and value highlights on the left, clean recovery card on the right.
 * - Mobile: Top farm hero header banner, overlapping rounded white bottom sheet card, email input, OTP/reset dispatch CTA, & Return to Sign In link.
 */
export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="auth-page-container">
      {/* Mobile Top Hero Header Banner */}
      <div className="mobile-auth-banner">
        <img src={heroImg} alt="Farm Background" className="mobile-banner-img" />
        <div className="mobile-banner-overlay" />

        <div className="mobile-brand-box">
          <div className="mobile-logo-icon">
            <Leaf size={24} color="#16a34a" fill="#16a34a" />
          </div>
          <span className="mobile-brand-name">Farm<span className="brand-highlight">Direct</span></span>
          <span className="mobile-brand-sub">Fresh From Farm to You</span>
        </div>
      </div>

      {/* Desktop Left Hero Pane */}
      <div className="auth-hero-pane">
        <div className="hero-top-brand">
          <div className="brand-logo-row">
            <div className="logo-icon-wrapper">
              <Leaf size={24} color="#16a34a" fill="#16a34a" />
            </div>
            <span className="brand-title">Farm<span className="brand-highlight">Direct</span></span>
          </div>
          <p className="brand-tagline">Fresh From Farm to You</p>
        </div>

        <div className="hero-main-info">
          <h1 className="hero-heading">
            Reset Password. <span className="text-green">Direct Support.</span>
          </h1>
          <p className="hero-desc">
            We will send a password reset link or verification code straight to your registered email.
          </p>

          <div className="hero-feature-list">
            <div className="feature-row">
              <div className="feature-icon-circle">
                <Leaf size={20} color="#16a34a" />
              </div>
              <div className="feature-text">
                <h4>100% Fresh Produce</h4>
                <p>Carefully selected from trusted farms</p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon-circle">
                <Users size={20} color="#16a34a" />
              </div>
              <div className="feature-text">
                <h4>Trusted by Thousands</h4>
                <p>Join our growing community of happy customers</p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon-circle">
                <Truck size={20} color="#16a34a" />
              </div>
              <div className="feature-text">
                <h4>Fast & Reliable Delivery</h4>
                <p>Fresh produce delivered to your door</p>
              </div>
            </div>
          </div>
        </div>

        <img src={heroImg} alt="Farm Landscape" className="hero-bg-art" />
      </div>

      {/* Form Pane */}
      <div className="auth-form-pane">
        <div className="auth-form-card">
          {!submitted ? (
            <>
              <div className="auth-card-header">
                <h2>Forgot Password?</h2>
                <p>No worries! Enter your registered email address below to receive password recovery instructions.</p>
              </div>

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
            </>
          ) : (
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
                onClick={() => navigate('/auth/login')}
              >
                Back to Sign In
              </button>
            </div>
          )}

          <div className="bottom-redirect-row" style={{ marginTop: '0.5rem' }}>
            <Link to="/auth/login" className="green-link" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <ArrowLeft size={16} />
              <span>Return to Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
