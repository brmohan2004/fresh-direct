import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';
import './QuickCategories.css';

/**
 * QuickCategories Component
 * Single horizontal scrolling row of category cards.
 * - Removed section title & see-all button header.
 * - Added "All Categories" card at end of horizontal scroll row redirecting to /buy/categories.
 * - Compact sticky shrink bar behavior when scrolling.
 */
export default function QuickCategories({ categories }) {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Header height threshold offset
            const headerOffset = window.innerWidth <= 640 ? 60 : 70;
            if (rect.top <= headerOffset + 5) {
              setIsSticky(true);
            } else {
              setIsSticky(false);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`home-section quick-categories-section ${isSticky ? 'is-sticky-shrunk' : ''}`}
    >
      {/* Single Horizontal Row of Category Cards */}
      <div className="categories-row">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/buy/products?category=${encodeURIComponent(cat.name)}`}
            className="category-card-squircle"
          >
            <div className="cat-img-box-squircle">
              <img src={cat.image} alt={cat.name} className="cat-img-squircle" />
            </div>
            <span className="cat-name-squircle">{cat.name}</span>
          </Link>
        ))}

        {/* All Categories Card at end of horizontal scroll */}
        <Link to="/buy/categories" className="category-card-squircle all-categories-card">
          <div className="cat-img-box-squircle all-cat-icon-box">
            <LayoutGrid size={24} className="all-cat-icon" />
          </div>
          <span className="cat-name-squircle">All Categories</span>
        </Link>
      </div>
    </section>
  );
}
