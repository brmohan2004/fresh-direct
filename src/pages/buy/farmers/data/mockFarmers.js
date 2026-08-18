import farmerImg from '../../../../assets/farmer.png';
import farmlandCover from '../../../../assets/farmland_cover.png';
import prodTomatoes from '../../../../assets/prod_tomatoes.png';
import prodPotatoes from '../../../../assets/prod_potatoes.png';
import prodSpinach from '../../../../assets/prod_spinach.png';
import prodCarrots from '../../../../assets/prod_carrots.png';

export const mockFarmers = [
  {
    id: 'ramesh',
    name: 'Ramesh Kumar',
    farmName: 'Green Valley Organics',
    avatar: farmerImg,
    cover: farmlandCover,
    distance: '1.2 km away',
    rating: 4.9,
    reviewsCount: 128,
    ordersCompleted: '250+',
    verified: true,
    locationText: 'Bengaluru East • 1.2 km',
    specialties: ['Organic Tomatoes', 'Potatoes', 'Spinach', 'Fresh Carrots'],
    produceImages: [prodTomatoes, prodPotatoes, prodSpinach],
    coordinates: { x: 38, y: 42 },
    badge: 'Fastest Delivery'
  },
  {
    id: 'suresh',
    name: 'Suresh Patil',
    farmName: 'Harvest Fresh Farm',
    avatar: farmerImg,
    cover: farmlandCover,
    distance: '2.4 km away',
    rating: 4.8,
    reviewsCount: 94,
    ordersCompleted: '180+',
    verified: true,
    locationText: 'Whitefield Road • 2.4 km',
    specialties: ['Sweet Peppers', 'Fresh Cucumbers', 'Carrots'],
    produceImages: [prodCarrots, prodTomatoes],
    coordinates: { x: 62, y: 28 },
    badge: '100% Organic'
  },
  {
    id: 'lakshmi',
    name: 'Lakshmi Devi',
    farmName: 'Sunrise Orchards',
    avatar: farmerImg,
    cover: farmlandCover,
    distance: '3.1 km away',
    rating: 4.95,
    reviewsCount: 210,
    ordersCompleted: '400+',
    verified: true,
    locationText: 'Sarjapur Belt • 3.1 km',
    specialties: ['Organic Fruits', 'Green Beans', 'Leafy Greens'],
    produceImages: [prodSpinach, prodTomatoes],
    coordinates: { x: 74, y: 65 },
    badge: 'Top Rated'
  },
  {
    id: 'gurpreet',
    name: 'Gurpreet Singh',
    farmName: 'Golden Grain & Dairy',
    avatar: farmerImg,
    cover: farmlandCover,
    distance: '4.2 km away',
    rating: 4.75,
    reviewsCount: 86,
    ordersCompleted: '140+',
    verified: true,
    locationText: 'HSR Outskirts • 4.2 km',
    specialties: ['Organic Grains', 'Fresh Milk', 'Pulses'],
    produceImages: [prodPotatoes, prodCarrots],
    coordinates: { x: 22, y: 72 },
    badge: 'Farm Fresh'
  },
  {
    id: 'ananya',
    name: 'Ananya Sharma',
    farmName: 'BioFresh Hydroponics',
    avatar: farmerImg,
    cover: farmlandCover,
    distance: '1.8 km away',
    rating: 4.88,
    reviewsCount: 165,
    ordersCompleted: '310+',
    verified: true,
    locationText: 'Indiranagar Outskirts • 1.8 km',
    specialties: ['Exotic Herbs', 'Microgreens', 'Cherry Tomatoes'],
    produceImages: [prodTomatoes, prodSpinach],
    coordinates: { x: 50, y: 55 },
    badge: 'Pesticide Free'
  }
];
