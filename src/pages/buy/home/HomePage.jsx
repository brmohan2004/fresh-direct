import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Star,
  Clock,
  Heart,
  TrendingUp,
  Award,
  Sparkles,
  MapPin,
  Tag
} from 'lucide-react';
import './home.css';

// Asset imports
import heroBasket from '../../../assets/hero_basket.png';
import farmerImg from '../../../assets/farmer.png';

import catVegetables from '../../../assets/cat_vegetables.png';
import catFruits from '../../../assets/cat_fruits.png';
import catDairy from '../../../assets/cat_dairy_eggs.png';
import catGrains from '../../../assets/cat_grains_pulses.png';
import catHerbs from '../../../assets/cat_herbs_spices.png';
import catOrganic from '../../../assets/cat_organic.png';
import catOils from '../../../assets/cat_oils_condiments.png';
import catFlowers from '../../../assets/cat_flowers_plants.png';

import prodTomatoes from '../../../assets/prod_tomatoes.png';
import prodSpinach from '../../../assets/prod_spinach.png';
import prodCarrots from '../../../assets/prod_carrots.png';
import prodCauliflower from '../../../assets/prod_cauliflower.png';
import prodOnions from '../../../assets/prod_onions.png';
import prodPotatoes from '../../../assets/prod_potatoes.png';
import prodPeppers from '../../../assets/prod_peppers.png';
import prodGreenBeans from '../../../assets/prod_green_beans.png';

const categories = [
  { id: 1, name: 'Vegetables', count: '45+ items', image: catVegetables },
  { id: 2, name: 'Fruits', count: '30+ items', image: catFruits },
  { id: 3, name: 'Dairy & Eggs', count: '20+ items', image: catDairy },
  { id: 4, name: 'Grains & Pulses', count: '25+ items', image: catGrains },
  { id: 5, name: 'Herbs & Spices', count: '18+ items', image: catHerbs },
  { id: 6, name: 'Organic Special', count: '15+ items', image: catOrganic },
  { id: 7, name: 'Oils & Honey', count: '12+ items', image: catOils },
  { id: 8, name: 'Flowers & Plants', count: '10+ items', image: catFlowers },
];

const featuredProducts = [
  {
    id: 'p1',
    name: 'Fresh Farm Tomatoes',
    category: 'Vegetables',
    price: 40,
    originalPrice: 50,
    unit: '1 kg',
    rating: 4.8,
    reviews: 124,
    farmer: 'Green Valley Farm',
    harvestTime: 'Harvested 4h ago',
    image: prodTomatoes,
    tag: 'Bestseller'
  },
  {
    id: 'p2',
    name: 'Organic Spinach (Palak)',
    category: 'Vegetables',
    price: 25,
    originalPrice: 30,
    unit: '250 g bunch',
    rating: 4.9,
    reviews: 98,
    farmer: 'Sunbeam Organics',
    harvestTime: 'Harvested 3h ago',
    image: prodSpinach,
    tag: '100% Organic'
  },
  {
    id: 'p3',
    name: 'Crunchy Orange Carrots',
    category: 'Vegetables',
    price: 45,
    originalPrice: 60,
    unit: '1 kg',
    rating: 4.7,
    reviews: 86,
    farmer: 'Root Harvest Co.',
    harvestTime: 'Harvested 6h ago',
    image: prodCarrots,
    tag: 'Farm Direct'
  },
  {
    id: 'p4',
    name: 'Fresh White Cauliflower',
    category: 'Vegetables',
    price: 35,
    originalPrice: 45,
    unit: '1 pc (approx 800g)',
    rating: 4.6,
    reviews: 64,
    farmer: 'Highland Produce',
    harvestTime: 'Harvested 5h ago',
    image: prodCauliflower,
    tag: 'Hot Deal'
  },
  {
    id: 'p5',
    name: 'Organic Red Onions',
    category: 'Vegetables',
    price: 30,
    originalPrice: 40,
    unit: '1 kg',
    rating: 4.8,
    reviews: 142,
    farmer: 'Valley Organics',
    harvestTime: 'Harvested Today',
    image: prodOnions,
    tag: 'Essential'
  },
  {
    id: 'p6',
    name: 'Fresh Farm Potatoes',
    category: 'Vegetables',
    price: 28,
    originalPrice: 35,
    unit: '1 kg',
    rating: 4.7,
    reviews: 110,
    farmer: 'Soil Harvests',
    harvestTime: 'Harvested Yesterday',
    image: prodPotatoes,
    tag: 'Popular'
  },
  {
    id: 'p7',
    name: 'Crisp Green Bell Peppers',
    category: 'Vegetables',
    price: 50,
    originalPrice: 65,
    unit: '500 g',
    rating: 4.9,
    reviews: 75,
    farmer: 'Greenhouse Fresh',
    harvestTime: 'Harvested 2h ago',
    image: prodPeppers,
    tag: 'Fresh Pick'
  },
  {
    id: 'p8',
    name: 'Tender Green Beans',
    category: 'Vegetables',
    price: 40,
    originalPrice: 50,
    unit: '500 g',
    rating: 4.8,
    reviews: 58,
    farmer: 'Nature Greens',
    harvestTime: 'Harvested 4h ago',
    image: prodGreenBeans,
    tag: 'Top Rated'
  }
];

export default function HomePage() {
  const [cartQuantities, setCartQuantities] = useState({});
  const [favorites, setFavorites] = useState({});

  const handleQuantityChange = (id, delta) => {
    setCartQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="home-container">
      {/* Mobile Search & Location Bar */}
      <div className="mobile-search-bar">
        <div className="mobile-location-row">
          <MapPin size={16} color="#16a34a" />
          <span className="location-text">Deliver to <strong>Bengaluru, 560001</strong></span>
        </div>
        <div className="mobile-search-input-box">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search fresh vegetables, fruits, dairy..." />
          <button type="button" className="filter-btn" aria-label="Filters">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Main Hero Banner */}
      <section className="home-hero-section">
        <div className="hero-text-content">
          <span className="hero-badge">
            <Sparkles size={14} /> Direct From Local Farms
          </span>
          <h1 className="hero-heading">
            100% Fresh & Organic <br className="desktop-only" />
            <span className="text-green">Delivered to Your Doorstep</span>
          </h1>
          <p className="hero-subtext">
            Skip the middleman! Support local farmers and get today's harvest delivered directly to your kitchen.
          </p>
          <div className="hero-actions">
            <Link to="/buy/products" className="hero-cta-btn">
              Explore Fresh Produce
            </Link>
            <div className="delivery-promise">
              <Clock size={16} color="#16a34a" />
              <span>Same Day Delivery within 4 Hours</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={heroBasket} alt="Fresh Organic Vegetables Basket" className="hero-basket-img" />
          <div className="hero-floating-card">
            <Award size={20} color="#16a34a" />
            <div>
              <strong>Guaranteed Quality</strong>
              <p>Directly from Verified Farmers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid / Carousel */}
      <section className="home-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Explore farm-fresh produce by category</p>
          </div>
          <Link to="/buy/categories" className="see-all-link">
            See All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/buy/products?category=${cat.name}`} className="category-card">
              <div className="cat-img-box">
                <img src={cat.image} alt={cat.name} className="cat-img" />
              </div>
              <span className="cat-name">{cat.name}</span>
              <span className="cat-count">{cat.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="home-section">
        <div className="section-header">
          <div>
            <div className="section-badge">
              <TrendingUp size={14} color="#16a34a" /> Daily Harvest
            </div>
            <h2 className="section-title">Today's Fresh Picks</h2>
          </div>
          <Link to="/buy/products" className="see-all-link">
            View All Products <ChevronRight size={16} />
          </Link>
        </div>

        <div className="products-grid">
          {featuredProducts.map((prod) => {
            const qty = cartQuantities[prod.id] || 0;
            const isFav = favorites[prod.id];

            return (
              <div key={prod.id} className="product-card">
                {/* Image Box */}
                <div className="prod-img-container">
                  {prod.tag && <span className="prod-tag">{prod.tag}</span>}
                  <button
                    type="button"
                    className={`fav-btn ${isFav ? 'active' : ''}`}
                    onClick={() => toggleFavorite(prod.id)}
                    aria-label="Add to Wishlist"
                  >
                    <Heart size={16} fill={isFav ? '#ef4444' : 'none'} color={isFav ? '#ef4444' : '#6b7280'} />
                  </button>
                  <Link to={`/buy/product/${prod.id}`}>
                    <img src={prod.image} alt={prod.name} className="prod-img" />
                  </Link>
                </div>

                {/* Product Meta */}
                <div className="prod-content">
                  <div className="prod-rating-row">
                    <span className="prod-farmer">{prod.farmer}</span>
                    <span className="rating-badge">
                      <Star size={12} fill="#f59e0b" color="#f59e0b" /> {prod.rating}
                    </span>
                  </div>

                  <Link to={`/buy/product/${prod.id}`} className="prod-title">
                    {prod.name}
                  </Link>
                  <span className="prod-unit">{prod.unit} • {prod.harvestTime}</span>

                  {/* Price & Add to Cart Bar */}
                  <div className="prod-footer">
                    <div className="price-box">
                      <span className="curr-price">₹{prod.price}</span>
                      {prod.originalPrice && <span className="orig-price">₹{prod.originalPrice}</span>}
                    </div>

                    {qty === 0 ? (
                      <button
                        type="button"
                        className="add-cart-btn"
                        onClick={() => handleQuantityChange(prod.id, 1)}
                      >
                        <Plus size={16} /> Add
                      </button>
                    ) : (
                      <div className="qty-control">
                        <button type="button" onClick={() => handleQuantityChange(prod.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span>{qty}</span>
                        <button type="button" onClick={() => handleQuantityChange(prod.id, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Farmer Direct Spotlight Banner */}
      <section className="farmer-spotlight-section">
        <div className="spotlight-content">
          <span className="spotlight-badge">Meet Your Local Farmer</span>
          <h2 className="spotlight-title">Ramesh Kumar's Organic Farm</h2>
          <p className="spotlight-desc">
            Located 15 km from your city in Ramanagara. Ramesh practices natural farming using indigenous seeds and zero chemical pesticides.
          </p>
          <div className="spotlight-stats">
            <div>
              <strong>15+ Yrs</strong>
              <span>Organic Farming</span>
            </div>
            <div>
              <strong>4.9 ★</strong>
              <span>Farmer Rating</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Natural Harvest</span>
            </div>
          </div>
          <Link to="/buy/products?farmer=ramesh" className="spotlight-btn">
            Shop Farmer Ramesh's Produce
          </Link>
        </div>
        <div className="spotlight-image-box">
          <img src={farmerImg} alt="Local Indian Organic Farmer" className="spotlight-img" />
        </div>
      </section>
    </div>
  );
}
