import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly demoNotice = signal('');
  protected readonly passwordVisible = signal(false);

  protected togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
  }

  protected showDemoNotice(event: SubmitEvent): void {
    event.preventDefault();
    this.demoNotice.set('Sign-in is a UI preview. Authentication will be added in a later step.');
  }
}
