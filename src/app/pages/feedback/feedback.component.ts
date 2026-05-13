import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface FeedbackSubmission {
  ownerName: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  year: number;
  askingPrice: number;
  message: string;
  acceptContact: boolean;
}

type FeedbackControlName = keyof FeedbackSubmission;

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly feedbackForm = this.formBuilder.nonNullable.group({
    ownerName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    year: [2020, [Validators.required, Validators.min(1995), Validators.max(2026)]],
    askingPrice: [12000, [Validators.required, Validators.min(1000)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    acceptContact: [true, Validators.requiredTrue]
  });

  submittedFeedback: FeedbackSubmission | null = null;

  submitFeedback(): void {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }

    this.submittedFeedback = this.feedbackForm.getRawValue();
    this.feedbackForm.reset({
      ownerName: '',
      email: '',
      phone: '',
      brand: '',
      model: '',
      year: 2020,
      askingPrice: 12000,
      message: '',
      acceptContact: true
    });
  }

  isInvalid(controlName: FeedbackControlName): boolean {
    const control = this.feedbackForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
