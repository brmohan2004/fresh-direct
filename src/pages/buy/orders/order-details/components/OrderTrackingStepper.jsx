import React, { useState } from 'react';
import { Copy, Check, CheckCircle2, Clock, Truck, PackageCheck } from 'lucide-react';
import './OrderTrackingStepper.css';

export default function OrderTrackingStepper({
  orderId = 'FD1234567890',
  date = '12 May 2026, 10:30 AM'
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    { title: 'Order Placed', time: '10:30 AM', date: '12 May', icon: Check, completed: true },
    { title: 'Confirmed', time: '10:35 AM', date: '12 May', icon: Check, completed: true },
    { title: 'Out for Delivery', time: '04:15 PM', date: '12 May', icon: Truck, completed: true },
    { title: 'Delivered', time: '06:20 PM', date: '12 May', icon: PackageCheck, completed: true, active: true }
  ];

  return (
    <div className="stepper-card-sleek">
      {/* Top Minimal Info Header */}
      <div className="stepper-top-bar">
        <div className="stepper-order-meta">
          <div className="order-id-chip">
            <span className="chip-label">ORDER</span>
            <span className="chip-val">#{orderId}</span>
            <button
              className="copy-pill-btn"
              onClick={handleCopyId}
              title="Copy Order ID"
              aria-label="Copy Order ID"
            >
              {copied ? <Check size={13} color="#16a34a" /> : <Copy size={13} />}
            </button>
          </div>

          <div className="order-time-sub text-muted">
            <Clock size={13} className="inline-clock" />
            <span>Placed on {date}</span>
          </div>
        </div>

        <div className="sleek-status-badge">
          <span className="status-dot-pulse"></span>
          <span>Delivered</span>
        </div>
      </div>

      {/* Minimal Stepper Track */}
      <div className="sleek-stepper-wrapper">
        <div className="sleek-track-line">
          <div className="sleek-track-progress" style={{ width: '100%' }}></div>
        </div>

        <div className="sleek-steps-grid">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={idx}
                className={`sleek-step-item ${step.completed ? 'is-completed' : ''} ${step.active ? 'is-active' : ''}`}
              >
                <div className="sleek-node-circle">
                  <StepIcon size={14} />
                </div>
                <div className="sleek-step-details">
                  <span className="sleek-step-title">{step.title}</span>
                  <span className="sleek-step-time">{step.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
