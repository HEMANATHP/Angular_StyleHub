import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stylists',
  imports: [RouterLink],
  templateUrl: './stylists.html',
  styleUrl: './stylists.css',
})
export class Stylists {
  // Fictional profiles for exploring the customer experience.
  protected readonly stylists = [
    {
      id: 1,
      name: 'Ravi Kumar',
      initials: 'RK',
      role: 'Hair stylist',
      shopName: 'Style Studio',
      city: 'Chennai',
      experienceYears: 6,
      description: 'Modern cuts and everyday styling tailored to your hair texture and routine.',
      specialties: ['Haircuts', 'Layered cuts', 'Hair styling'],
    },
    {
      id: 2,
      name: 'Arjun Rao',
      initials: 'AR',
      role: 'Barber & grooming specialist',
      shopName: 'Grooming Hub',
      city: 'Hyderabad',
      experienceYears: 5,
      description: 'Clean fades, precise beard shaping, and a polished finish for your next look.',
      specialties: ['Fade cuts', 'Beard shaping', 'Beard grooming'],
    },
    {
      id: 3,
      name: 'Meera Iyer',
      initials: 'MI',
      role: 'Hair care specialist',
      shopName: 'Elite Cuts',
      city: 'Bengaluru',
      experienceYears: 8,
      description: 'Personalized hair care and conditioning treatments for softer, healthier-looking hair.',
      specialties: ['Hair treatments', 'Conditioning', 'Hair styling'],
    },
  ];
}
