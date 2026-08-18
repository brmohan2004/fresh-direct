import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ShoppingBag, Search, SlidersHorizontal, Truck, CheckCircle2, Clock } from 'lucide-react';
import OrderCard from './components/OrderCard';
import OrderSummarySidebar from './components/OrderSummarySidebar';
import './OrdersPage.css';

// Asset Mock Imports
import prodPotatoes from '../../../assets/prod_potatoes.png';
import prodTomatoes from '../../../assets/prod_tomatoes.png';
import prodSpinach from '../../../assets/prod_spinach.png';
import prodOnions from '../../../assets/prod_onions.png';
import prodCarrots from '../../../assets/prod_carrots.png';
import prodCucumbers from '../../../assets/prod_cucumbers.png';
import prodPeppers from '../../../assets/prod_peppers.png';
import prodCauliflower from '../../../assets/prod_cauliflower.png';

const initialOrdersList = [
  {
    id: 1,
    orderNumber: 'FD12345',
    date: 'May 12, 2026',
    time: '10:30 AM',
    status: 'delivered',
    totalPrice: 186,
    totalItems: 7,
    itemsImages: [prodPotatoes, prodTomatoes, prodSpinach, prodOnions],
    extraItemsCount: 2,
    deliveryDate: 'May 13, 2026'
  },
  {
    id: 2,
    orderNumber: 'FD12344',
    date: 'May 10, 2026',
    time: '04:15 PM',
    status: 'processing',
    totalPrice: 242,
    totalItems: 5,
    itemsImages: [prodOnions, prodCarrots, prodCucumbers, prodPeppers],
    extraItemsCount: 1,
    deliveryDate: 'May 14, 2026'
  },
  {
    id: 3,
    orderNumber: 'FD12343',
    date: 'May 08, 2026',
    time: '09:20 AM',
    status: 'shipped',
    totalPrice: 176,
    totalItems: 6,
    itemsImages: [prodCauliflower, prodCarrots, prodSpinach, prodPeppers],
    extraItemsCount: 1,
    deliveryDate: 'May 13, 2026'
  },
  {
    id: 4,
    orderNumber: 'FD12342',
    date: 'May 05, 2026',
    time: '11:45 AM',
    status: 'delivered',
    totalPrice: 198,
    totalItems: 5,
    itemsImages: [prodTomatoes, prodPotatoes, prodSpinach, prodCarrots],
    extraItemsCount: 1,
    deliveryDate: 'May 06, 2026'
  }
];

export default function OrdersPage() {
  const navigate = useNavigate();
  const context = useOutletContext();
  const globalSearch = context?.categorySearchQuery || '';

  const [activeTab, setActiveTab] = useState('all');
  const [localSearch, setLocalSearch] = useState('');

  const effectiveSearch = (globalSearch || localSearch).trim().toLowerCase();

  // Filter orders by active status tab and search text
  const filteredOrders = initialOrdersList.filter((order) => {
    const matchesTab = activeTab === 'all' || order.status.toLowerCase() === activeTab;
    const matchesSearch =
      effectiveSearch === '' ||
      order.orderNumber.toLowerCase().includes(effectiveSearch) ||
      order.status.toLowerCase().includes(effectiveSearch);

    return matchesTab && matchesSearch;
  });

  const counts = {
    all: 24,
    processing: 4,
    shipped: 5,
    delivered: 13,
    cancelled: 2
  };

  const handleViewDetails = (order) => {
    navigate('/buy/orders/order-details', { state: { order } });
  };

  const handleTrackOrder = (order) => {
    navigate('/buy/orders/track-order', { state: { order } });
  };

  return (
    <div className="orders-page-wrapper">
      <div className="orders-page-container">
        
        {/* Top Header Row (Desktop) */}
        <div className="orders-top-header desktop-only">
          <div className="orders-title-group">
            <h1 className="orders-heading">My Orders</h1>
          </div>

          <div className="orders-header-actions">
            <div className="orders-search-input-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search your orders..."
                value={globalSearch || localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
            </div>
            <button className="orders-filter-btn">
              <SlidersHorizontal size={15} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Desktop Grid Layout */}
        <div className="orders-layout-grid">
          
          {/* Left Column: Banner, Filter Pills & Orders List */}
          <div className="orders-left-col">
            
            {/* Fresh Trust Delivery Banner (Moved Above Pills) */}
            <div className="trust-delivery-banner">
              <div className="trust-banner-left">
                <div className="bag-badge-icon">
                  <ShoppingBag size={18} color="#16a34a" />
                </div>
                <div className="trust-text">
                  <h3>Fresh from farms to your home</h3>
                  <p>We deliver freshness you can trust.</p>
                </div>
              </div>

              <div className="delivery-truck-graphic">
                <div className="truck-box">
                  <Truck size={36} color="#16a34a" />
                </div>
              </div>
            </div>

            {/* Status Navigation Pills */}
            <div className="orders-tabs-bar">
              <button
                className={`tab-item ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Orders ({counts.all})
              </button>
              <button
                className={`tab-item ${activeTab === 'processing' ? 'active' : ''}`}
                onClick={() => setActiveTab('processing')}
              >
                Processing ({counts.processing})
              </button>
              <button
                className={`tab-item ${activeTab === 'shipped' ? 'active' : ''}`}
                onClick={() => setActiveTab('shipped')}
              >
                Shipped ({counts.shipped})
              </button>
              <button
                className={`tab-item ${activeTab === 'delivered' ? 'active' : ''}`}
                onClick={() => setActiveTab('delivered')}
              >
                Delivered ({counts.delivered})
              </button>
              <button
                className={`tab-item ${activeTab === 'cancelled' ? 'active' : ''}`}
                onClick={() => setActiveTab('cancelled')}
              >
                Cancelled ({counts.cancelled})
              </button>
            </div>

            {/* Orders Cards List */}
            {filteredOrders.length === 0 ? (
              <div className="no-orders-card">
                <ShoppingBag size={48} className="empty-icon" />
                <h3>No orders found</h3>
                <p>You don't have any orders matching the selected status filter.</p>
              </div>
            ) : (
              <div className="orders-cards-list">
                {filteredOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    onViewDetails={handleViewDetails}
                    onTrackOrder={handleTrackOrder}
                  />
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Order Summary & Help Sidebar (Desktop) */}
          <div className="orders-right-col desktop-only">
            <OrderSummarySidebar
              counts={counts}
              onSupportClick={() => navigate('/buy/help-support')}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
