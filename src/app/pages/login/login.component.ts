import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly credentials = {
    username: 'dealer',
    password: 'dealer'
  };

  errorMessage = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  login(): void {
    const loggedIn = this.authService.login(this.credentials.username, this.credentials.password);

    if (!loggedIn) {
      this.errorMessage = 'Date de acces invalide. Pentru prezentare foloseste parola "dealer".';
      return;
    }

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dealer';
    void this.router.navigateByUrl(returnUrl);
  }
}
