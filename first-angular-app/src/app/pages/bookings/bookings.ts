import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type BookingFilter = 'All bookings' | 'Upcoming' | 'Past';
type BookingStatus = 'Confirmed' | 'Completed';

interface Booking {
  id: string;
  service: string;
  shop: string;
  city: string;
  stylist: string;
  date: string;
  time: string;
  price: number;
  status: BookingStatus;
}

@Component({
  selector: 'app-bookings',
  imports: [RouterLink, DatePipe, CurrencyPipe],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings {
  protected readonly filters: BookingFilter[] = ['All bookings', 'Upcoming', 'Past'];
  protected readonly selectedFilter = signal<BookingFilter>('All bookings');

  // Sample appointments; real customer bookings will come from the booking API.
  protected readonly bookings: Booking[] = [
    {
      id: 'SH-1001',
      service: 'Haircut & styling',
      shop: 'Style Studio',
      city: 'Chennai',
      stylist: 'Ravi Kumar',
      date: '2026-10-16',
      time: '10:00',
      price: 35,
      status: 'Confirmed',
    },
    {
      id: 'SH-1002',
      service: 'Beard grooming',
      shop: 'Grooming Hub',
      city: 'Hyderabad',
      stylist: 'Arjun Rao',
      date: '2026-10-19',
      time: '15:30',
      price: 25,
      status: 'Confirmed',
    },
    {
      id: 'SH-0998',
      service: 'Hair care treatment',
      shop: 'Elite Cuts',
      city: 'Bengaluru',
      stylist: 'Meera Iyer',
      date: '2026-10-10',
      time: '11:00',
      price: 40,
      status: 'Completed',
    },
  ];

  protected readonly upcomingCount = this.bookings.filter(
    (booking) => booking.status === 'Confirmed',
  ).length;
  protected readonly completedCount = this.bookings.filter(
    (booking) => booking.status === 'Completed',
  ).length;

  protected readonly filteredBookings = computed(() => {
    const filter = this.selectedFilter();
    return this.bookings.filter(
      (booking) =>
        filter === 'All bookings' ||
        (filter === 'Upcoming' && booking.status === 'Confirmed') ||
        (filter === 'Past' && booking.status === 'Completed'),
    );
  });

  protected selectFilter(filter: BookingFilter): void {
    this.selectedFilter.set(filter);
  }
}
