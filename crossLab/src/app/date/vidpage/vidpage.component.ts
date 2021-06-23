import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../model/video';
import { VidpageService } from './vidpage.service';

@Component({
  selector: 'app-vidpage',
  templateUrl: './vidpage.component.html',
  styleUrls: ['./vidpage.component.scss']
})

export class VidpageComponent implements OnInit {

  video!: Video;

  constructor(private ld: VidpageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    let id = this.activatedRoute.snapshot.paramMap.get("id")!;
  
    this.ld.getVideo(+id)
    .subscribe(res => this.video = res);
  }

}
