import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Headphones } from 'lucide-react';
import OrderTrackingStepper from './components/OrderTrackingStepper';
import OrderAddressCard from './components/OrderAddressCard';
import OrderSummaryCard from './components/OrderSummaryCard';
import OrderItemsListCard from './components/OrderItemsListCard';
import OrderHelpGuaranteesCard from './components/OrderHelpGuaranteesCard';
import './OrderDetailsPage.css';

// Asset Images
import prodTomatoes from '../../../../assets/prod_tomatoes.png';
import prodCucumbers from '../../../../assets/prod_cucumbers.png';
import prodSpinach from '../../../../assets/prod_spinach.png';

export default function OrderDetailsPage() {
  const navigate = useNavigate();

  const orderId = 'FD1234567890';
  const orderDate = '12 May 2026, 10:30 AM';

  const addressData = {
    name: 'Priya S.',
    tag: 'Home',
    street: '123, Green Valley Layout, Peelamedu, Coimbatore - 641004, Tamil Nadu, India',
    phone: '+91 98765 43210'
  };

  const summaryData = {
    subtotal: 58,
    deliveryFee: 20,
    discount: 10,
    total: 68
  };

  const orderItems = [
    {
      id: 1,
      name: 'Tomato',
      weight: '1 kg',
      price: 32,
      quantity: 1,
      image: prodTomatoes
    },
    {
      id: 2,
      name: 'Cucumber',
      weight: '500 g',
      price: 16,
      quantity: 1,
      image: prodCucumbers
    },
    {
      id: 3,
      name: 'Spinach',
      weight: '250 g',
      price: 10,
      quantity: 1,
      image: prodSpinach
    }
  ];

  const handleBuyAgain = () => {
    navigate('/buy/cart');
  };

  const handleChatSupport = () => {
    navigate('/buy/help-support');
  };

  return (
    <div className="order-details-wrapper">
      <div className="order-details-container">
        
        {/* Desktop-only Page Inner Header Bar */}
        <div className="desktop-page-inner-header desktop-only">
          <div className="desktop-header-left">
            <button className="desktop-back-btn" onClick={() => navigate('/buy/orders')}>
              <ArrowLeft size={16} />
              <span>Back to Orders</span>
            </button>
            <h1 className="desktop-page-title">Order Details</h1>
          </div>

          <button className="desktop-support-btn" onClick={handleChatSupport}>
            <Headphones size={15} />
            <span>Support</span>
          </button>
        </div>

        {/* Component 1: Delivery Tracking & Stepper */}
        <OrderTrackingStepper orderId={orderId} date={orderDate} />

        {/* Section 2: 2-Column Main Details Grid */}
        <div className="details-layout-grid">
          
          {/* Left Column */}
          <div className="details-left-col">
            {/* Component 2: Delivery Address */}
            <OrderAddressCard address={addressData} />

            {/* Component 3: Order Summary */}
            <OrderSummaryCard summary={summaryData} />
          </div>

          {/* Right Column */}
          <div className="details-right-col">
            {/* Component 4: Order Items List */}
            <OrderItemsListCard items={orderItems} onBuyAgain={handleBuyAgain} />
          </div>

        </div>

        {/* Component 5: Need Help & Guarantees Bar */}
        <OrderHelpGuaranteesCard onChatSupport={handleChatSupport} />

      </div>
    </div>
  );
}
