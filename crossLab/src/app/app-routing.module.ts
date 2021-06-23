import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AddComponent } from './date/add/add.component';
import { AddService } from './date/add/add.service';
import { AddvidComponent } from './date/addvid/addvid.component';
import { AddvidService } from './date/addvid/addvid.service';
import { FiltrComponent } from './date/filtr/filtr.component';
import { ListDataComponent } from './date/list-data/list-data.component';
import { SerpageComponent } from './date/serpage/serpage.component';
import { VidpageComponent } from './date/vidpage/vidpage.component';

const routes: Routes = [
  { path: 'Login', component: AuthorizationComponent },
  { path: 'ListDate', component: ListDataComponent },
  { path: 'Serial/:id', component: SerpageComponent },
  { path: 'Video/:id', component: VidpageComponent },
  { path: 'Add', component: AddComponent },
  { path: 'Edit/:id', component: AddService },
  { path: 'AddVideo/:id', component: AddvidComponent },
  { path: 'EditVideo/:id', component: AddvidService },
  { path: 'Filtr', component: FiltrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
