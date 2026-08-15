import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Users, Truck } from 'lucide-react';
import heroImg from '../../../assets/image.png';
import '../auth.css';
import './Login.css';

import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';

/**
 * LoginPage Component
 * Multi-device responsive authentication page using subcomponents.
 */
export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    email: 'abcd123@gmail.com',
    password: 'abcd123',
    rememberMe: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      navigate('/buy/home');
    } else {
      setErrorMsg('Please enter valid email and password.');
    }
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
        <div className="auth-form-card">
          <LoginHeader />

          <LoginForm
            formData={formData}
            setFormData={setFormData}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSubmit={handleSubmit}
            errorMsg={errorMsg}
          />

          <SocialLogin />

          <div className="bottom-redirect-row">
            <span>Don't have an account?</span>
            <Link to="/auth/signup" className="green-link">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
