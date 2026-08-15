import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Heart, ShoppingBag, SlidersHorizontal, Trash2, ArrowRight } from 'lucide-react';
import WishlistItemRow from './components/WishlistItemRow';
import WishlistSummaryCard from './components/WishlistSummaryCard';
import './WishlistPage.css';

// Asset Imports
import prodPotatoes from '../../../assets/prod_potatoes.png';
import prodTomatoes from '../../../assets/prod_tomatoes.png';
import prodSpinach from '../../../assets/prod_spinach.png';
import prodOnions from '../../../assets/prod_onions.png';
import prodCarrots from '../../../assets/prod_carrots.png';
import prodCucumbers from '../../../assets/prod_cucumbers.png';
import prodPeppers from '../../../assets/prod_peppers.png';

// Initial Mock Wishlist Items matching reference design
const initialWishlistItems = [
  {
    id: 1,
    name: 'Red Apple',
    farm: 'Kashmir Fresh Farms',
    category: 'fruits',
    price: 150,
    unit: 'kg',
    image: prodTomatoes, // clean red fruit mockup
    badge: 'Fresh',
    addedDate: 'May 12, 2026'
  },
  {
    id: 2,
    name: 'Broccoli',
    farm: 'Green Valley Farm',
    category: 'vegetables',
    price: 80,
    unit: 'kg',
    image: prodSpinach, // green produce mockup
    badge: 'Fresh',
    addedDate: 'May 13, 2026'
  },
  {
    id: 3,
    name: 'Banana',
    farm: 'Tropical Farms',
    category: 'fruits',
    price: 60,
    unit: 'kg',
    image: prodPotatoes, // yellow produce mockup
    badge: 'Fresh',
    addedDate: 'May 15, 2026'
  },
  {
    id: 4,
    name: 'Almonds',
    farm: 'Farm Harvest',
    category: 'others',
    price: 650,
    unit: '250g',
    image: prodOnions, // dry fruit produce mockup
    badge: 'Premium',
    addedDate: 'May 18, 2026'
  },
  {
    id: 5,
    name: 'Spinach',
    farm: 'Green Valley Farm',
    category: 'vegetables',
    price: 18,
    unit: 'bunch',
    image: prodSpinach,
    badge: 'Fresh',
    addedDate: 'May 20, 2026'
  },
  {
    id: 6,
    name: 'Tomato',
    farm: 'Sunrise Farms',
    category: 'vegetables',
    price: 32,
    unit: 'kg',
    image: prodTomatoes,
    badge: 'Fresh',
    addedDate: 'May 21, 2026'
  }
];

// Recommended produce list for mini summary card
const recommendedProduce = [
  { id: 201, name: 'Crisp Apples', farm: 'Forest Farms', price: 125, unit: 'kg', image: prodTomatoes },
  { id: 202, name: 'Capsicum', farm: 'Farm Fresh', price: 35, unit: 'kg', image: prodPeppers },
  { id: 203, name: 'Carrots', farm: 'Happy Harvest', price: 22, unit: 'kg', image: prodCarrots },
  { id: 204, name: 'Cucumbers', farm: 'Farm Fresh', price: 20, unit: 'kg', image: prodCucumbers }
];

export default function WishlistPage() {
  const navigate = useNavigate();
  const context = useOutletContext();
  const searchQuery = context?.categorySearchQuery || '';

  const [items, setItems] = useState(initialWishlistItems);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearWishlist = () => {
    setItems([]);
  };

  const handleAddToCart = (item) => {
    alert(`Added ${item.name} to cart!`);
  };

  const handleMoveAllToCart = () => {
    alert('Moved all wishlist items to cart!');
    navigate('/buy/cart');
  };

  // Filter items by category tab AND live header search query
  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.farm.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Calculate category counts
  const counts = {
    all: items.length,
    fruits: items.filter((i) => i.category === 'fruits').length,
    vegetables: items.filter((i) => i.category === 'vegetables').length,
    others: items.filter((i) => i.category === 'others').length
  };

  return (
    <div className="wishlist-page-wrapper">
      <div className="wishlist-page-container">
        
        {/* Header Row (Desktop) */}
        <div className="wishlist-top-header desktop-only">
          <div className="wishlist-title-group">
            <h1 className="wishlist-heading">My Wishlist</h1>
            <span className="wishlist-item-count">({items.length} items)</span>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="empty-wishlist-card">
            <Heart size={48} className="empty-wishlist-icon" />
            <h2>Your wishlist is empty</h2>
            <p>Save items you love to your wishlist and order them anytime.</p>
            <button className="explore-btn" onClick={() => navigate('/buy/products')}>
              Explore Produce
            </button>
          </div>
        ) : (
          <div className="wishlist-layout-grid">
            
            {/* Main Left Content Area */}
            <div className="wishlist-left-col">
              
              {/* Green Favorites Banner */}
              <div className="favorites-banner">
                <div className="favorites-banner-left">
                  <div className="heart-badge-icon">
                    <Heart size={16} fill="#16a34a" color="#16a34a" />
                  </div>
                  <div className="favorites-text">
                    <h3 className="fav-title">Your favorites, just a click away!</h3>
                    <p className="fav-desc">Move items to cart and place your order easily.</p>
                  </div>
                </div>
                <div className="favorites-illustration desktop-only">
                  <svg width="68" height="42" viewBox="0 0 68 42" fill="none">
                    <path d="M12 36c0-6 4.5-10 10-10s10 4 10 10" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="22" cy="18" r="5" stroke="#16a34a" strokeWidth="1.8" />
                    <path d="M40 36V22l14-6 12 6v14H40z" stroke="#16a34a" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Filter Tabs & Sort Controls */}
              <div className="wishlist-controls-bar">
                <div className="category-tabs">
                  <button
                    className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('all')}
                  >
                    All ({counts.all})
                  </button>
                  <button
                    className={`tab-btn ${activeCategory === 'fruits' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('fruits')}
                  >
                    Fruits ({counts.fruits})
                  </button>
                  <button
                    className={`tab-btn ${activeCategory === 'vegetables' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('vegetables')}
                  >
                    Vegetables ({counts.vegetables})
                  </button>
                  <button
                    className={`tab-btn ${activeCategory === 'others' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('others')}
                  >
                    Others ({counts.others})
                  </button>
                </div>

                <div className="sort-box">
                  <span className="sort-label desktop-only">Sort by:</span>
                  <button className="sort-btn">
                    <span>Recently Added</span>
                    <SlidersHorizontal size={14} />
                  </button>
                </div>
              </div>

              {/* Table Column Headers (Desktop) */}
              <div className="wishlist-table-header desktop-only">
                <span className="col-product">Product</span>
                <span className="col-price">Price</span>
                <span className="col-added">Added On</span>
                <span className="col-action">Action</span>
              </div>

              {/* Wishlist Items List */}
              <div className="wishlist-items-list">
                {filteredItems.map((item) => (
                  <WishlistItemRow
                    key={item.id}
                    item={item}
                    onRemove={handleRemove}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>

              {/* Bottom Action Row */}
              <div className="wishlist-bottom-row">
                <span className="footer-count">{items.length} items in wishlist</span>
                <div className="bottom-btns-group">
                  <button className="clear-wishlist-btn desktop-only" onClick={handleClearWishlist}>
                    <Trash2 size={15} />
                    <span>Clear Wishlist</span>
                  </button>
                  <button className="move-all-btn-green" onClick={handleMoveAllToCart}>
                    <ShoppingBag size={16} />
                    <span>Move All to Cart</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Summary Column (Desktop) */}
            <div className="wishlist-right-col desktop-only">
              <WishlistSummaryCard
                totalItems={items.length}
                onMoveAllToCart={handleMoveAllToCart}
                recommendedProduce={recommendedProduce}
              />
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
