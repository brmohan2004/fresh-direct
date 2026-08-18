import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Trash2, Tag, Plus, ArrowRight } from 'lucide-react';
import CartItemRow from './components/CartItemRow';
import CartFloatingCheckoutBar from './components/CartFloatingCheckoutBar';
import './CartPage.css';

// Asset Imports
import prodPotatoes from '../../../assets/prod_potatoes.png';
import prodTomatoes from '../../../assets/prod_tomatoes.png';
import prodSpinach from '../../../assets/prod_spinach.png';
import prodOnions from '../../../assets/prod_onions.png';
import prodCarrots from '../../../assets/prod_carrots.png';
import prodCucumbers from '../../../assets/prod_cucumbers.png';
import prodPeppers from '../../../assets/prod_peppers.png';
import prodGreenBeans from '../../../assets/prod_green_beans.png';
import prodCauliflower from '../../../assets/prod_cauliflower.png';

// Initial Mock Cart Items
const initialCartItems = [
  {
    id: 1,
    name: 'Potato',
    farm: 'Green Valley Farm',
    price: 28,
    unit: 'kg',
    quantity: 2,
    image: prodPotatoes,
    badge: 'Fresh'
  },
  {
    id: 2,
    name: 'Tomato',
    farm: 'Sunrise Farms',
    price: 32,
    unit: 'kg',
    quantity: 2,
    image: prodTomatoes,
    badge: 'Fresh'
  },
  {
    id: 3,
    name: 'Spinach',
    farm: 'Green Valley Farm',
    price: 18,
    unit: 'bunch',
    quantity: 1,
    image: prodSpinach,
    badge: 'Fresh'
  },
  {
    id: 4,
    name: 'Onion',
    farm: 'Sunrise Farms',
    price: 24,
    unit: 'kg',
    quantity: 2,
    image: prodOnions,
    badge: 'Fresh'
  },
  {
    id: 5,
    name: 'Carrot',
    farm: 'Happy Harvest',
    price: 22,
    unit: 'kg',
    quantity: 1,
    image: prodCarrots,
    badge: 'Fresh'
  }
];

// Recommended produce list
const recommendedProduce = [
  { id: 101, name: 'Cucumber', farm: 'Farm Fresh', price: 20, unit: 'kg', image: prodCucumbers },
  { id: 102, name: 'Capsicum', farm: 'Farm Fresh', price: 35, unit: 'kg', image: prodPeppers },
  { id: 103, name: 'Beans', farm: 'Farm Fresh', price: 30, unit: 'kg', image: prodGreenBeans },
  { id: 104, name: 'Cauliflower', farm: 'Farm Fresh', price: 28, unit: 'kg', image: prodCauliflower }
];

export default function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeDeliveryTotal = 318;
  const remainingForFree = Math.max(0, freeDeliveryTotal - subtotal);
  const deliveryCharge = subtotal >= freeDeliveryTotal ? 0 : 25;
  const grandTotal = subtotal + deliveryCharge;

  return (
    <div className="cart-page-wrapper">
      <div className="cart-page-container">
        {/* Top Action Row */}
        {cartItems.length > 0 && (
          <div className="cart-top-header" style={{ justifyContent: 'flex-end' }}>
            <button className="clear-cart-btn" onClick={handleClearCart}>
              <span>Clear Cart</span>
              <Trash2 size={15} />
            </button>
          </div>
        )}

        {cartItems.length === 0 ? (
          <div className="empty-cart-card">
            <Leaf size={48} className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any fresh farm produce to your cart yet.</p>
            <button className="explore-btn" onClick={() => navigate('/buy/products')}>
              Explore Produce
            </button>
          </div>
        ) : (
          <div className="cart-layout-single-col">
            {/* Farmer Support Banner */}
            <div className="farmer-support-banner">
              <div className="banner-left">
                <div className="leaf-icon-badge">
                  <Leaf size={16} />
                </div>
                <p className="farmer-text">
                  Your order supports <strong>local farmers</strong> and helps build a better community.
                </p>
              </div>
              <div className="farmer-illustration-box desktop-only">
                <svg width="68" height="42" viewBox="0 0 68 42" fill="none">
                  <path d="M12 36c0-6 4.5-10 10-10s10 4 10 10" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="22" cy="18" r="5" stroke="#16a34a" strokeWidth="1.8" />
                  <path d="M15 14l7-4 7 4" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M40 36V22l14-6 12 6v14H40z" stroke="#16a34a" strokeWidth="1.5" />
                  <path d="M48 36V28h6v8" stroke="#16a34a" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Items Table Header (Desktop) */}
            <div className="cart-table-header desktop-only">
              <span className="col-product">Product</span>
              <span className="col-price">Price</span>
              <span className="col-quantity">Quantity</span>
              <span className="col-total">Total</span>
            </div>

            {/* Cart Item Rows */}
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>

            {/* Add More Items Banner */}
            <div className="add-more-banner">
              <div className="banner-tag-group">
                <Tag size={18} className="tag-icon" />
                <span>
                  Add items worth <strong>₹{remainingForFree}</strong> more to get <strong>FREE delivery</strong>
                </span>
              </div>
              <button
                className="add-more-btn"
                onClick={() => navigate('/buy/products')}
              >
                <span>Add More Items</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* You May Also Like Section */}
        <div className="you-may-like-section">
          <h3 className="section-title">You may also like</h3>
          <div className="recommended-grid">
            {recommendedProduce.map((prod) => (
              <div key={prod.id} className="rec-card">
                <div className="rec-img-box">
                  <img src={prod.image} alt={prod.name} className="rec-img" />
                </div>
                <div className="rec-info">
                  <h4 className="rec-name">{prod.name}</h4>
                  <span className="rec-farm">{prod.farm}</span>
                  <div className="rec-price-row">
                    <span className="rec-price">₹{prod.price}</span>
                    <span className="rec-unit">/{prod.unit}</span>
                  </div>
                </div>
                <button
                  className="rec-add-btn"
                  onClick={() => {
                    const newItem = {
                      id: Date.now(),
                      name: prod.name,
                      farm: prod.farm,
                      price: prod.price,
                      unit: prod.unit,
                      quantity: 1,
                      image: prod.image,
                      badge: 'Fresh'
                    };
                    setCartItems((prev) => [...prev, newItem]);
                  }}
                  aria-label={`Add ${prod.name} to cart`}
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modular Floating Checkout Bar & Order Summary Dropdown */}
      {cartItems.length > 0 && (
        <CartFloatingCheckoutBar
          subtotal={subtotal}
          totalItemsCount={totalItemsCount}
          remainingForFree={remainingForFree}
          freeDeliveryTotal={freeDeliveryTotal}
          deliveryCharge={deliveryCharge}
          grandTotal={grandTotal}
        />
      )}
    </div>
  );
}
