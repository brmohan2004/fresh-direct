import React from 'react';
import { Check } from 'lucide-react';
import './CheckoutProgressStepper.css';

/**
 * CheckoutProgressStepper Component
 * 4-Step Checkout Progress Stepper (Cart -> Address -> Payment -> Review)
 */
export default function CheckoutProgressStepper({ currentStep = 2 }) {
  const steps = [
    { number: 1, label: 'Cart' },
    { number: 2, label: 'Address' },
    { number: 3, label: 'Payment' },
    { number: 4, label: 'Review' }
  ];

  return (
    <div className="checkout-stepper">
      <div className="stepper-line" />
      {steps.map((step) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;

        return (
          <div
            key={step.number}
            className={`stepper-step-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
          >
            <div className="step-circle">
              {isCompleted ? <Check size={16} /> : step.number}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
        );
      })}
    </div>
  );
}
