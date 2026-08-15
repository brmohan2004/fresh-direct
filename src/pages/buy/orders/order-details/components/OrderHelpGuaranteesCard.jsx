import React from 'react';
import { Headphones, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import './OrderHelpGuaranteesCard.css';

export default function OrderHelpGuaranteesCard({ onChatSupport }) {
  return (
    <div className="bottom-guarantees-bar">
      <div className="guarantee-help-col">
        <div className="chat-icon-circle">
          <Headphones size={22} color="#16a34a" />
        </div>
        <div className="help-text-group">
          <h4>Need Help?</h4>
          <p>We're here to help you with your order</p>
        </div>
        <button className="chat-us-btn" onClick={onChatSupport}>
          <Headphones size={14} />
          <span>Chat with Us</span>
        </button>
      </div>

      <div className="guarantees-list-group">
        <div className="g-item">
          <ShieldCheck size={20} className="g-icon" />
          <div className="g-info">
            <span className="g-title">Secure Payments</span>
            <span className="g-desc">100% secure payments</span>
          </div>
        </div>

        <div className="g-item">
          <Truck size={20} className="g-icon" />
          <div className="g-info">
            <span className="g-title">On-time Delivery</span>
            <span className="g-desc">Quick & reliable delivery</span>
          </div>
        </div>

        <div className="g-item">
          <RefreshCw size={20} className="g-icon" />
          <div className="g-info">
            <span className="g-title">Easy Returns</span>
            <span className="g-desc">Hassle-free returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}
