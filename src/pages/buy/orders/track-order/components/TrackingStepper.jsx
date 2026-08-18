import React from 'react';
import { CheckCircle2, Truck, Package, Home, Clock } from 'lucide-react';
import './TrackingStepper.css';

const steps = [
  {
    id: 1,
    title: 'Order Confirmed',
    time: '02:15 PM, Today',
    desc: 'Order #FD-94820 verified & assigned to farm.',
    icon: CheckCircle2,
    status: 'completed'
  },
  {
    id: 2,
    title: 'Harvested & Packed',
    time: '03:00 PM, Today',
    desc: 'Picked fresh from Sunrise Organic Farm.',
    icon: Package,
    status: 'completed'
  },
  {
    id: 3,
    title: 'Out for Delivery',
    time: '04:10 PM, Today',
    desc: 'Ramesh Kumar is on the way to your doorstep.',
    icon: Truck,
    status: 'active'
  },
  {
    id: 4,
    title: 'Delivered',
    time: 'Est. 04:45 PM',
    desc: 'Handed over at Indiranagar, Bengaluru.',
    icon: Home,
    status: 'pending'
  }
];

export default function TrackingStepper() {
  return (
    <div className="tracking-stepper-card">
      <div className="stepper-header-title">
        <Clock size={18} className="clock-icon" />
        <h3>Delivery Progress</h3>
      </div>

      <div className="stepper-timeline">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isCompleted = step.status === 'completed';
          const isActive = step.status === 'active';

          return (
            <div key={step.id} className={`timeline-step-item ${step.status}`}>
              {/* Left Connector Bar */}
              <div className="step-indicator-column">
                <div className="step-node-badge">
                  <StepIcon size={16} />
                </div>
                {idx < steps.length - 1 && (
                  <div className={`step-connector-line ${isCompleted ? 'line-completed' : ''}`} />
                )}
              </div>

              {/* Step Content Info */}
              <div className="step-info-body">
                <div className="step-top-row">
                  <h4 className="step-title-text">{step.title}</h4>
                  <span className="step-time-text">{step.time}</span>
                </div>
                <p className="step-desc-text">{step.desc}</p>
                {isActive && (
                  <div className="live-status-pill">
                    <span className="live-dot" />
                    <span>In Transit • Live Location Active</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
