import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserSession {
  username: string;
  role: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'autodrive-session';
  private readonly userSubject = new BehaviorSubject<UserSession | null>(this.loadSession());

  readonly user$ = this.userSubject.asObservable();

  get currentUser(): UserSession | null {
    return this.userSubject.value;
  }

  login(username: string, password: string): boolean {
    const normalizedUsername = username.trim();

    if (!normalizedUsername || password !== 'dealer') {
      return false;
    }

    const session: UserSession = {
      username: normalizedUsername,
      role: 'dealer',
      token: crypto.randomUUID()
    };

    localStorage.setItem(this.storageKey, JSON.stringify(session));
    this.userSubject.next(session);
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.userSubject.next(null);
  }

  private loadSession(): UserSession | null {
    const rawSession = localStorage.getItem(this.storageKey);

    if (!rawSession) {
      return null;
    }

    try {
      return JSON.parse(rawSession) as UserSession;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }
}
