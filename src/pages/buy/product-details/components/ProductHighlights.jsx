import React from 'react';
import { Sprout, ShieldCheck, Truck } from 'lucide-react';
import './ProductHighlights.css';

export default function ProductHighlights() {
  const highlights = [
    {
      id: 1,
      icon: Sprout,
      title: 'Farm Fresh',
      desc: 'Directly harvested today',
      color: '#16a34a',
      bg: '#f0fdf4'
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: 'Safe & Healthy',
      desc: '100% Pesticide free',
      color: '#0284c7',
      bg: '#f0f9ff'
    },
    {
      id: 3,
      icon: Truck,
      title: 'Fast Delivery',
      desc: 'Dispatched in 2 hours',
      color: '#d97706',
      bg: '#fffbeb'
    }
  ];

  return (
    <div className="product-highlights-grid">
      {highlights.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="highlight-card">
            <div className="highlight-icon-badge" style={{ background: item.bg, color: item.color }}>
              <Icon size={18} />
            </div>
            <div className="highlight-info">
              <span className="highlight-title">{item.title}</span>
              <span className="highlight-desc">{item.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
