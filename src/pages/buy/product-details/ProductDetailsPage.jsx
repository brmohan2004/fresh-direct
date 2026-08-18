import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';

// Page Components
import ProductFloatingHeader from './components/ProductFloatingHeader';
import ProductGallery from './components/ProductGallery';
import ProductHeaderInfo from './components/ProductHeaderInfo';
import ProductHighlights from './components/ProductHighlights';
import ProductDescriptionCard from './components/ProductDescriptionCard';
import DeliveryLocationCard from './components/DeliveryLocationCard';
import FarmerSnippetCard from './components/FarmerSnippetCard';
import CustomerReviewsSection from './components/CustomerReviewsSection';
import RelatedProductsGrid from './components/RelatedProductsGrid';
import ProductMobileBottomBar from './components/ProductMobileBottomBar';

import './ProductDetailsPage.css';

export default function ProductDetailsPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [selectedWeightObj, setSelectedWeightObj] = useState({
    id: '1kg',
    label: '1 kg',
    price: 32,
    unit: '1 kg'
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Fresh Organic Tomatoes - FarmDirect',
        text: 'Check out fresh organic tomatoes direct from Sunrise Farms on FarmDirect!',
        url: window.location.href
      }).catch(() => {});
    } else {
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2500);
    }
  };

  return (
    <div className="product-details-page-wrapper">
      {/* Toast Notification */}
      {showShareToast && (
        <div className="product-share-toast">
          <Check size={16} /> Product link copied to clipboard!
        </div>
      )}

      {/* Mobile Floating Overlay Header (Back, Heart, Share) */}
      <ProductFloatingHeader
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite(!isFavorite)}
        onShare={handleShare}
      />

      <div className="page-container product-details-container">
        {/* Desktop Breadcrumb Navigation */}
        <nav className="desktop-breadcrumb desktop-only">
          <NavLink to="/buy/home">Home</NavLink>
          <ChevronRight size={14} />
          <NavLink to="/buy/categories">Vegetables</NavLink>
          <ChevronRight size={14} />
          <NavLink to="/buy/products">Tomatoes</NavLink>
          <ChevronRight size={14} />
          <span className="current-crumb">Tomato</span>
        </nav>

        {/* Responsive Main Layout Grid */}
        <div className="product-main-grid">
          {/* Left Column: Gallery & Farmer Snippet (Desktop) / Gallery (Mobile) */}
          <div className="product-col-left">
            <ProductGallery />
            <div className="desktop-only-subcol">
              <FarmerSnippetCard />
              <CustomerReviewsSection />
            </div>
          </div>

          {/* Right Column: Info, Selectors & Actions */}
          <div className="product-col-right">
            <ProductHeaderInfo
              selectedPrice={selectedWeightObj.price}
              unitLabel={selectedWeightObj.label}
            />

            <ProductHighlights />

            <ProductDescriptionCard />

            <DeliveryLocationCard />

            {/* Mobile-only Farmer Snippet & Reviews Position */}
            <div className="mobile-only-subcol">
              <FarmerSnippetCard />
              <CustomerReviewsSection />
            </div>

            <RelatedProductsGrid />
          </div>
        </div>
      </div>

      {/* Floating Bottom Action Bar (Desktop & Mobile) */}
      <ProductMobileBottomBar
        selectedPrice={selectedWeightObj.price}
        unitLabel={selectedWeightObj.label}
      />
    </div>
  );
}
