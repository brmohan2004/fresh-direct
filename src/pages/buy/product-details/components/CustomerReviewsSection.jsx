import React from 'react';
import { Star, ThumbsUp, CheckCircle2 } from 'lucide-react';
import userAvatar from '../../../../assets/image.png';
import './CustomerReviewsSection.css';

const sampleReviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    date: '2 days ago',
    rating: 5,
    verified: true,
    comment: 'Super fresh tomatoes! Loved the quality. Delivered within 2 hours direct from Mandya farms.',
    likes: 12
  },
  {
    id: 2,
    name: 'Arun V.',
    date: '1 week ago',
    rating: 5,
    verified: true,
    comment: 'Juicy and organic. Great for making curries and salads. Highly recommend Sunrise Farms!',
    likes: 8
  }
];

export default function CustomerReviewsSection() {
  return (
    <div className="customer-reviews-section">
      <h3 className="section-subtitle">Customer Ratings & Reviews</h3>

      {/* Ratings Overview Bar */}
      <div className="ratings-overview-card">
        <div className="rating-score-box">
          <span className="big-rating-num">4.8</span>
          <div className="stars-row">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <span className="rating-total-count">Based on 128 reviews</span>
        </div>

        <div className="rating-bars-col">
          {[
            { star: 5, pct: '85%' },
            { star: 4, pct: '10%' },
            { star: 3, pct: '3%' },
            { star: 2, pct: '1%' },
            { star: 1, pct: '1%' }
          ].map((bar) => (
            <div key={bar.star} className="bar-row">
              <span className="bar-label">{bar.star} ★</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: bar.pct }}></div>
              </div>
              <span className="bar-pct-text">{bar.pct}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="reviews-list-container">
        {sampleReviews.map((rev) => (
          <div key={rev.id} className="review-card">
            <div className="review-header">
              <div className="user-info-row">
                <img src={userAvatar} alt={rev.name} className="reviewer-avatar" />
                <div>
                  <div className="reviewer-name-line">
                    <span className="reviewer-name">{rev.name}</span>
                    {rev.verified && (
                      <span className="verified-buyer-pill">
                        <CheckCircle2 size={11} /> Verified Buyer
                      </span>
                    )}
                  </div>
                  <span className="review-date">{rev.date}</span>
                </div>
              </div>

              <div className="review-rating-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
            </div>

            <p className="review-text">{rev.comment}</p>

            <div className="review-footer">
              <button className="helpful-btn">
                <ThumbsUp size={12} />
                <span>Helpful ({rev.likes})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
