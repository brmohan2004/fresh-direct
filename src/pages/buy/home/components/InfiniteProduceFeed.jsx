import React, { useState, useEffect, useRef } from 'react';
import { Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import ProductCard from './ProductCard';
import './InfiniteProduceFeed.css';

// Asset imports
import prodTomatoes from '../../../../assets/prod_tomatoes.png';
import prodSpinach from '../../../../assets/prod_spinach.png';
import prodCarrots from '../../../../assets/prod_carrots.png';
import prodCauliflower from '../../../../assets/prod_cauliflower.png';
import prodOnions from '../../../../assets/prod_onions.png';
import prodPotatoes from '../../../../assets/prod_potatoes.png';
import prodPeppers from '../../../../assets/prod_peppers.png';
import prodGreenBeans from '../../../../assets/prod_green_beans.png';

const initialInfiniteCatalog = [
  {
    id: 'inf-1',
    name: 'Farm Fresh Cherry Tomatoes',
    category: 'Vegetables',
    price: 48,
    originalPrice: 60,
    unit: '500 g pack',
    rating: 4.9,
    reviews: 84,
    farmer: 'Green Valley Farm',
    harvestTime: 'Harvested 2h ago',
    image: prodTomatoes,
    tag: 'Hydroponic'
  },
  {
    id: 'inf-2',
    name: 'Tender Baby Spinach',
    category: 'Vegetables',
    price: 32,
    originalPrice: 40,
    unit: '200 g box',
    rating: 4.8,
    reviews: 62,
    farmer: 'Sunbeam Organics',
    harvestTime: 'Harvested 3h ago',
    image: prodSpinach,
    tag: 'Washed'
  },
  {
    id: 'inf-3',
    name: 'Sweet Mini Carrots',
    category: 'Vegetables',
    price: 55,
    originalPrice: 70,
    unit: '500 g',
    rating: 4.7,
    reviews: 49,
    farmer: 'Root Harvest Co.',
    harvestTime: 'Harvested 5h ago',
    image: prodCarrots,
    tag: 'Organic'
  },
  {
    id: 'inf-4',
    name: 'Purple Hybrid Cauliflower',
    category: 'Vegetables',
    price: 60,
    originalPrice: 75,
    unit: '1 pc (700g)',
    rating: 4.9,
    reviews: 38,
    farmer: 'Highland Produce',
    harvestTime: 'Harvested 4h ago',
    image: prodCauliflower,
    tag: 'Exotic'
  },
  {
    id: 'inf-5',
    name: 'Golden Sweet Shallots',
    category: 'Vegetables',
    price: 42,
    originalPrice: 52,
    unit: '500 g',
    rating: 4.8,
    reviews: 91,
    farmer: 'Valley Organics',
    harvestTime: 'Harvested Today',
    image: prodOnions,
    tag: 'Local Variety'
  },
  {
    id: 'inf-6',
    name: 'Baby Red Potatoes',
    category: 'Vegetables',
    price: 36,
    originalPrice: 45,
    unit: '1 kg',
    rating: 4.6,
    reviews: 77,
    farmer: 'Soil Harvests',
    harvestTime: 'Harvested Yesterday',
    image: prodPotatoes,
    tag: 'Farm Direct'
  },
  {
    id: 'inf-7',
    name: 'Vibrant Yellow Bell Peppers',
    category: 'Vegetables',
    price: 58,
    originalPrice: 72,
    unit: '500 g',
    rating: 4.9,
    reviews: 53,
    farmer: 'Greenhouse Fresh',
    harvestTime: 'Harvested 1h ago',
    image: prodPeppers,
    tag: 'Vitamin Rich'
  },
  {
    id: 'inf-8',
    name: 'French Haricot Beans',
    category: 'Vegetables',
    price: 46,
    originalPrice: 58,
    unit: '500 g',
    rating: 4.7,
    reviews: 41,
    farmer: 'Nature Greens',
    harvestTime: 'Harvested 3h ago',
    image: prodGreenBeans,
    tag: 'Crisp & Tender'
  },
  {
    id: 'inf-9',
    name: 'Heirloom Vine Tomatoes',
    category: 'Vegetables',
    price: 52,
    originalPrice: 65,
    unit: '1 kg',
    rating: 4.9,
    reviews: 112,
    farmer: 'Green Valley Farm',
    harvestTime: 'Harvested 4h ago',
    image: prodTomatoes,
    tag: 'Heirloom'
  },
  {
    id: 'inf-10',
    name: 'Organic Malabar Spinach',
    category: 'Vegetables',
    price: 28,
    originalPrice: 35,
    unit: '250 g bunch',
    rating: 4.8,
    reviews: 65,
    farmer: 'Sunbeam Organics',
    harvestTime: 'Harvested 2h ago',
    image: prodSpinach,
    tag: 'Native'
  },
  {
    id: 'inf-11',
    name: 'Farm Fresh Red Carrots',
    category: 'Vegetables',
    price: 42,
    originalPrice: 50,
    unit: '1 kg',
    rating: 4.8,
    reviews: 98,
    farmer: 'Root Harvest Co.',
    harvestTime: 'Harvested 6h ago',
    image: prodCarrots,
    tag: 'Sweet'
  },
  {
    id: 'inf-12',
    name: 'Snow White Broccoli',
    category: 'Vegetables',
    price: 50,
    originalPrice: 65,
    unit: '500 g',
    rating: 4.7,
    reviews: 54,
    farmer: 'Highland Produce',
    harvestTime: 'Harvested 3h ago',
    image: prodCauliflower,
    tag: 'Superfood'
  }
];

/**
 * InfiniteProduceFeed Component
 * Dynamically loads and appends produce items when user scrolls near the bottom.
 */
export default function InfiniteProduceFeed({
  cartQuantities = {},
  favorites = {},
  onQuantityChange,
  onToggleFavorite
}) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef(null);

  const hasMore = visibleCount < initialInfiniteCatalog.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore && !isLoadingMore) {
          setIsLoadingMore(true);

          // Simulate real network fetch delay
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 4, initialInfiniteCatalog.length));
            setIsLoadingMore(false);
          }, 600);
        }
      },
      {
        root: null,
        rootMargin: '200px', // Trigger load 200px before reaching bottom
        threshold: 0.1
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore]);

  const currentProducts = initialInfiniteCatalog.slice(0, visibleCount);

  return (
    <section className="home-section infinite-feed-section">
      <div className="section-header">
        <div>
          <div className="section-badge feed-badge">
            <Sparkles size={13} color="#16a34a" /> Endless Farm Feed
          </div>
          <h2 className="section-title">Explore All Fresh Produce</h2>
        </div>
      </div>

      {/* Infinite Product Grid */}
      <div className="infinite-products-grid">
        {currentProducts.map((prod) => (
          <div key={prod.id} className="infinite-grid-item">
            <ProductCard
              product={prod}
              quantity={cartQuantities[prod.id] || 0}
              isFavorite={!!favorites[prod.id]}
              onQuantityChange={onQuantityChange}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        ))}
      </div>

      {/* Sentinel & Loading Indicator */}
      <div ref={sentinelRef} className="infinite-sentinel-box">
        {isLoadingMore && (
          <div className="infinite-loader-wrapper">
            <Loader2 size={22} className="infinite-spinner" />
            <span>Fetching today's harvest...</span>
          </div>
        )}

        {!hasMore && (
          <div className="infinite-end-message">
            <CheckCircle2 size={16} color="#16a34a" />
            <span>You've explored all of today's fresh farm direct picks!</span>
          </div>
        )}
      </div>
    </section>
  );
}
