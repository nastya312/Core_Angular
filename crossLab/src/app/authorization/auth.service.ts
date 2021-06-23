import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AUTH_API_URL } from '../app-injection_tokens';
import { Token } from './model/token';
import { tap } from 'rxjs/operators';

export const ACCESS_TOKEN_KEY = 'access_token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }


  token(login: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}api/Account/token`, {
      login, password
    }).pipe(tap(token => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
      })
    )
  }

  isAuthenticated(): boolean {
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token && !this.jwtHelper.isTokenExpired(token) ? true : false
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['']);
  }

}

