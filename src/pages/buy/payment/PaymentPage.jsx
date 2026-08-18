import React from 'react';
import PaymentSuccessHeader from './components/PaymentSuccessHeader';
import PaymentOrderInfoCard from './components/PaymentOrderInfoCard';
import PaymentFarmerSupportBanner from './components/PaymentFarmerSupportBanner';
import PaymentOrderSummary from './components/PaymentOrderSummary';
import PaymentDeliveryDetails from './components/PaymentDeliveryDetails';
import PaymentReferEarnBanner from './components/PaymentReferEarnBanner';
import PaymentActionButtons from './components/PaymentActionButtons';
import PaymentSidebarOrderDetails from './components/PaymentSidebarOrderDetails';
import PaymentSidebarNextSteps from './components/PaymentSidebarNextSteps';

import './PaymentPage.css';

/**
 * PaymentPage Component
 * Route: /buy/payment & /buy/payment-confirm
 * 
 * Features:
 * - Pixel-perfect implementation matching provided design images
 * - Uses responsive design tokens from index.css
 * - Custom header & bottom nav behavior as requested (Mobile custom header, Desktop app header)
 */
export default function PaymentPage() {
  return (
    <div className="payment-page-container">
      <div className="payment-layout-grid">
        {/* Main Left Column (Mobile full width / Desktop left pane) */}
        <div className="payment-main-column">
          <PaymentSuccessHeader />
          <PaymentOrderInfoCard />
          <PaymentFarmerSupportBanner />
          <PaymentOrderSummary />
          <PaymentDeliveryDetails />
          <PaymentReferEarnBanner />
          <PaymentActionButtons />
        </div>

        {/* Right Sidebar Column (Desktop only pane) */}
        <div className="payment-sidebar-column desktop-only">
          <PaymentSidebarOrderDetails />
          <PaymentSidebarNextSteps />
        </div>
      </div>
    </div>
  );
}
