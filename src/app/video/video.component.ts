import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }

  public boton() {
    location.href = '/single';
  }

  public timer() {
    setTimeout(this.boton , 50000);
  }

  ngOnInit() {
  }

}
