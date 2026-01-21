
import { DatePipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TestService } from '../services/test.service';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,SlicePipe,RouterLink],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
 contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

}
