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
  protected readonly upcomingPages = ['Marketplace', 'Bookings'];
  protected readonly mobileMenuOpen = signal(false);

  protected bookNow(): void {
    this.bookingNotice.set('Online booking is coming soon. Explore our featured services below!');
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected onRouteActivated(pageContent: HTMLElement): void {
    pageContent.focus({ preventScroll: true });

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}
