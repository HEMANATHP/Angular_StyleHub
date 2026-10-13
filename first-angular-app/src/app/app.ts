import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly heroTitle = 'Find your next look with confidence.';

  protected readonly bookingNotice = signal('');

  protected readonly navItems = ['Home', 'Services', 'Stylists', 'Marketplace', 'Bookings'];

  protected readonly featurePoints = [
    {
      title: 'Discover local experts',
      text: 'Browse trusted salons, barbers, and stylists near your area in minutes.',
    },
    {
      title: 'Book appointments easily',
      text: 'Choose a service, pick a time slot, and confirm your visit without back-and-forth.',
    },
    {
      title: 'Shop grooming essentials',
      text: 'Find premium haircare and styling products from vendors in the same marketplace.',
    },
  ];

  protected readonly serviceCards = [
    {
      title: 'Haircut & styling',
      description: 'Precision cuts and modern styling tailored to your face shape and routine.',
      price: 'From $35',
    },
    {
      title: 'Beard grooming',
      description: 'Shape, trim, and maintain your beard with professional finishing touches.',
      price: 'From $25',
    },
    {
      title: 'Hair care treatment',
      description: 'Restore moisture, volume, and shine with salon-grade conditioning care.',
      price: 'From $40',
    },
  ];

  protected readonly stats = [
    { value: '3.2k+', label: 'Happy clients' },
    { value: '180+', label: 'Partner shops' },
    { value: '4.9/5', label: 'Average rating' },
  ];

  protected bookNow(): void {
    this.bookingNotice.set('Online booking is coming soon. Explore our featured services below!');
  }
}
