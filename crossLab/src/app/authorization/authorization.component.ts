import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit {

  public get isLoggedIn() : boolean {
    return this.as.isAuthenticated()
  }

  constructor(
    private as: AuthService
  ) { }

  token(login: string, password: string) {
    this.as.token(login, password)
    .subscribe(res => {
    }, error => {
      alert('Неправильный логин или пароль')
    })
  }

  logout() {
    this.as.logout()
  }

  ngOnInit(): void {
  }

}
