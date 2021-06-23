import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API_URL } from 'src/app/app-injection_tokens';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class VidpageService {

  private baseApiUrl = `${this.apiUrl}api/`

  constructor(private http:HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) { }

  getVideo(id:number): Observable<Video> {
    return this.http.get<Video>(`${this.baseApiUrl}Videos/${id}`)
  }

}
