import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTH_API_URL } from 'src/app/app-injection_tokens';
import { Ser } from '../model/ser';
import { SerpageService } from '../serpage/serpage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddService {

  id: any;

  ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.paramMap.get("id")!;

  this.ld.getSer(this.id)
  .subscribe(res => this.sers = res);
  }
  
  sers: Ser = new Ser();
  private baseApiUrl = `${this.apiUrl}api/`

  constructor(private http: HttpClient, 
    private ld: SerpageService,
    private router: Router,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private activatedRoute: ActivatedRoute
    ) { }


  EditSer(sers: Ser): Observable<Ser> {
    return this.http.put<Ser>(`${this.apiUrl}api/Sers/${this.id}`,
    sers)
    }
    
    onSubmit(sers: Ser) {
      this.EditSer(sers).subscribe(res => {this.router.navigate(['/Serial', this.id])}, error => {
          alert('Неправильный логин или пароль')
        })
      }

      getSer(id:number): Observable<Ser> {
        return this.http.get<Ser>(`${this.baseApiUrl}Sers/${id}`)
      }
}
