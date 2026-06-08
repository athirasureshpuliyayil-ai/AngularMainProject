import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;
  isSubmitting = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitted = true;
        this.contactData = { name: '', email: '', message: '' };
        form.resetForm();

        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }, 1500);
    }
  }
}
