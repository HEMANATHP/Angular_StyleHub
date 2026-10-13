import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly bookingNotice = signal('');
  protected readonly upcomingPages = ['Stylists', 'Marketplace', 'Bookings'];

  protected bookNow(): void {
    this.bookingNotice.set('Online booking is coming soon. Explore our featured services below!');
  }
}
