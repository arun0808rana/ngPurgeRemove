import { Component, OnInit } from '@angular/core';
declare let Cocoen: any;

@Component({
  selector: 'app-image-comparison',
  templateUrl: './image-comparison.component.html',
  styleUrls: ['./image-comparison.component.scss'],
})
export class ImageComparisonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.onload = function () {
      new Cocoen(document.querySelector('.cocoen'));
     
    };
  }
}
