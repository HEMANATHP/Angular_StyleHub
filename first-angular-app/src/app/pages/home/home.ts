import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { groomingServices } from '../../data/grooming-services';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly heroTitle = 'Find your next look with confidence.';

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

  protected readonly serviceCards = groomingServices;

  protected readonly stats = [
    { value: '3.2k+', label: 'Happy clients' },
    { value: '180+', label: 'Partner shops' },
    { value: '4.9/5', label: 'Average rating' },
  ];
}
