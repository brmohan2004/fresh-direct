import React from 'react';
import { CreditCard, Smartphone, Wallet, Banknote, ChevronRight } from 'lucide-react';
import './PaymentMethodSelector.css';

/**
 * PaymentMethodSelector Component
 * Selection list for checkout payment options (UPI, Cards, Wallets, Cash on Delivery)
 */
export default function PaymentMethodSelector({ selectedPayment, onSelectPayment }) {
  const paymentOptions = [
    {
      id: 'upi-card',
      title: 'UPI / Cards',
      subtitle: 'Visa, MasterCard, RuPay, etc.',
      icon: CreditCard
    },
    {
      id: 'upi',
      title: 'UPI',
      subtitle: 'Pay using any UPI app',
      icon: Smartphone
    },
    {
      id: 'wallets',
      title: 'Wallets',
      subtitle: 'Pay using PhonePe, Paytm, etc.',
      icon: Wallet
    },
    {
      id: 'cod',
      title: 'Cash on Delivery',
      subtitle: 'Pay when your order is delivered',
      icon: Banknote
    }
  ];

  return (
    <div className="checkout-card payment-methods-card">
      <div className="card-top-title-row">
        <h3>Payment Methods</h3>
      </div>

      <div className="payment-methods-list">
        {paymentOptions.map((option) => {
          const IconComp = option.icon;
          const isSelected = selectedPayment === option.id;

          return (
            <div
              key={option.id}
              className={`payment-method-item ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectPayment(option.id)}
            >
              <div className="payment-left-cell">
                <div className="radio-circle">
                  {isSelected && <div className="radio-inner-dot" />}
                </div>
                <div className="payment-icon-box">
                  <IconComp size={20} />
                </div>
                <div className="payment-text-info">
                  <h4>{option.title}</h4>
                  <p>{option.subtitle}</p>
                </div>
              </div>
              <ChevronRight size={18} className="arrow-right-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
