import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  protected readonly mobileMenuOpen = signal(false);

  protected bookNow(): void {
    void this.router.navigateByUrl('/bookings');
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected skipToContent(event: Event, pageContent: HTMLElement): void {
    event.preventDefault();
    this.closeMobileMenu();
    pageContent.focus();
  }

  protected onRouteActivated(pageContent: HTMLElement): void {
    pageContent.focus({ preventScroll: true });

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}
