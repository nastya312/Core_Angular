import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { MenuComponent } from './structure/menu/menu.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ListDataComponent } from './date/list-data/list-data.component';
import { AUTH_API_URL } from './app-injection_tokens';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { ACCESS_TOKEN_KEY, AuthService } from './authorization/auth.service'
import { MatTableModule } from '@angular/material/table';
import { SerpageComponent } from './date/serpage/serpage.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VidpageComponent } from './date/vidpage/vidpage.component';
import { AddComponent } from './date/add/add.component'
import { AddService } from './date/add/add.service';
import { AddvidComponent } from './date/addvid/addvid.component';
import { AddvidService } from './date/addvid/addvid.service';
import { FiltrComponent } from './date/filtr/filtr.component';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AddvidService,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ListDataComponent,
    AuthorizationComponent,
    SerpageComponent,
    VidpageComponent,
    AddComponent,
    AddService,
    AddvidComponent,
    FiltrComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,

    NgbModule,
    MatTableModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,


    JwtModule.forRoot({
      config: {
            tokenGetter,
            allowedDomains: environment.tokenWhiteListenedDomains
          }
        })
     ],
  providers: [{
    provide: AUTH_API_URL,
    useValue: environment.AuthApi
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
