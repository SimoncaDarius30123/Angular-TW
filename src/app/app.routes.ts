import { Routes } from '@angular/router';

import { authGuard } from './core/auth.guard';
import { ApiDemoComponent } from './pages/api-demo/api-demo.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProtectedComponent } from './pages/protected/protected.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'AutoDrive' },
  { path: 'vinde', component: FeedbackComponent, title: 'Vinde masina' },
  { path: 'stoc', component: ApiDemoComponent, title: 'Masini disponibile' },
  { path: 'login', component: LoginComponent, title: 'Cont dealer' },
  {
    path: 'dealer',
    component: ProtectedComponent,
    canActivate: [authGuard],
    title: 'Panou dealer'
  },
  { path: '**', redirectTo: '' }
];
