import React from 'react';
import { ChevronRight, CheckCircle2, Clock, Truck } from 'lucide-react';
import './OrderCard.css';

export default function OrderCard({ order, onViewDetails, onTrackOrder }) {
  const {
    id,
    orderNumber,
    date,
    time,
    status, // 'delivered' | 'processing' | 'shipped' | 'cancelled'
    totalPrice,
    totalItems,
    itemsImages,
    extraItemsCount,
    deliveryStatusText,
    deliveryDate
  } = order;

  // Status Badge configurations
  const getStatusBadge = () => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <span className="status-badge badge-delivered">Delivered</span>;
      case 'processing':
        return <span className="status-badge badge-processing">Processing</span>;
      case 'shipped':
        return <span className="status-badge badge-shipped">Shipped</span>;
      case 'cancelled':
        return <span className="status-badge badge-cancelled">Cancelled</span>;
      default:
        return <span className="status-badge">{status}</span>;
    }
  };

  // Bottom delivery status text icon
  const renderDeliveryFooterInfo = () => {
    if (status === 'delivered') {
      return (
        <div className="order-footer-info status-delivered-text">
          <CheckCircle2 size={16} className="footer-icon icon-green" />
          <span>Delivered on {deliveryDate}</span>
        </div>
      );
    }
    if (status === 'processing') {
      return (
        <div className="order-footer-info status-processing-text">
          <Clock size={16} className="footer-icon icon-orange" />
          <span>Expected delivery: {deliveryDate}</span>
        </div>
      );
    }
    if (status === 'shipped') {
      return (
        <div className="order-footer-info status-shipped-text">
          <Truck size={16} className="footer-icon icon-blue" />
          <span>In transit • Expected: {deliveryDate}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="order-card-container">
      {/* Top Header Row */}
      <div className="order-card-header">
        <div className="order-meta-info">
          <h3 className="order-number-title">Order #{orderNumber}</h3>
          <span className="order-date-text">{date} • {time}</span>
        </div>

        <div className="order-header-right">
          {getStatusBadge()}
          <button className="chevron-link-btn" onClick={() => onViewDetails(order)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Body Grid: Product Images & Price */}
      <div className="order-card-body">
        {/* Produce Images Thumbnails */}
        <div className="order-thumbnails-list">
          {itemsImages.map((imgSrc, index) => (
            <div key={index} className="thumb-item-box">
              <img src={imgSrc} alt="Produce item" className="thumb-img" />
            </div>
          ))}
          {extraItemsCount > 0 && (
            <div className="thumb-extra-box">
              <span>+{extraItemsCount}</span>
            </div>
          )}
        </div>

        {/* Total Price & Item Count */}
        <div className="order-pricing-box">
          <span className="order-price-val">₹{totalPrice}</span>
          <span className="order-items-count">{totalItems} items</span>
        </div>
      </div>

      {/* Bottom Footer Row: Status Info & CTA Buttons */}
      <div className="order-card-footer">
        {renderDeliveryFooterInfo()}

        <div className="order-actions-group">
          {status === 'delivered' ? (
            <button className="order-cta-btn secondary-btn" onClick={() => onViewDetails(order)}>
              View Details
            </button>
          ) : (
            <button className="order-cta-btn primary-green-btn" onClick={() => onTrackOrder(order)}>
              Track Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
