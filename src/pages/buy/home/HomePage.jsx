import React, { useState } from 'react';
import HeroBanner from './components/HeroBanner';
import QuickCategories from './components/QuickCategories';
import FreshPicks from './components/FreshPicks';
import DealOfTheDay from './components/DealOfTheDay';
import NearbyFarmers from './components/NearbyFarmers';
import InfiniteProduceFeed from './components/InfiniteProduceFeed';
import './home.css';

// Asset imports
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

const freshPicksProducts = [
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
    tag: 'Fresh Pick'
  }
];

const dealProducts = [
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
    tag: '25% OFF'
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
    tag: '20% OFF'
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
    tag: 'Hot Deal'
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
    tag: 'Limited'
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
      {/* 1. Main Banner Sticky Depth Layer */}
      <div className="hero-banner-sticky-wrapper">
        <HeroBanner />
      </div>

      {/* 2. Parallel Sheet Container Layer */}
      <div className="home-content-sheet">
        {/* Quick Categories */}
        <QuickCategories categories={categories} />

        {/* Today's Fresh Picks Section */}
        <FreshPicks
          products={freshPicksProducts}
          cartQuantities={cartQuantities}
          favorites={favorites}
          onQuantityChange={handleQuantityChange}
          onToggleFavorite={toggleFavorite}
        />

        {/* Deal of the Day Section */}
        <DealOfTheDay
          products={dealProducts}
          cartQuantities={cartQuantities}
          favorites={favorites}
          onQuantityChange={handleQuantityChange}
          onToggleFavorite={toggleFavorite}
        />

        {/* Nearby Local Farmers Section */}
        <NearbyFarmers />

        {/* Endless Infinite Scroll Produce Feed */}
        <InfiniteProduceFeed
          cartQuantities={cartQuantities}
          favorites={favorites}
          onQuantityChange={handleQuantityChange}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}
