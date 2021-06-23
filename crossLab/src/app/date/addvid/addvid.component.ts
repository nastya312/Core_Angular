import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTH_API_URL } from 'src/app/app-injection_tokens';
import { Video } from '../model/video';

@Component({
  selector: 'app-addvid',
  templateUrl: './addvid.component.html',
  styleUrls: ['./addvid.component.scss']
})
export class AddvidComponent implements OnInit {

  sers: Video = new Video();
  id!: number;
  id_numb!: number;
  
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private activatedRoute: ActivatedRoute
  ) {  
  }

  ngOnInit(): void { 

    this.id_numb = +this.activatedRoute.snapshot.paramMap.get("id")!;
    this.sers.serId = this.id_numb;
  }

    AddVideo(sers: Video): Observable<Video> {
      return this.http.post<Video>(`${this.apiUrl}api/Videos`,
        sers
      ).pipe(tap(res => {
        this.id = res.id;
      }))
    }

    onSubmit(sers: Video) {
      this.AddVideo(sers).subscribe(res => {this.router.navigate(['/Video', this.id])}, error => {
          alert('Неправильный логин или пароль')
        })
      }
}
