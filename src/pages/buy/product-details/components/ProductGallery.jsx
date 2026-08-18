import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import prodTomatoes from '../../../../assets/prod_tomatoes.png';
import catOrganic from '../../../../assets/cat_organic.png';
import catVegetables from '../../../../assets/cat_vegetables.png';
import heroBasket from '../../../../assets/hero_basket.png';
import farmlandCover from '../../../../assets/farmland_cover.png';
import './ProductGallery.css';

const galleryImages = [
  { id: 1, src: prodTomatoes, alt: 'Fresh Red Tomatoes' },
  { id: 2, src: catOrganic, alt: 'Organic Tomatoes Basket' },
  { id: 3, src: catVegetables, alt: 'Harvested Farm Produce' },
  { id: 4, src: heroBasket, alt: 'Fresh Tomato Close-up' },
  { id: 5, src: farmlandCover, alt: 'Organic Farm Source' }
];

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="product-gallery-container">
      {/* Thumbnail Bar (Desktop Left Side / Mobile Below) */}
      <div className="product-thumbnails-list desktop-thumbs">
        {galleryImages.map((img, idx) => (
          <button
            key={img.id}
            className={`thumb-item ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>

      {/* Main Image Stage */}
      <div className="product-main-image-wrapper">
        <img
          src={galleryImages[activeIndex].src}
          alt={galleryImages[activeIndex].alt}
          className="product-hero-image"
        />

        <div className="gallery-counter-badge">
          <span>{activeIndex + 1}/{galleryImages.length}</span>
        </div>
      </div>

      {/* Thumbnail Bar (Mobile Below Image) */}
      <div className="product-thumbnails-list mobile-thumbs">
        {galleryImages.map((img, idx) => (
          <button
            key={img.id}
            className={`thumb-item ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>
    </div>
  );
}
