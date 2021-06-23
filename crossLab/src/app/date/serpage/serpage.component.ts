import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ser } from '../model/ser';
import { Video } from '../model/video';
import { SerpageService } from './serpage.service';

@Component({
  selector: 'app-serpage',
  templateUrl: './serpage.component.html',
  styleUrls: ['./serpage.component.scss']
})
export class SerpageComponent implements OnInit {

  videos: Video[] = []
  Serial!: Ser;


  columns = ['id', 'name', 'summary']
  res!:boolean

  constructor(private ld: SerpageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    let id = this.activatedRoute.snapshot.paramMap.get("id")!;
  
    this.ld.getSer(+id)
    .subscribe(res => this.Serial = res);

    this.ld.getVid(+id)
    .subscribe(res => this.videos = res);

    this.ld.getRol().subscribe(res => {this.res = this.ld.bool;},)

  }

  onSubmit(id: number) {
    this.ld.DelVideo(id).subscribe(res => {this.ngOnInit();}, error => {
      alert('Неправильный логин или пароль')
    })}

}
