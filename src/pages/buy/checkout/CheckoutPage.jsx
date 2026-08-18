import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronDown } from 'lucide-react';
import tomatoImg from '../../../assets/prod_tomatoes.png';
import cucumberImg from '../../../assets/prod_cucumbers.png';
import spinachImg from '../../../assets/prod_spinach.png';

// Modular Sub-Components
import CheckoutProgressStepper from './components/CheckoutProgressStepper';
import DeliveryAddressCard from './components/DeliveryAddressCard';
import CheckoutOrderItems from './components/CheckoutOrderItems';
import PaymentMethodSelector from './components/PaymentMethodSelector';
import PriceDetailsSummary from './components/PriceDetailsSummary';
import CheckoutExitReasonModal from './components/CheckoutExitReasonModal';
import './CheckoutPage.css';

const initialCartItems = [
  { id: 1, name: 'Tomato', weight: '1 kg', price: 32, qty: 1, img: tomatoImg },
  { id: 2, name: 'Cucumber', weight: '500 g', price: 16, qty: 1, img: cucumberImg },
  { id: 3, name: 'Spinach', weight: '250 g', price: 10, qty: 1, img: spinachImg }
];

/**
 * CheckoutPage Component
 * Route: /buy/checkout
 * Modularized into 6 sub-components:
 * 1. CheckoutProgressStepper
 * 2. DeliveryAddressCard
 * 3. CheckoutOrderItems
 * 4. PaymentMethodSelector
 * 5. PriceDetailsSummary
 * 6. CheckoutExitReasonModal
 */
export default function CheckoutPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialCartItems);
  const [selectedPayment, setSelectedPayment] = useState('upi-card');
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenExitModal = () => {
      setIsExitModalOpen(true);
    };

    window.addEventListener('open-checkout-exit-modal', handleOpenExitModal);
    return () => {
      window.removeEventListener('open-checkout-exit-modal', handleOpenExitModal);
    };
  }, []);

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = subtotal > 0 ? 20 : 0;
  const discount = subtotal > 0 ? 10 : 0;
  const totalAmount = Math.max(0, subtotal + deliveryFee - discount);

  return (
    <div className="checkout-page-wrapper">
      {/* 4-Step Progress Stepper */}
      <CheckoutProgressStepper currentStep={2} />

      {/* Main Responsive Grid Layout */}
      <div className="checkout-grid-container">
        {/* Left Column: Delivery Address & Order Items */}
        <div className="checkout-column">
          <DeliveryAddressCard />
          <CheckoutOrderItems
            items={items}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
            discount={discount}
          />
        </div>

        {/* Right Column: Payment Methods & Price Details */}
        <div className="checkout-column">
          <PaymentMethodSelector
            selectedPayment={selectedPayment}
            onSelectPayment={setSelectedPayment}
          />
          <PriceDetailsSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            discount={discount}
            totalAmount={totalAmount}
          />
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="checkout-fixed-bottom-bar">
        <button
          className="back-to-cart-btn"
          onClick={() => setIsExitModalOpen(true)}
          title="Back to Cart"
          aria-label="Back to Cart"
        >
          <ArrowLeft size={18} />
          <span className="back-btn-label">Back</span>
        </button>

        <div className="sticky-total-info desktop-only">
          <span className="sticky-total-label">Total Amount</span>
          <span className="sticky-total-value">₹{totalAmount}</span>
          <span className="view-details-link">
            View Price Details <ChevronDown size={12} />
          </span>
        </div>

        <button
          className="place-order-cta-btn"
          onClick={() => navigate('/buy/orders')}
        >
          <span>Place Order</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>₹{totalAmount}</span>
            <div className="btn-arrow-circle">
              <ChevronRight size={16} />
            </div>
          </div>
        </button>
      </div>

      {/* Exit Reason Modal when back button is clicked */}
      <CheckoutExitReasonModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
      />
    </div>
  );
}
