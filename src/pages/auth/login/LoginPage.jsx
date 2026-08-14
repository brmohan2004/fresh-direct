import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Leaf, Users, Truck, ChevronLeft } from 'lucide-react';
import heroImg from '../../../assets/image.png';

/**
 * LoginPage Component
 * Perfectly matched to Desktop and Mobile reference screenshots:
 * - Mobile: Top farm illustration banner with back button & FarmDirect brand logo, overlapping rounded white bottom sheet card, single-column touch inputs, social buttons, and green action link.
 * - Desktop: Dual-pane split view with farm illustration & feature highlights on the left, white card on the right.
 */
export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/buy/home');
  };

  return (
    <div className="auth-page-container">
      {/* Mobile Top Hero Header Banner (Visible on mobile screens) */}
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

      {/* Desktop Left Hero Pane (Visible on Desktop screens) */}
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
            Fresh. Natural. <span className="text-green">Direct to You.</span>
          </h1>
          <p className="hero-desc">
            Join FarmDirect and enjoy farm-fresh produce delivered straight to your doorstep.
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

      {/* Form Pane (Bottom Sheet Card on Mobile, Right Pane on Desktop) */}
      <div className="auth-form-pane">
        <div className="auth-form-card">
          <div className="auth-card-header">
            <h2>Sign In</h2>
            <p>Sign in and enjoy fresh produce from farms</p>
          </div>

          <form onSubmit={handleSubmit} className="reference-form">
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

          <div className="divider-text">
            <span>or sign in with</span>
          </div>

          <div className="social-login-grid">
            <button type="button" className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Google</span>
            </button>

            <button type="button" className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.37-.58.67-1.09 1.74-.95 2.77 1.01.08 2.04-.54 2.67-1.29z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <div className="bottom-redirect-row">
            <span>Don't have an account?</span>
            <Link to="/auth/signup" className="green-link">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
