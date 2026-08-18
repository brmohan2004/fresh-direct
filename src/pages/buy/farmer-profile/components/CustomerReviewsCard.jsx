import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import userAvatar from '../../../../assets/image.png';
import './CustomerReviewsCard.css';

export default function CustomerReviewsCard() {
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      author: 'Priya S.',
      role: 'Verified Buyer',
      rating: 5,
      date: '2 days ago',
      comment: 'Very fresh and healthy vegetables. Got them delivered fast directly from Ramesh\'s farm. Truly farm fresh!',
    },
    {
      id: 2,
      author: 'Rajesh M.',
      role: 'Verified Buyer',
      rating: 5,
      date: '1 week ago',
      comment: 'Excellent organic produce. The tomatoes and cucumbers were crisp and full of natural flavor.',
    }
  ];

  return (
    <div className="profile-section-card">
      <div className="section-header-row">
        <div className="title-with-rating">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="header-rating-badge">
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <span>4.8 (120)</span>
          </div>
        </div>
        <button className="view-all-link" onClick={() => navigate('/buy/products')}>
          <span>View All</span>
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="reviews-list">
        {reviews.map((rev) => (
          <div key={rev.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <img src={userAvatar} alt={rev.author} className="reviewer-avatar" />
                <div className="reviewer-details">
                  <span className="reviewer-name">{rev.author}</span>
                  <span className="reviewer-tag">{rev.role}</span>
                </div>
              </div>
              <div className="review-meta">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="review-date">{rev.date}</span>
              </div>
            </div>
            <p className="review-comment">"{rev.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
