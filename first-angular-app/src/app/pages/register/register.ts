import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  fullNameValidator,
  nonBlankValidator,
  normalizeFullName,
  publicEmailDomainValidator,
  registrationLimits,
  registrationPasswordValidator,
} from './register.validators';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  protected readonly demoNotice = signal('');
  protected readonly limits = registrationLimits;
  protected readonly registrationForm = new FormGroup({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [fullNameValidator],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        nonBlankValidator,
        Validators.maxLength(registrationLimits.email),
        Validators.email,
        publicEmailDomainValidator,
      ],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [registrationPasswordValidator],
    }),
  });

  protected showErrors(control: AbstractControl<string>): boolean {
    return control.invalid && control.touched;
  }

  protected clearNotice(): void {
    this.demoNotice.set('');
  }

  protected normalizeField(field: 'fullName' | 'email'): void {
    const control = this.registrationForm.controls[field];
    const normalized =
      field === 'fullName' ? normalizeFullName(control.value) : control.value.trim();
    if (normalized !== control.value) {
      control.setValue(normalized);
      this.clearNotice();
    }
  }

  protected submit(formElement: HTMLFormElement): void {
    this.clearNotice();
    this.normalizeField('fullName');
    this.normalizeField('email');
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.invalid) {
      const fields = ['fullName', 'email', 'password'] as const;
      const firstInvalid = fields.find((field) => this.registrationForm.controls[field].invalid);
      const input = firstInvalid ? formElement.elements.namedItem(firstInvalid) : null;
      if (input instanceof HTMLInputElement) input.focus();
      return;
    }

    this.demoNotice.set(
      'Account creation is a UI preview. Registration will be connected in a later step.',
    );
  }
}
