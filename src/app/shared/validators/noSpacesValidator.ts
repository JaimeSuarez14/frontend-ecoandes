import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noSpacesValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value || '';
  if (value.includes(' ')) {
    return { noSpaces: true };
  }
  return null;
}
