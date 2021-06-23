import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTH_API_URL } from 'src/app/app-injection_tokens';
import { Ser } from '../model/ser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})


export class AddComponent implements OnInit { 

  sers: Ser = new Ser();
  id!: number;
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    @Inject(AUTH_API_URL) private apiUrl: string
  ) { }
  

  ngOnInit(): void { 
  }

    Addser(sers: Ser): Observable<Ser> {
      return this.http.post<Ser>(`${this.apiUrl}api/Sers`,
        sers
      ).pipe(tap(ser => {
        this.id = ser.id;
      }))
    }

    onSubmit(sers: Ser) {
      this.Addser(sers).subscribe(res => {this.router.navigate(['/Serial', this.id])}, error => {
          alert('Неправильный логин или пароль')
        })
      }
      
}
