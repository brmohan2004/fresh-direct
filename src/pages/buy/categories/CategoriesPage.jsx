import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Sparkles, ShieldCheck, Truck, Headphones } from 'lucide-react';
import CategoryBanner from './components/CategoryBanner';
import CategoryCard from './components/CategoryCard';
import './CategoriesPage.css';

// Asset imports
import catVegetables from '../../../assets/cat_vegetables.png';
import catFruits from '../../../assets/cat_fruits.png';
import catDairy from '../../../assets/cat_dairy_eggs.png';
import catGrains from '../../../assets/cat_grains_pulses.png';
import catHerbs from '../../../assets/cat_herbs_spices.png';
import catOrganic from '../../../assets/cat_organic.png';
import catOils from '../../../assets/cat_oils_condiments.png';
import catFlowers from '../../../assets/cat_flowers_plants.png';

// Category Cards Data
const categoryCards = [
  {
    id: 'veg',
    name: 'Fresh Vegetables',
    shortName: 'Vegetables',
    itemCount: '120+ items',
    badge: 'Fresh Daily',
    image: catVegetables,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 11C3 6.03 7.03 2 12 2z" />
        <path d="M12 6v10" />
        <path d="M8 10h8" />
      </svg>
    ),
    bgColor: '#f0fdf4',
    iconColor: '#16a34a'
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    shortName: 'Fruits',
    itemCount: '80+ items',
    badge: null,
    image: catFruits,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 2v3" />
        <path d="M12 5c2-2 4-2 6-1" />
      </svg>
    ),
    bgColor: '#fff7ed',
    iconColor: '#ea580c'
  },
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    shortName: 'Dairy & Eggs',
    itemCount: '40+ items',
    badge: null,
    image: catDairy,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8v4H8z" />
        <path d="M6 6h12l1 14H5L6 6z" />
      </svg>
    ),
    bgColor: '#f0f9ff',
    iconColor: '#0284c7'
  },
  {
    id: 'grains',
    name: 'Grains & Pulses',
    shortName: 'Grains & Pulses',
    itemCount: '60+ items',
    badge: null,
    image: catGrains,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5L12 9" />
        <path d="M7 9l5-4" />
        <path d="M17 13l-5 4" />
        <path d="M7 17l5-4" />
      </svg>
    ),
    bgColor: '#fefce8',
    iconColor: '#ca8a04'
  },
  {
    id: 'herbs',
    name: 'Herbs & Spices',
    shortName: 'Herbs & Spices',
    itemCount: '50+ items',
    badge: null,
    image: catHerbs,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0-9 9c0 3.5 2 6.5 5 8" />
        <path d="M12 3a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8" />
        <path d="M12 7v13" />
      </svg>
    ),
    bgColor: '#f7fee7',
    iconColor: '#65a30d'
  },
  {
    id: 'oils',
    name: 'Oils & Condiments',
    shortName: 'Oils & Condiments',
    itemCount: '30+ items',
    badge: null,
    image: catOils,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4v3h-4z" />
        <path d="M7 7h10l1 14H6L7 7z" />
      </svg>
    ),
    bgColor: '#fffbeb',
    iconColor: '#b45309'
  },
  {
    id: 'organic',
    name: 'Organic',
    shortName: 'Organic',
    itemCount: '30+ items',
    badge: null,
    image: catOrganic,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    bgColor: '#ecfdf5',
    iconColor: '#059669'
  },
  {
    id: 'flowers',
    name: 'Flowers & Plants',
    shortName: 'Flowers & Plants',
    itemCount: '20+ items',
    badge: null,
    image: catFlowers,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a4 4 0 0 0-4 4c0 3 4 5 4 5s4-2 4-5a4 4 0 0 0-4-4Z" />
        <path d="M12 22a4 4 0 0 0 4-4c0-3-4-5-4-5s-4 2-4 5a4 4 0 0 0 4 4Z" />
        <path d="M2 12a4 4 0 0 0 4 4c3 0 5-4 5-4s-2-4-5-4a4 4 0 0 0-4 4Z" />
        <path d="M22 12a4 4 0 0 0-4-4c-3 0-5 4-5 4s2 4 5 4a4 4 0 0 0 4-4Z" />
      </svg>
    ),
    bgColor: '#fdf2f8',
    iconColor: '#db2777'
  }
];

export default function CategoriesPage() {
  const navigate = useNavigate();
  const context = useOutletContext();
  const searchQuery = context?.categorySearchQuery || '';

  const filteredCategories = categoryCards.filter((cat) => {
    if (searchQuery.trim()) {
      return (
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.shortName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  const handleCategoryClick = (catId) => {
    navigate(`/buy/products?category=${catId}`);
  };

  return (
    <div className="cat-page-wrapper">
      {/* Main Container */}
      <div className="cat-page-container">
        
        {/* Desktop Hero Banner Sub-Component */}
        <CategoryBanner />

        {/* Responsive Grid of Category Cards */}
        <div className="cat-cards-grid">
          {filteredCategories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onClick={() => handleCategoryClick(cat.id)}
            />
          ))}
        </div>

        {/* Bottom Feature Badges Bar (Desktop) */}
        <div className="cat-features-bar desktop-only-flex">
          <div className="feature-item">
            <div className="feature-icon-box">
              <Sparkles size={20} />
            </div>
            <div className="feature-text">
              <span className="feature-title">Fresh & Quality</span>
              <span className="feature-desc">Handpicked with care</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div className="feature-text">
              <span className="feature-title">Safe & Secure</span>
              <span className="feature-desc">100% secure payments</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Truck size={20} />
            </div>
            <div className="feature-text">
              <span className="feature-title">On-time Delivery</span>
              <span className="feature-desc">Fast delivery to your door</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Headphones size={20} />
            </div>
            <div className="feature-text">
              <span className="feature-title">24/7 Support</span>
              <span className="feature-desc">We are always here to help</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
