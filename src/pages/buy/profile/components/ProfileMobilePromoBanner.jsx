import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import basketImg from '../../../../assets/hero_basket.png';

export default function ProfileMobilePromoBanner() {
  const navigate = useNavigate();

  return (
    <div className="profile-mobile-promo-banner mobile-only">
      <div className="promo-left-text">
        <h3 className="promo-title">Eat Fresh, Live Healthy</h3>
        <p className="promo-desc">
          Handpicked from local farms and delivered to your doorstep.
        </p>
        <button className="promo-shop-btn" onClick={() => navigate('/buy/home')}>
          <span>Shop Now</span>
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="promo-right-img">
        <img src={basketImg} alt="Fresh Vegetables Basket" className="promo-basket-img" />
      </div>
    </div>
  );
}
