import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AuthService } from 'src/app/authorization/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = "header"
  @Input()
  public sidenavDrawer!: MatDrawer;

  public get isLoggedIn() : boolean {
    return this.as.isAuthenticated()
  }

  constructor(
    private as: AuthService
  ) { }
  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.sidenavDrawer.toggle();
  }

}
