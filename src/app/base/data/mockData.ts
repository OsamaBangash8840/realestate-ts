import { IPropertyItems } from '../types'

export const MockProperties: IPropertyItems[] = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: '/products/headphones.jpg',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: 2,
    title: 'Smart Fitness Watch',
    price: 199.99,
    image: '/products/watch.jpg',
    category: 'Wearables',
    rating: 4.2,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    title: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: '/products/speaker.jpg',
    category: 'Audio',
    rating: 4.7,
    reviews: 203,
    inStock: false,
  },
]
