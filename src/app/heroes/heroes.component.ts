/*你要从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器。*/
import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';
/*@Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。*/

/*selector— 组件的选择器（CSS 元素选择器）可以在是用这个标签的父级css中使用该标签作为标签选择器来添加样式
templateUrl— 组件模板文件的位置。
styleUrls— 组件私有 CSS 样式表文件的位置。
*/
@Component({
  /*selector相当于声明标签，与声明组件是不同的，组件的声明要在@NgModule中*/
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(dada: Hero): void {
    this.selectedHero = dada;
  }
  constructor() { }

  ngOnInit() {/*ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。*/

  }
}
