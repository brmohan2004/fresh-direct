import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Layouts
import AuthLayout from '../layouts/AuthLayout';
import BuyLayout from '../layouts/BuyLayout';

// Auth Pages
import LoginPage from '../pages/auth/login/LoginPage';
import SignupPage from '../pages/auth/signup/SignupPage';
import ForgotPasswordPage from '../pages/auth/forgot-password/ForgotPasswordPage';

// Buy (Consumer) Pages
import HomePage from '../pages/buy/home/HomePage';
import CategoriesPage from '../pages/buy/categories/CategoriesPage';
import ProductListingPage from '../pages/buy/products/ProductListingPage';
import ProductDetailsPage from '../pages/buy/product-details/ProductDetailsPage';
import FarmerListingPage from '../pages/buy/farmers/FarmerListingPage';
import FarmerProfilePage from '../pages/buy/farmer-profile/FarmerProfilePage';
import SearchPage from '../pages/buy/search/SearchPage';
import CartPage from '../pages/buy/cart/CartPage';
import CheckoutPage from '../pages/buy/checkout/CheckoutPage';
import PaymentPage from '../pages/buy/payment/PaymentPage';
import OrdersPage from '../pages/buy/orders/OrdersPage';
import OrderDetailsPage from '../pages/buy/orders/order-details/OrderDetailsPage';
import TrackOrderPage from '../pages/buy/orders/track-order/TrackOrderPage';
import WishlistPage from '../pages/buy/wishlist/WishlistPage';
import NotificationsPage from '../pages/buy/notifications/NotificationsPage';
import ProfilePage from '../pages/buy/profile/ProfilePage';
import AddressesPage from '../pages/buy/addresses/AddressesPage';
import HelpSupportPage from '../pages/buy/help-support/HelpSupportPage';

/**
 * Route Configuration
 * Configures /auth and /buy route hierarchies.
 * Note: Admin panel is NOT included here as it is a completely separate project.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/buy/home" replace />
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> }
    ]
  },
  {
    path: '/buy',
    element: <BuyLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'products', element: <ProductListingPage /> },
      { path: 'product-details', element: <ProductDetailsPage /> },
      { path: 'farmers', element: <FarmerListingPage /> },
      { path: 'farmer-profile', element: <FarmerProfilePage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'payment', element: <PaymentPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'orders/order-details', element: <OrderDetailsPage /> },
      { path: 'orders/track-order', element: <TrackOrderPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'addresses', element: <AddressesPage /> },
      { path: 'help-support', element: <HelpSupportPage /> }
    ]
  }
]);
