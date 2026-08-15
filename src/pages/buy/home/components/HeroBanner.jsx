import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBasket from '../../../../assets/hero_basket.png';
import './HeroBanner.css';

const slides = [
  {
    id: 1,
    badge: 'Fresh from Farms',
    titleLine1: 'Eat ',
    highlightLine1: 'Fresh',
    titleLine2: ', Live Healthy',
    subtitle: 'Directly from trusted farmers to your doorstep.',
    btnText: 'Shop Now',
    btnLink: '/buy/products',
  },
  {
    id: 2,
    badge: '100% Organic',
    titleLine1: '',
    highlightLine1: 'Fresh Produce',
    titleLine2: ', Real Goodness',
    subtitle: 'Harvested fresh every morning and delivered to your doorstep.',
    btnText: 'Shop Now',
    btnLink: '/buy/products?category=Organic%20Special',
  },
  {
    id: 3,
    badge: 'Same Day Delivery',
    titleLine1: '',
    highlightLine1: 'Farm Direct',
    titleLine2: ', Zero Middlemen',
    subtitle: 'Support local farming families and enjoy peak harvest freshness.',
    btnText: 'Explore Produce',
    btnLink: '/buy/products',
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="home-hero-card">
      {/* Decorative Floating Leaves */}
      <div className="leaf-decoration leaf-1" />
      <div className="leaf-decoration leaf-2" />
      <div className="leaf-decoration leaf-3" />

      {/* Left Text Content */}
      <div className="hero-card-left">
        {/* Outline Pill Badge */}
        <div className="hero-outline-badge">
          {slide.badge}
        </div>

        {/* Dynamic Title */}
        <h1 className="hero-card-title">
          {slide.titleLine1}
          <span className="hero-highlight-green">{slide.highlightLine1}</span>
          {slide.titleLine2}
        </h1>

        {/* Subtitle */}
        <p className="hero-card-subtitle">{slide.subtitle}</p>

        {/* CTA Button */}
        <Link to={slide.btnLink} className="hero-card-cta">
          <span>{slide.btnText}</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Right Basket Image */}
      <div className="hero-card-right">
        <img
          src={heroBasket}
          alt="Fresh Vegetable Basket"
          className="hero-basket-picture"
        />
      </div>

      {/* Bottom Carousel Indicator Dots */}
      <div className="hero-carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
