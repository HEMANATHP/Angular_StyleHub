import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the homepage title', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Find your next look with confidence.');
  });

  it('should navigate to Services and return home while preserving the shared header', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    const servicesLink = page.querySelector<HTMLAnchorElement>('nav a[href="/services"]');
    expect(servicesLink).not.toBeNull();
    servicesLink!.click();
    await fixture.whenStable();

    expect(router.url).toBe('/services');
    expect(page.querySelector('h1')?.textContent).toContain(
      'Find the right service for your next look.',
    );
    expect(page.querySelectorAll('app-services article').length).toBe(3);
    expect(servicesLink?.getAttribute('aria-current')).toBe('page');
    expect(page.querySelector('.topbar .brand-name')?.textContent).toBe('StyleHub');
    expect(document.activeElement).toBe(page.querySelector('main'));

    const homeLink = page.querySelector<HTMLAnchorElement>('app-services a[href="/"]');
    expect(homeLink).not.toBeNull();
    homeLink!.click();
    await fixture.whenStable();

    expect(router.url).toBe('/');
    expect(page.querySelector('h1')?.textContent).toContain('Find your next look with confidence.');
  });

  it('should navigate from Services to customer bookings using Book now', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/services');
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain(
      'Find the right service for your next look.',
    );
    page.querySelector<HTMLButtonElement>('.desktop-book-button')!.click();
    await fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/bookings');
    expect(page.querySelector('h1')?.textContent).toContain('Your appointments, all in one place.');
  });
});
