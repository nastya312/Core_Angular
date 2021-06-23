import { Component, OnInit, ViewChild } from '@angular/core';
import { Ser } from '../model/ser';
import { ListDataService } from './list-data.service';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  sers: Ser[] = []
  columns = ['id', 'name', 'summary']
  res!:boolean

  
  constructor(private ld: ListDataService,
    private router: Router,) { }

  ngOnInit(): void {
    this.ld.getSers()
    .subscribe(res => this.sers = res);
    this.ld.getRol().subscribe(res => {this.res = this.ld.bool;},)
  }

      
  onSubmit(id: number) {
    this.ld.DelSer(id).subscribe(res => {this.ngOnInit();}, error => {
      alert('Неправильный логин или пароль')
    })}

}
