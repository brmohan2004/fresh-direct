import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronUp, ChevronDown, ChevronRight, X, Minus, Plus, ShoppingCart, Check } from 'lucide-react';
import './ProductMobileBottomBar.css';

const weightOptions = [
  { id: '250g', label: '250 g', price: 10 },
  { id: '500g', label: '500 g', price: 18 },
  { id: '1kg', label: '1 kg', price: 32 },
  { id: '2kg', label: '2 kg', price: 60 }
];

export default function ProductMobileBottomBar() {
  const navigate = useNavigate();

  // State Management
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [isSelectQtyModalOpen, setIsSelectQtyModalOpen] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[2]); // default 1kg
  const [modalMultiplier, setModalMultiplier] = useState(1);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Calculated totals
  const currentModalPrice = selectedWeight.price * modalMultiplier;
  const activeCartPrice = selectedWeight.price * cartItemCount;

  // Open quantity selector modal when user clicks main "Add to Cart" button
  const handleOpenQuantityModal = () => {
    setIsSelectQtyModalOpen(true);
    if (modalMultiplier === 0) setModalMultiplier(1);
  };

  // Confirm quantity inside modal sheet
  const handleConfirmAddToCart = () => {
    setCartItemCount(modalMultiplier);
    setIsSelectQtyModalOpen(false);
  };

  // Increment / Decrement directly on active bottom bar stepper
  const handleDecrementActive = () => {
    setCartItemCount((prev) => {
      const next = Math.max(0, prev - 1);
      if (next === 0) setModalMultiplier(1);
      return next;
    });
  };

  const handleIncrementActive = () => {
    setCartItemCount((prev) => prev + 1);
    setModalMultiplier((prev) => prev + 1);
  };

  return (
    <>
      {/* Price Details Popup Sheet */}
      {showPriceBreakdown && (
        <div className="price-sheet-backdrop" onClick={() => setShowPriceBreakdown(false)}>
          <div className="price-sheet-container" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-header">
              <h3>Price Details</h3>
              <button className="close-sheet-btn" onClick={() => setShowPriceBreakdown(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="sheet-rows-list">
              <div className="sheet-row">
                <span>Item Price ({selectedWeight.label} x {cartItemCount || 1})</span>
                <span>₹{activeCartPrice || selectedWeight.price}</span>
              </div>
              <div className="sheet-row">
                <span>Farm Direct Discount (20%)</span>
                <span className="green-text">-₹{Math.round((activeCartPrice || selectedWeight.price) * 0.25)}</span>
              </div>
              <div className="sheet-row">
                <span>Handling Fee</span>
                <span className="green-text">FREE</span>
              </div>
              <div className="sheet-row">
                <span>Delivery Fee</span>
                <span className="green-text">FREE</span>
              </div>
              <div className="sheet-divider"></div>
              <div className="sheet-row total-row">
                <span>Total Amount</span>
                <span>₹{activeCartPrice || selectedWeight.price}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Select Quantity Modal Sheet (Opened when user clicks "Add to Cart") */}
      {isSelectQtyModalOpen && (
        <div className="price-sheet-backdrop" onClick={() => setIsSelectQtyModalOpen(false)}>
          <div className="price-sheet-container select-qty-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-header">
              <div>
                <h3>Select Quantity</h3>
                <p className="select-qty-subhead">Choose weight & count for fresh delivery</p>
              </div>
              <button className="close-sheet-btn" onClick={() => setIsSelectQtyModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Weight options selector grid */}
            <div className="qty-modal-options-grid">
              {weightOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`qty-modal-opt-card ${selectedWeight.id === opt.id ? 'active' : ''}`}
                  onClick={() => setSelectedWeight(opt)}
                >
                  {selectedWeight.id === opt.id && (
                    <span className="opt-check-badge">
                      <Check size={10} color="#ffffff" />
                    </span>
                  )}
                  <span className="opt-label">{opt.label}</span>
                  <span className="opt-price">₹{opt.price}</span>
                </button>
              ))}
            </div>

            {/* Multiplier Stepper */}
            <div className="qty-modal-multiplier-row">
              <span className="multiplier-label">Number of Packs:</span>
              <div className="stepper-quantity-wrapper modal-stepper">
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setModalMultiplier((prev) => Math.max(1, prev - 1))}
                  disabled={modalMultiplier <= 1}
                >
                  <Minus size={14} />
                </button>
                <span className="stepper-val-text">{modalMultiplier}</span>
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => setModalMultiplier((prev) => prev + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Modal Bottom Confirm Button */}
            <button
              type="button"
              className="confirm-add-cart-btn"
              onClick={handleConfirmAddToCart}
            >
              <ShoppingCart size={18} />
              <span>Add to Cart • ₹{currentModalPrice}</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating View Cart Banner (Displayed ABOVE bottom bar when items added) */}
      {cartItemCount > 0 && (
        <div className="floating-cart-above-bar">
          <div className="cart-above-inner">
            <div className="cart-above-info">
              <div className="cart-icon-badge">
                <ShoppingBag size={18} color="#15803d" />
                <span className="cart-badge-num">{cartItemCount}</span>
              </div>
              <div className="cart-above-text">
                <span className="cart-item-count">{cartItemCount} {cartItemCount === 1 ? 'item selected' : 'items selected'} ({selectedWeight.label})</span>
                <span className="cart-item-total">₹{activeCartPrice}</span>
              </div>
            </div>

            <div className="cart-above-actions">
              <button
                type="button"
                className="view-cart-action-btn"
                onClick={() => navigate('/buy/cart')}
              >
                <span>View Cart</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Action Bar for Desktop and Mobile */}
      <div className="product-mobile-bottom-bar">
        <div className="floating-bar-inner">
          {/* Left Side: Price & View Price Details */}
          <div className="mobile-bottom-price-info">
            <div className="price-num-line">
              <span className="price-val">₹{activeCartPrice || selectedWeight.price}</span>
              <span className="price-unit-slash">/{selectedWeight.label}</span>
            </div>
            <button
              type="button"
              className="view-price-details-btn"
              onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
            >
              <span>View Details</span>
              {showPriceBreakdown ? <ChevronDown size={11} /> : <ChevronUp size={11} />}
            </button>
          </div>

          {/* Right Side: Add to Cart button (initial state 0) or Active Stepper Pill (state > 0) */}
          <div className="mobile-bottom-cta-group">
            {cartItemCount === 0 ? (
              <button
                type="button"
                className="add-cart-primary-btn"
                onClick={handleOpenQuantityModal}
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
            ) : (
              <div className="stepper-quantity-wrapper">
                <button
                  type="button"
                  className="stepper-btn stepper-minus"
                  onClick={handleDecrementActive}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="stepper-val-text">
                  <span className="desktop-qty-label">{cartItemCount} × {selectedWeight.label}</span>
                  <span className="mobile-qty-label">{cartItemCount} × {selectedWeight.label}</span>
                </span>
                <button
                  type="button"
                  className="stepper-btn stepper-plus"
                  onClick={handleIncrementActive}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
