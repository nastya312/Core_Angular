import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_API_URL } from 'src/app/app-injection_tokens';
import { Video } from '../model/video';


@Component({
  selector: 'app-editvid',
  templateUrl: './addvid.component.html',
  styleUrls: ['./addvid.component.scss']
})

export class AddvidService {

  sers: Video = new Video();
  get_video: Video = new Video();
  private baseApiUrl = `${this.apiUrl}api/`;
  id: any;

  ngOnInit(): void {

  this.id = this.activatedRoute.snapshot.paramMap.get("id")!;

  this.getVideo(this.id)
  .subscribe(res => this.sers = res);
}



  constructor(private http: HttpClient, 
    private router: Router,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private activatedRoute: ActivatedRoute
    ) { }


  EditVideo(sers: Video): Observable<Video> {
    return this.http.put<Video>(`${this.apiUrl}api/Videos/${this.id}`,
    sers)
    }
    
    onSubmit(sers: Video) {
      this.EditVideo(sers).subscribe(res => {this.router.navigate(['/Video', this.id])}, error => {
          alert('Неправильный логин или пароль')
        })
      }

      getVideo(id:number): Observable<Video> {
        return this.http.get<Video>(`${this.baseApiUrl}Videos/${id}`)
      }

}
