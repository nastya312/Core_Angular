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
export class ListDataService {
  getSersRating() {
    throw new Error('Method not implemented.');
  }

  private baseApiUrl = `${this.apiUrl}api/`
  public bool!:boolean

  constructor(private http:HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) { }
 
  getSers(): Observable<Ser[]> {
    return this.http.get<Ser[]>(`${this.baseApiUrl}Sers`)
  }

  getRol(): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseApiUrl}Values/getrole`,this.bool).pipe(tap(res => this.bool = res))
  }

  DelSer(id: number): Observable<Ser> {
     return this.http.delete<Ser>(`${this.apiUrl}api/Sers/${id}`);
    }


}

