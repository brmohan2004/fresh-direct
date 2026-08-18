import React from 'react';
import { Check, Package, Bike, Home } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Order Confirmed',
    subtitle: '12 May 2024, 09:41 AM',
    status: 'completed',
    icon: Check
  },
  {
    id: 2,
    title: 'Payment Successful',
    subtitle: '12 May 2024, 09:41 AM',
    status: 'completed',
    icon: Check
  },
  {
    id: 3,
    title: 'Order Packed',
    subtitle: 'We will notify you once your order is packed',
    status: 'current',
    icon: Package
  },
  {
    id: 4,
    title: 'Out for Delivery',
    subtitle: 'Your order will be delivered soon',
    status: 'pending',
    icon: Bike
  },
  {
    id: 5,
    title: 'Delivered',
    subtitle: 'Enjoy your fresh and healthy products!',
    status: 'pending',
    icon: Home
  }
];

export default function PaymentSidebarNextSteps() {
  return (
    <div className="payment-sidebar-card next-steps-sidebar-card">
      <h3 className="sidebar-card-title">What's Next?</h3>

      <div className="steps-timeline">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === steps.length - 1;

          return (
            <div key={step.id} className={`timeline-item ${step.status}`}>
              <div className="timeline-left">
                <div className={`step-icon-circle ${step.status}`}>
                  <Icon size={14} strokeWidth={2.5} />
                </div>
                {!isLast && <div className={`timeline-line ${step.status === 'completed' ? 'active-line' : ''}`} />}
              </div>

              <div className="timeline-right">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-subtitle">{step.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
