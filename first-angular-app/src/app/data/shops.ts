export interface ShopService {
  name: string;
  price: number;
  durationMinutes: number;
}

export interface ShopStylist {
  name: string;
  specialties: string[];
}

export interface Shop {
  id: number;
  name: string;
  category: string;
  city: string;
  rating: number;
  reviewCount: number;
  description: string;
  services: ShopService[];
  stylists: ShopStylist[];
  startingPrice: number;
  theme: string;
  initials: string;
}

// Fictional shop profiles shared by the listing and details pages.
export const shops: readonly Shop[] = [
  {
    id: 1,
    name: 'Urban Groom Studio',
    category: 'Modern barbering',
    city: 'Chennai',
    rating: 4.9,
    reviewCount: 128,
    description: 'A relaxed neighborhood studio for sharp cuts and considered grooming.',
    services: [
      { name: 'Haircuts', price: 35, durationMinutes: 30 },
      { name: 'Beard trims', price: 25, durationMinutes: 20 },
      { name: 'Hair styling', price: 40, durationMinutes: 40 },
    ],
    stylists: [
      { name: 'Rohan Nair', specialties: ['Haircuts', 'Beard trims'] },
      { name: 'Anika Sen', specialties: ['Hair styling', 'Haircuts'] },
    ],
    theme: 'terracotta',
    initials: 'UG',
  },
  {
    id: 2,
    name: 'The Form Room',
    category: 'Salon & hair care',
    city: 'Bengaluru',
    rating: 4.8,
    reviewCount: 96,
    description: 'Personalized cuts and treatments with a focus on healthy, easy-to-style hair.',
    services: [
      { name: 'Haircuts', price: 35, durationMinutes: 40 },
      { name: 'Color', price: 65, durationMinutes: 90 },
      { name: 'Hair treatments', price: 50, durationMinutes: 45 },
    ],
    stylists: [
      { name: 'Kavya Rao', specialties: ['Haircuts', 'Color'] },
      { name: 'Zoya Ali', specialties: ['Hair treatments', 'Haircuts'] },
    ],
    theme: 'sage',
    initials: 'FR',
  },
  {
    id: 3,
    name: 'Grooming Hub',
    category: 'Barber & grooming',
    city: 'Hyderabad',
    rating: 4.9,
    reviewCount: 84,
    description: 'Classic barber craft meets contemporary fades and detailed beard care.',
    services: [
      { name: 'Fade cuts', price: 30, durationMinutes: 30 },
      { name: 'Beard shaping', price: 20, durationMinutes: 20 },
      { name: 'Hot towel shave', price: 25, durationMinutes: 25 },
    ],
    stylists: [
      { name: 'Arjun Rao', specialties: ['Fade cuts', 'Beard shaping'] },
      { name: 'Ishaan Shah', specialties: ['Hot towel shave', 'Beard shaping'] },
    ],
    theme: 'blue',
    initials: 'GH',
  },
  {
    id: 4,
    name: 'Olive & Oak Salon',
    category: 'Salon & styling',
    city: 'Coimbatore',
    rating: 4.7,
    reviewCount: 63,
    description: 'Thoughtful styling and restorative care in a warm, welcoming space.',
    services: [
      { name: 'Hair styling', price: 30, durationMinutes: 35 },
      { name: 'Blow dry', price: 35, durationMinutes: 30 },
      { name: 'Hair treatments', price: 50, durationMinutes: 45 },
    ],
    stylists: [
      { name: 'Leena Das', specialties: ['Hair styling', 'Blow dry'] },
      { name: 'Priya Menon', specialties: ['Hair treatments', 'Hair styling'] },
    ],
    theme: 'rose',
    initials: 'OO',
  },
].map((shop) => ({
  ...shop,
  startingPrice: Math.min(...shop.services.map((service) => service.price)),
}));
