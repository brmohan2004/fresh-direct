import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Users, Truck, ChevronLeft } from 'lucide-react';
import heroImg from '../../../assets/image.png';
import '../auth.css';
import './Signup.css';

import SignupHeader from './components/SignupHeader';
import SignupForm from './components/SignupForm';
import SocialLogin from '../login/components/SocialLogin';

/**
 * SignupPage Component
 * Multi-device responsive authentication page using subcomponents.
 */
export default function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/login');
  };

  return (
    <div className="auth-page-container">
      {/* Mobile Top Hero Banner */}
      <div className="mobile-auth-banner">
        <img src={heroImg} alt="Farm Background" className="mobile-banner-img" />
        <div className="mobile-banner-overlay" />
        
        <button
          type="button"
          className="mobile-back-btn"
          onClick={() => navigate('/auth/login')}
          aria-label="Back to Sign In"
        >
          <ChevronLeft size={20} color="#111827" />
        </button>

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

      {/* Form Pane */}
      <div className="auth-form-pane">
        <div className="auth-form-card signup-card-wide">
          <SignupHeader />

          <SignupForm
            formData={formData}
            setFormData={setFormData}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
            handleSubmit={handleSubmit}
          />

          <SocialLogin />

          <div className="bottom-redirect-row">
            <span>Already have an account?</span>
            <Link to="/auth/login" className="green-link">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
