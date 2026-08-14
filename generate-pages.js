import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { path: 'src/pages/auth/login/LoginPage.jsx', title: 'LoginPage', route: '/auth/login' },
  { path: 'src/pages/auth/signup/SignupPage.jsx', title: 'SignupPage', route: '/auth/signup' },
  { path: 'src/pages/auth/forgot-password/ForgotPasswordPage.jsx', title: 'ForgotPasswordPage', route: '/auth/forgot-password' },
  { path: 'src/pages/auth/mode-selection/ModeSelectionPage.jsx', title: 'ModeSelectionPage', route: '/auth/mode-selection' },
  
  { path: 'src/pages/buy/home/HomePage.jsx', title: 'HomePage', route: '/buy/home' },
  { path: 'src/pages/buy/categories/CategoriesPage.jsx', title: 'CategoriesPage', route: '/buy/categories' },
  { path: 'src/pages/buy/products/ProductListingPage.jsx', title: 'ProductListingPage', route: '/buy/products' },
  { path: 'src/pages/buy/product-details/ProductDetailsPage.jsx', title: 'ProductDetailsPage', route: '/buy/product-details' },
  { path: 'src/pages/buy/farmers/FarmerListingPage.jsx', title: 'FarmerListingPage', route: '/buy/farmers' },
  { path: 'src/pages/buy/farmer-profile/FarmerProfilePage.jsx', title: 'FarmerProfilePage', route: '/buy/farmer-profile' },
  { path: 'src/pages/buy/search/SearchPage.jsx', title: 'SearchPage', route: '/buy/search' },
  { path: 'src/pages/buy/cart/CartPage.jsx', title: 'CartPage', route: '/buy/cart' },
  { path: 'src/pages/buy/checkout/CheckoutPage.jsx', title: 'CheckoutPage', route: '/buy/checkout' },
  { path: 'src/pages/buy/payment/PaymentPage.jsx', title: 'PaymentPage', route: '/buy/payment' },
  { path: 'src/pages/buy/orders/OrdersPage.jsx', title: 'OrdersPage', route: '/buy/orders' },
  { path: 'src/pages/buy/orders/order-details/OrderDetailsPage.jsx', title: 'OrderDetailsPage', route: '/buy/orders/order-details' },
  { path: 'src/pages/buy/orders/track-order/TrackOrderPage.jsx', title: 'TrackOrderPage', route: '/buy/orders/track-order' },
  { path: 'src/pages/buy/wishlist/WishlistPage.jsx', title: 'WishlistPage', route: '/buy/wishlist' },
  { path: 'src/pages/buy/notifications/NotificationsPage.jsx', title: 'NotificationsPage', route: '/buy/notifications' },
  { path: 'src/pages/buy/profile/ProfilePage.jsx', title: 'ProfilePage', route: '/buy/profile' },
  { path: 'src/pages/buy/addresses/AddressesPage.jsx', title: 'AddressesPage', route: '/buy/addresses' },
  { path: 'src/pages/buy/help-support/HelpSupportPage.jsx', title: 'HelpSupportPage', route: '/buy/help-support' }
];

pages.forEach(({ path: filePath, title, route }) => {
  const absolutePath = path.resolve(__dirname, filePath);
  const content = `import React from 'react';

/**
 * ${title}
 * Route: ${route}
 * 
 * [PLACEHOLDER] Page skeleton ready for UI implementation.
 * Page-specific sub-components should be placed in components/ directory under this page folder.
 */
export default function ${title}() {
  return (
    <div className="page-container">
      <div className="page-skeleton-card">
        <h2>${title}</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Route: <code>${route}</code> - Ready for UI implementation.
        </p>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(absolutePath, content, 'utf8');
});
console.log('Successfully created all page skeleton files!');
