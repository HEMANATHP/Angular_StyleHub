import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly demoNotice = signal('');

  protected showDemoNotice(event: SubmitEvent): void {
    event.preventDefault();
    this.demoNotice.set('Sign-in is a UI preview. Authentication will be added in a later step.');
  }
}
