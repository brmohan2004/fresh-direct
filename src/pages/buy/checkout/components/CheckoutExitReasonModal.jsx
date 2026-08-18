import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check } from 'lucide-react';
import './CheckoutExitReasonModal.css';

const exitReasons = [
  { id: 'cart-change', label: 'Modify cart items' },
  { id: 'address-change', label: 'Change delivery address' },
  { id: 'payment-issue', label: 'Payment option issue' },
  { id: 'delivery-fee', label: 'High delivery charges' },
  { id: 'browsing', label: 'Just exploring / Changed mind' },
  { id: 'other', label: 'Other reason' }
];

export default function CheckoutExitReasonModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState('cart-change');
  const [otherFeedback, setOtherFeedback] = useState('');

  if (!isOpen) return null;

  const handleConfirmExit = () => {
    onClose();
    navigate('/buy/cart');
  };

  return (
    <div className="minimal-modal-overlay" onClick={onClose}>
      <div className="minimal-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="minimal-modal-header">
          <div className="minimal-title-group">
            <h3>Leaving Checkout?</h3>
            <p>Tell us why you're leaving</p>
          </div>
          <button className="minimal-close-btn" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <div className="minimal-reasons-grid">
          {exitReasons.map((reason) => {
            const isSelected = selectedReason === reason.id;
            return (
              <button
                key={reason.id}
                type="button"
                className={`minimal-reason-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedReason(reason.id)}
              >
                <div className="chip-indicator">
                  {isSelected && <Check size={12} strokeWidth={3} />}
                </div>
                <span>{reason.label}</span>
              </button>
            );
          })}
        </div>

        {selectedReason === 'other' && (
          <div className="minimal-textarea-wrapper">
            <textarea
              placeholder="Tell us more (optional)..."
              value={otherFeedback}
              onChange={(e) => setOtherFeedback(e.target.value)}
              rows={2}
            />
          </div>
        )}

        <div className="minimal-modal-footer">
          <button className="minimal-stay-btn" onClick={onClose}>
            Stay in Checkout
          </button>
          <button className="minimal-leave-btn" onClick={handleConfirmExit}>
            Leave to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
