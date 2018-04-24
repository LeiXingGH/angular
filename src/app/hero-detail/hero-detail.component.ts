import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component ({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;//hero 属性必须是一个带有 @Input() 装饰器的输入属性，因为外部的 HeroesComponent 组件将会绑定到它。就像这样<app-hero-detail [hero]="selectedHero"></app-hero-detail>
  constructor() { }

  ngOnInit() {
  }

}
