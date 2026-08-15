import React from 'react';

/**
 * ForgotPasswordHeader Component
 * Renders header title and instructions for forgot password flow.
 */
export default function ForgotPasswordHeader() {
  return (
    <div className="auth-card-header">
      <h2>Forgot Password?</h2>
      <p>No worries! Enter your registered email address below to receive password recovery instructions.</p>
    </div>
  );
}
