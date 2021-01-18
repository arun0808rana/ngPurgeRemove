import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-stats',
  templateUrl: './conversion-stats.component.html',
  styleUrls: ['./conversion-stats.component.scss'],
})
export class ConversionStatsComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit(): void {
    // window.addEventListener('scroll', this.onScroll, true);
  }

  onScroll(e) {
    ++this.counter;
    if (this.counter == 1) return;

    document.getElementsByClassName('convJS')[0]['style'].animationName =
      'slideUp';
    document.getElementsByClassName('convJS')[0]['style'].height = '99.99px';

    document.getElementsByClassName('convJS')[1]['style'].animationName =
      'slideUp2';
    document.getElementsByClassName('convJS')[1]['style'].height = '308.1px';

    document.getElementsByClassName('slideupText')[0]['style'].animationName =
      'slideUpTxt';
    document.getElementsByClassName('slideupText')[0]['style'].top = '0px';
    document.getElementsByClassName('slideupText')[1]['style'].animationName =
      'slideUpTxt';
    document.getElementsByClassName('slideupText')[1]['style'].top = '0px';
  }
}
