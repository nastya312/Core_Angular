import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { AuthService } from 'src/app/authorization/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  public get isLoggedIn() : boolean {
    return this.as.isAuthenticated()
  }

  constructor(
    private as: AuthService
  ) { }

  ngOnInit(): void {
  }

}
