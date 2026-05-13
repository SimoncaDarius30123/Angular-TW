import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.css'
})
export class ProtectedComponent {
  private readonly authService = inject(AuthService);

  readonly user$ = this.authService.user$;
  readonly metrics = [
    { label: 'Lead-uri noi', value: '6' },
    { label: 'Masini active', value: '14' },
    { label: 'Test drive-uri', value: '3 azi' }
  ];
  readonly tasks = [
    'Verifica cererile noi de evaluare',
    'Confirma disponibilitatea pentru test drive',
    'Actualizeaza preturile masinilor rezervate'
  ];
}
