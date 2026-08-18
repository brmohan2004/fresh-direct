import React, { useState } from 'react';
import { Navigation, MapPin, Clock, Compass, Layers, CheckCircle2 } from 'lucide-react';
import './LiveMapCard.css';

export default function LiveMapCard() {
  const [isSatellite, setIsSatellite] = useState(false);

  return (
    <div className={`live-map-card-container ${isSatellite ? 'satellite-mode' : ''}`}>
      {/* Top Floating ETA Badge */}
      <div className="map-eta-floating-badge">
        <div className="eta-live-pulse-dot" />
        <div className="eta-text-group">
          <span className="eta-main-time">18 Mins</span>
          <span className="eta-subtext">Arriving by 04:45 PM</span>
        </div>
      </div>

      {/* Top Right Map Control Buttons */}
      <div className="map-controls-group">
        <button
          type="button"
          className={`map-control-btn ${isSatellite ? 'active' : ''}`}
          onClick={() => setIsSatellite(!isSatellite)}
          title="Toggle Satellite View"
        >
          <Layers size={15} />
        </button>
        <button
          type="button"
          className="map-control-btn"
          onClick={() => alert('Recentered map view on delivery hero')}
          title="Recenter Map"
        >
          <Compass size={15} />
        </button>
      </div>

      {/* SVG Interactive Animated Map Canvas */}
      <div className="map-svg-viewport">
        <svg viewBox="0 0 800 420" className="map-svg-canvas" preserveAspectRatio="xMidYMid slice">
          {/* Background Grid & Roads */}
          <defs>
            <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(203, 213, 225, 0.3)" strokeWidth="1" />
            </pattern>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill={isSatellite ? '#0f172a' : '#f8fafc'} />
          <rect width="100%" height="100%" fill="url(#mapGrid)" />

          {/* Secondary Roads */}
          <path d="M 50 120 L 750 120" stroke={isSatellite ? '#334155' : '#e2e8f0'} strokeWidth="12" fill="none" />
          <path d="M 50 300 L 750 300" stroke={isSatellite ? '#334155' : '#e2e8f0'} strokeWidth="12" fill="none" />
          <path d="M 200 20 L 200 400" stroke={isSatellite ? '#334155' : '#e2e8f0'} strokeWidth="10" fill="none" />
          <path d="M 580 20 L 580 400" stroke={isSatellite ? '#334155' : '#e2e8f0'} strokeWidth="10" fill="none" />

          {/* Main Delivery Route Path */}
          <path
            id="deliveryRoutePath"
            d="M 120 120 Q 280 120 380 220 T 660 300"
            stroke="url(#routeGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="8 4"
            className="route-animated-line"
            fill="none"
          />

          {/* Sunrise Farm Origin Marker */}
          <g transform="translate(120, 120)">
            <circle r="18" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <circle r="6" fill="#16a34a" />
          </g>

          {/* Animated Delivery Partner Vehicle Marker */}
          <g className="delivery-hero-animated-marker" transform="translate(420, 240)">
            <circle r="24" fill="rgba(22, 163, 74, 0.2)" className="marker-radar-ping" />
            <circle r="18" fill="#16a34a" stroke="#ffffff" strokeWidth="3" />
            <Navigation size={16} color="#ffffff" transform="rotate(45)" />
          </g>

          {/* Buyer Destination Marker */}
          <g transform="translate(660, 300)">
            <circle r="22" fill="#ef4444" opacity="0.15" />
            <circle r="16" fill="#ef4444" stroke="#ffffff" strokeWidth="3" />
            <MapPin size={14} color="#ffffff" transform="translate(-7, -7)" />
          </g>
        </svg>

        {/* Map Location Tags */}
        <div className="map-location-tag origin-tag">
          <span>🌱 Sunrise Organic Farm</span>
        </div>
        <div className="map-location-tag dest-tag">
          <span>🏠 Home - Bengaluru</span>
        </div>
      </div>

      {/* Bottom Live Status Bar */}
      <div className="map-live-status-footer">
        <div className="status-metric">
          <Clock size={15} className="metric-icon" />
          <div>
            <span className="metric-label">Estimated Delivery</span>
            <strong className="metric-value">04:45 PM Today</strong>
          </div>
        </div>
        <div className="status-divider" />
        <div className="status-metric">
          <Navigation size={15} className="metric-icon" />
          <div>
            <span className="metric-label">Distance Left</span>
            <strong className="metric-value">2.4 km away</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
