import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../model/class';
import { Ser } from '../model/ser';
import { FiltrService } from './filtr.service';

@Component({
  selector: 'app-filtr',
  templateUrl: './filtr.component.html',
  styleUrls: ['./filtr.component.scss']
})
export class FiltrComponent implements OnInit {

  sers: Class[] = []
  init: Ser[] = []
  data = ['id', 'name', 'summary']
  var:Class = new Class()
  columns = ['id', 'name', 'summary']
  columns0 = ['id', 'name', 'жанр']
  columns1 = ['id', 'название', 'количество сезонов']
  columns2 = ['id', 'название', 'жанр']
  // columns5 = ['id', 'сезон сериала', 'время просмотра']
  columns3 = ['id', 'название сериала', 'время просмотра']
  columns4 = ['id', 'название сериала', 'название серии']

  
  constructor(private ld: FiltrService,
    private router: Router) { 
      
    }

  ngOnInit(): void {
    
  }

      
  onSubmit1() {
    this.ld.getSersRating().subscribe((res: Class[]) => {this.sers = res;
    this.data = this.columns1;
    this.ngOnInit;
    })
    }

  ngOnChanges() {
  }

    onSubmit2() {
      this.ld.getSersFresh().subscribe((res: Class[]) => {this.sers = res;
        this.data = this.columns2;
        this.ngOnInit;
      })
      }

      onSubmit3() {
        this.ld.getSersTime().subscribe((res: Class[]) => this.sers = res)
        this.data = this.columns3;
        this.ngOnInit;
        }

        onSubmit4() {
          this.ld.getSersShort().subscribe((res: Class[]) => this.sers = res)
          this.data = this.columns4;
          this.ngOnInit;
          }

          // onSubmit5() {
          //   this.ld.getSersRating().subscribe((res: Class[]) => this.sers = res)
          //   }

}
