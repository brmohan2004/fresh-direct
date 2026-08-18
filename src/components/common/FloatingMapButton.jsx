import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Map, ChevronRight, X, ArrowLeft } from 'lucide-react';
import './FloatingMapButton.css';

/**
 * FloatingMapButton Component
 * - On Home Page (/buy/home, /): "View Farmers" quick action pill
 * - On Map Page (/buy/farmers): "Exit Map" button
 * - On All Other Pages: Hidden (returns null)
 */
export default function FloatingMapButton() {
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isFarmersMapPage = location.pathname.includes('/buy/farmers');
  const isHomePage =
    location.pathname === '/' ||
    location.pathname === '/buy' ||
    location.pathname === '/buy/home';

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // While scrolling downwards, hide the button
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        // When scrolling upwards, show the button
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;

      // Auto-show button when user stops scrolling
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsHidden(false);
      }, 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // If not on Home page and not on Map page, do not show the floating button
  if (!isHomePage && !isFarmersMapPage) {
    return null;
  }

  // On Farmers Map View Page: Render Exit Button
  if (isFarmersMapPage) {
    return (
      <button
        type="button"
        className={`floating-map-btn exit-mode ${isHidden ? 'hidden-on-scroll' : ''}`}
        onClick={() => navigate('/buy/home')}
        aria-label="Exit Map"
        title="Back to Shop"
      >
        <div className="map-btn-left-circle exit-circle">
          <X size={20} className="map-btn-icon" />
        </div>

        <div className="map-btn-text-group">
          <span className="map-btn-main-title">Exit Map</span>
          <span className="map-btn-sub-title">Back to Shop</span>
        </div>

        <div className="map-btn-right-arrow exit-arrow">
          <ArrowLeft size={18} />
        </div>
      </button>
    );
  }

  // On Home Page: Render View Farmers Button
  return (
    <button
      type="button"
      className={`floating-map-btn ${isHidden ? 'hidden-on-scroll' : ''}`}
      onClick={() => navigate('/buy/farmers')}
      aria-label="View Farmers Map"
      title="View Nearby Farmers"
    >
      <div className="map-btn-left-circle">
        <Map size={20} className="map-btn-icon" />
      </div>

      <div className="map-btn-text-group">
        <span className="map-btn-main-title">View Farmers</span>
        <span className="map-btn-sub-title">Explore on map</span>
      </div>

      <div className="map-btn-right-arrow">
        <ChevronRight size={18} />
      </div>
    </button>
  );
}
