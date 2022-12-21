import { Component, Input } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() fields: string[] = [];

  constructor(private formService: FormService) {}

  onSubmit() {
    const formData: Record<string, string> = {};
    this.formService.submitForm(formData);
  }
}
