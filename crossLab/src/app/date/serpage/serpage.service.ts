import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTH_API_URL } from 'src/app/app-injection_tokens';
import { Ser } from '../model/ser';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class SerpageService {

  private baseApiUrl = `${this.apiUrl}api/`
  public bool!:boolean

  constructor(private http:HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) { }

  getVid(id:number): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.baseApiUrl}Sers/${id}/video`)
  }
  
  getSer(id:number): Observable<Ser> {
    return this.http.get<Ser>(`${this.baseApiUrl}Sers/${id}`)
  }

  
  getRol(): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseApiUrl}Values/getrole`,this.bool).pipe(tap(res => this.bool = res))
  }

  DelVideo(id: number): Observable<Video> {
    return this.http.delete<Video>(`${this.apiUrl}api/Videos/${id}`);
   }

}
