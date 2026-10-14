import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Shop {
  id: number;
  name: string;
  category: string;
  city: string;
  rating: number;
  reviewCount: number;
  description: string;
  services: string[];
  startingPrice: number;
  theme: string;
  initials: string;
}

@Component({
  selector: 'app-shops',
  imports: [RouterLink],
  templateUrl: './shops.html',
  styleUrl: './shops.css',
})
export class Shops {
  protected readonly shops: Shop[] = [
    {
      id: 1,
      name: 'Urban Groom Studio',
      category: 'Modern barbering',
      city: 'Chennai',
      rating: 4.9,
      reviewCount: 128,
      description: 'A relaxed neighborhood studio for sharp cuts and considered grooming.',
      services: ['Haircuts', 'Beard trims', 'Hair styling'],
      startingPrice: 25,
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
      services: ['Haircuts', 'Color', 'Hair treatments'],
      startingPrice: 35,
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
      services: ['Fade cuts', 'Beard shaping', 'Hot towel shave'],
      startingPrice: 20,
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
      services: ['Hair styling', 'Blow dry', 'Hair treatments'],
      startingPrice: 30,
      theme: 'rose',
      initials: 'OO',
    },
  ];
}
