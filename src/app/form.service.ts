import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  submitForm(formData: Record<string, string>): void {
    console.log(formData);
  }
}
