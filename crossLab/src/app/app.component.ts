import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crossLab';

  public menu!: MatDrawer;  

  public setSidenav(menu: MatDrawer) {
    this.menu = menu;
  }

  public get isLoggedIn() : boolean {
    return this.as.isAuthenticated()
  }

  constructor(
    private as: AuthService
  ) { }

  token(username: string, password: string) {
    this.as.token(username, password)
    .subscribe(res => {

    }, error => {
      alert('Неправильный логин или пароль')
    })
  }

  logout() {
    this.as.logout()
  }
}
