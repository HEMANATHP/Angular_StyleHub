import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const registrationLimits = {
  fullName: 100,
  email: 254,
  passwordMin: 8,
  passwordMax: 128,
} as const;

export function normalizeFullName(value: string): string {
  return value.normalize('NFC').trim().replace(/\s+/gu, ' ');
}

export const nonBlankValidator: ValidatorFn = (
  control: AbstractControl<string>,
): ValidationErrors | null => (control.value.trim() ? null : { required: true });

export const fullNameValidator: ValidatorFn = (
  control: AbstractControl<string>,
): ValidationErrors | null => {
  const name = normalizeFullName(control.value);
  if (!name) return { required: true };
  if (Array.from(name).length > registrationLimits.fullName) return { nameTooLong: true };

  // Allow mononyms, international scripts, initials, and common name punctuation.
  // Joiners are needed by some scripts; other invisible/control characters are excluded.
  const allowedCharacters = /^[\p{L}\p{M} .'\u2019\u02BC\u2010\u2011\u200C\u200D-]+$/u;
  return /\p{L}/u.test(name) && allowedCharacters.test(name) ? null : { nameCharacters: true };
};

export const publicEmailDomainValidator: ValidatorFn = (
  control: AbstractControl<string>,
): ValidationErrors | null => {
  const email = control.value.trim();
  const at = email.lastIndexOf('@');
  if (at < 0) return null; // Angular's email validator handles the overall address format.

  const labels = email.slice(at + 1).split('.');
  const validLabel = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  return labels.length >= 2 &&
    labels.every((label) => validLabel.test(label)) &&
    /[a-z]/i.test(labels.at(-1) ?? '')
    ? null
    : { emailDomain: true };
};

export const registrationPasswordValidator: ValidatorFn = (
  control: AbstractControl<string>,
): ValidationErrors | null => {
  const password = control.value;
  if (!password) return { required: true };
  if (!/[^\p{White_Space}\p{Cc}\p{Cf}]/u.test(password)) return { passwordBlank: true };
  if (/[\p{Cc}\p{Cs}]/u.test(password)) return { passwordCharacters: true };

  // Count Unicode code points, and never trim or normalize a password.
  const length = Array.from(password).length;
  if (length < registrationLimits.passwordMin) return { minlength: true };
  if (length > registrationLimits.passwordMax) return { maxlength: true };
  return null;
};
