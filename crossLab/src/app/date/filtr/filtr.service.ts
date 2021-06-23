import { HttpClient, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API_URL } from 'src/app/app-injection_tokens';
import { Class } from '../model/class';
import { Ser } from '../model/ser';

@Injectable({
  providedIn: 'root'
})
export class FiltrService {

  private baseApiUrl = `${this.apiUrl}api/`

  constructor(private http:HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) { }
 
 
  getSers(): Observable<Ser[]> {
    return this.http.get<Ser[]>(`${this.baseApiUrl}Sers`)
  }

  getSersRating(): Observable<Class[]> {
    return this.http.get<Class[]>(`${this.baseApiUrl}Sers/rating`)
  }

  getSersFresh(): Observable<Class[]> {
    return this.http.get<Class[]>(`${this.baseApiUrl}Sers/fresh`)
  }

  getSersTime(): Observable<Class[]> {
    return this.http.get<Class[]>(`${this.baseApiUrl}Sers/time`)
  }

  getSersShort(): Observable<Class[]> {
    return this.http.get<Class[]>(`${this.baseApiUrl}Sers/short`)
  }




  // getRole(): string {
  //   return this.http.get<string>(`${this.baseApiUrl}Sers/ratings`)
  // }
  
}
