import React from 'react';
import { ShoppingBag, Clock, Truck, CheckCircle2, XCircle, Headphones, ShieldCheck, RefreshCw, Award } from 'lucide-react';
import './OrderSummarySidebar.css';

export default function OrderSummarySidebar({ counts, onSupportClick }) {
  return (
    <div className="orders-sidebar-wrapper">
      {/* Order Summary Statistics Card */}
      <div className="orders-stat-card">
        <h3 className="stat-card-title">Order Summary</h3>

        <div className="stat-items-list">
          <div className="stat-row">
            <div className="stat-label-group">
              <ShoppingBag size={16} className="stat-icon icon-gray" />
              <span>Total Orders</span>
            </div>
            <span className="stat-val font-bold">{counts.all}</span>
          </div>

          <div className="stat-row">
            <div className="stat-label-group">
              <Clock size={16} className="stat-icon icon-orange" />
              <span>Processing</span>
            </div>
            <span className="stat-val val-orange">{counts.processing}</span>
          </div>

          <div className="stat-row">
            <div className="stat-label-group">
              <Truck size={16} className="stat-icon icon-blue" />
              <span>Shipped</span>
            </div>
            <span className="stat-val val-blue">{counts.shipped}</span>
          </div>

          <div className="stat-row">
            <div className="stat-label-group">
              <CheckCircle2 size={16} className="stat-icon icon-green" />
              <span>Delivered</span>
            </div>
            <span className="stat-val val-green">{counts.delivered}</span>
          </div>

          <div className="stat-row">
            <div className="stat-label-group">
              <XCircle size={16} className="stat-icon icon-red" />
              <span>Cancelled</span>
            </div>
            <span className="stat-val val-gray">{counts.cancelled}</span>
          </div>
        </div>
      </div>

      {/* Need Help Card */}
      <div className="help-card">
        <div className="help-card-left">
          <h4>Need Help with your order?</h4>
          <p>Our support team is here to help you with any queries.</p>
          <button className="contact-support-btn" onClick={onSupportClick}>
            Contact Support
          </button>
        </div>
        <div className="help-card-right">
          <div className="headset-icon-box">
            <Headphones size={28} color="#16a34a" />
          </div>
        </div>
      </div>

      {/* Shopping with FarmDirect Benefits */}
      <div className="benefits-card">
        <h4 className="benefits-title">Shopping with FarmDirect</h4>

        <div className="benefit-item">
          <Award size={18} className="benefit-icon" />
          <div className="benefit-text">
            <span className="b-title">100% Fresh Produce</span>
            <span className="b-desc">Directly from verified farms</span>
          </div>
        </div>

        <div className="benefit-item">
          <ShieldCheck size={18} className="benefit-icon" />
          <div className="benefit-text">
            <span className="b-title">Secure Payments</span>
            <span className="b-desc">Safe & encrypted transactions</span>
          </div>
        </div>

        <div className="benefit-item">
          <Truck size={18} className="benefit-icon" />
          <div className="benefit-text">
            <span className="b-title">On-time Delivery</span>
            <span className="b-desc">Fast delivery to your doorstep</span>
          </div>
        </div>

        <div className="benefit-item">
          <RefreshCw size={18} className="benefit-icon" />
          <div className="benefit-text">
            <span className="b-title">Easy Returns</span>
            <span className="b-desc">Hassle-free returns & refunds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
