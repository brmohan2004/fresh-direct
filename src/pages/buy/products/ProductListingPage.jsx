import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';

// Product Assets
import prodTomatoes from '../../../assets/prod_tomatoes.png';
import prodCarrots from '../../../assets/prod_carrots.png';
import prodSpinach from '../../../assets/prod_spinach.png';
import prodCucumbers from '../../../assets/prod_cucumbers.png';
import prodOnions from '../../../assets/prod_onions.png';
import prodPotatoes from '../../../assets/prod_potatoes.png';
import prodCauliflower from '../../../assets/prod_cauliflower.png';
import prodPeppers from '../../../assets/prod_peppers.png';
import prodGreenBeans from '../../../assets/prod_green_beans.png';

// Sub-components
import ProductCategoryPills from './components/ProductCategoryPills';
import ProductFilterSidebar from './components/ProductFilterSidebar';
import ProductCard from './components/ProductCard';

import './ProductListingPage.css';

const initialProducts = [
  {
    id: 1,
    name: 'Fresh Red Tomatoes',
    category: 'vegetables',
    price: 32,
    mrp: 40,
    unit: '1 kg',
    rating: 4.8,
    reviewsCount: 124,
    farmName: 'Sunrise Farms',
    isOrganic: true,
    farmingType: 'organic',
    image: prodTomatoes
  },
  {
    id: 2,
    name: 'Crunchy Orange Carrots',
    category: 'vegetables',
    price: 45,
    mrp: 55,
    unit: '1 kg',
    rating: 4.9,
    reviewsCount: 98,
    farmName: 'Green Meadows',
    isOrganic: true,
    farmingType: 'organic',
    image: prodCarrots
  },
  {
    id: 3,
    name: 'Fresh Farm Spinach',
    category: 'vegetables',
    price: 25,
    mrp: 30,
    unit: '250 g',
    rating: 4.7,
    reviewsCount: 64,
    farmName: 'Valley Organic',
    isOrganic: true,
    farmingType: 'organic',
    image: prodSpinach
  },
  {
    id: 4,
    name: 'Crisp Hydroponic Cucumbers',
    category: 'vegetables',
    price: 30,
    mrp: 40,
    unit: '500 g',
    rating: 4.6,
    reviewsCount: 42,
    farmName: 'Pure Produce',
    isOrganic: false,
    farmingType: 'hydroponic',
    image: prodCucumbers
  },
  {
    id: 5,
    name: 'Organic Red Onions',
    category: 'vegetables',
    price: 35,
    mrp: 45,
    unit: '1 kg',
    rating: 4.8,
    reviewsCount: 180,
    farmName: 'Golden Soil',
    isOrganic: true,
    farmingType: 'organic',
    image: prodOnions
  },
  {
    id: 6,
    name: 'Farm Fresh Potatoes',
    category: 'vegetables',
    price: 28,
    mrp: 35,
    unit: '1 kg',
    rating: 4.5,
    reviewsCount: 110,
    farmName: 'Highland Farm',
    isOrganic: false,
    farmingType: 'natural',
    image: prodPotatoes
  },
  {
    id: 7,
    name: 'Fresh White Cauliflower',
    category: 'vegetables',
    price: 50,
    mrp: 65,
    unit: '1 pc (500g+)',
    rating: 4.7,
    reviewsCount: 56,
    farmName: 'Sunrise Farms',
    isOrganic: true,
    farmingType: 'organic',
    image: prodCauliflower
  },
  {
    id: 8,
    name: 'Green Bell Peppers',
    category: 'vegetables',
    price: 40,
    mrp: 50,
    unit: '500 g',
    rating: 4.6,
    reviewsCount: 78,
    farmName: 'Green Meadows',
    isOrganic: false,
    farmingType: 'hydroponic',
    image: prodPeppers
  },
  {
    id: 9,
    name: 'Tender Green Beans',
    category: 'vegetables',
    price: 38,
    mrp: 48,
    unit: '500 g',
    rating: 4.8,
    reviewsCount: 92,
    farmName: 'Valley Organic',
    isOrganic: true,
    farmingType: 'organic',
    image: prodGreenBeans
  }
];

export default function ProductListingPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL params if available
  const urlQuery = searchParams.get('search') || '';
  const urlCategory = searchParams.get('category') || 'all';
  const urlSort = searchParams.get('sort') || 'relevance';

  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [activeCategory, setActiveCategory] = useState(urlCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedFarmingType, setSelectedFarmingType] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState(urlSort);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state with URL params on load/update
  useEffect(() => {
    setSearchQuery(urlQuery);
    setActiveCategory(urlCategory);
    if (urlSort) setSortBy(urlSort);
  }, [urlQuery, urlCategory, urlSort]);

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    const newParams = new URLSearchParams(searchParams);
    if (catId !== 'all') {
      newParams.set('category', catId);
      newParams.delete('seeAll');
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams, { replace: true });
  };

  // Cart State (Map product ID -> quantity)
  const [cartQuantities, setCartQuantities] = useState({});

  const handleAddToCart = (product) => {
    setCartQuantities((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartQuantities((prev) => {
      const updated = { ...prev };
      if (newQuantity <= 0) {
        delete updated[productId];
      } else {
        updated[productId] = newQuantity;
      }
      return updated;
    });
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSelectedPriceRange('all');
    setSelectedFarmingType('all');
    setMinRating(0);
    setSearchQuery('');
    setSortBy('relevance');
    setSearchParams({}, { replace: true });
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesFarm = product.farmName.toLowerCase().includes(query);
        if (!matchesName && !matchesFarm) return false;
      }

      // Category filter
      if (activeCategory === 'organic' && !product.isOrganic) return false;
      if (activeCategory !== 'all' && activeCategory !== 'organic' && product.category !== activeCategory) {
        return false;
      }

      // Price range filter
      if (selectedPriceRange === 'under30' && product.price >= 30) return false;
      if (selectedPriceRange === '30to60' && (product.price < 30 || product.price > 60)) return false;
      if (selectedPriceRange === '60to100' && (product.price < 60 || product.price > 100)) return false;
      if (selectedPriceRange === 'above100' && product.price <= 100) return false;

      // Farming type filter
      if (selectedFarmingType !== 'all' && product.farmingType !== selectedFarmingType) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') {
        const discA = a.mrp ? a.mrp - a.price : 0;
        const discB = b.mrp ? b.mrp - b.price : 0;
        return discB - discA;
      }
      return 0;
    });
  }, [searchQuery, activeCategory, selectedPriceRange, selectedFarmingType, minRating, sortBy]);

  // "For You" (Recommended) Products list (Top rated organic picks)
  const forYouProducts = useMemo(() => {
    return initialProducts.filter((p) => p.rating >= 4.8).slice(0, 4);
  }, []);

  // Cart Totals Calculation
  const totalCartCount = Object.values(cartQuantities).reduce((acc, qty) => acc + qty, 0);
  const totalCartPrice = Object.entries(cartQuantities).reduce((acc, [id, qty]) => {
    const prod = initialProducts.find((p) => p.id === Number(id));
    return acc + (prod ? prod.price * qty : 0);
  }, 0);

  return (
    <div className="product-listing-page-wrapper">
      <div className="page-container listing-container">
        {/* Category Pills Navigation */}
        <ProductCategoryPills
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Main Two-Column Layout: Sidebar Filter & Products Grid */}
        <div className="listing-main-layout">
          {/* Left Sidebar Filter */}
          <ProductFilterSidebar
            selectedPriceRange={selectedPriceRange}
            onSelectPriceRange={setSelectedPriceRange}
            selectedFarmingType={selectedFarmingType}
            onSelectFarmingType={setSelectedFarmingType}
            minRating={minRating}
            onSelectMinRating={setMinRating}
            onResetFilters={handleResetFilters}
            isOpenMobile={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
          />

          {/* Main Content Area */}
          <main className="listing-products-content">
            {/* Primary Filtered Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onUpdateQuantity={handleUpdateQuantity}
                    cartQuantity={cartQuantities[product.id] || 0}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-listing-state">
                <h3>No produce found matching "{searchQuery}"</h3>
                <p>Try resetting filters or exploring our recommended produce below.</p>
                <button type="button" className="reset-empty-btn" onClick={handleResetFilters}>
                  Clear Search & Filters
                </button>
              </div>
            )}

            {/* "For You" Section (Display Recommended Products) */}
            <section className="for-you-section">
              <div className="for-you-header">
                <div className="for-you-title-group">
                  <Sparkles size={20} className="sparkle-icon" />
                  <div>
                    <h3>For You</h3>
                    <p className="for-you-subdesc">Hand-picked fresh organic produce recommended for you</p>
                  </div>
                </div>
              </div>

              <div className="products-grid for-you-grid">
                {forYouProducts.map((product) => (
                  <ProductCard
                    key={`foryou-${product.id}`}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onUpdateQuantity={handleUpdateQuantity}
                    cartQuantity={cartQuantities[product.id] || 0}
                  />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Floating Bottom View Cart Strip */}
      {totalCartCount > 0 && (
        <div className="listing-floating-cart-bar">
          <div className="cart-floating-inner">
            <div className="cart-floating-left">
              <div className="floating-bag-badge">
                <ShoppingBag size={18} color="#15803d" />
                <span className="badge-count">{totalCartCount}</span>
              </div>
              <div className="floating-text">
                <span className="floating-item-title">{totalCartCount} {totalCartCount === 1 ? 'Item' : 'Items'} in Cart</span>
                <span className="floating-total-price">₹{totalCartPrice}</span>
              </div>
            </div>

            <button
              type="button"
              className="floating-view-cart-btn"
              onClick={() => navigate('/buy/cart')}
            >
              <span>View Cart</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
