import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted: boolean = false;

  submitForm(): void {
    this.submitted = true;

    console.log('Contact form submitted:', this.formData);
  }

}