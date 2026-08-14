import React from 'react';

/**
 * Shared Button component placeholder
 */
export default function Button({ children, onClick, variant = 'primary' }) {
  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    backgroundColor: variant === 'primary' ? 'var(--primary)' : '#e5e7eb',
    color: variant === 'primary' ? '#fff' : '#374151'
  };

  return (
    <button style={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
}
