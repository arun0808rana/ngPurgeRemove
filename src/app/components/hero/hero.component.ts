import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  handleHoverOnDropbox(){
    document.getElementById('vector-bg').style.display = 'none';
    document.getElementsByClassName('drop-box')[0]['style'].backgroundColor = '#FFF6F4';
  }

  handleMouseLeaveOnDropBox(){
    document.getElementById('vector-bg').style.display = 'block';
    document.getElementsByClassName('drop-box')[0]['style'].backgroundColor = '#fff';

  }
}
