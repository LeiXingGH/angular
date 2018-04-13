/*你要从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器。*/
import {Component, NgModule, OnInit} from '@angular/core';
import {Hero} from '../hero';
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
export class HeroesComponent implements OnInit {/*始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。*/
  /*hero = '哇';往HeroesComponent（HeroesComponent是一个对象）中添加一个 hero 属性，用来表示一个名叫 “Windstorm” 的英雄。*/
  hero: Hero = {
    id: 1,
    name: 'Superman',
    skill: 'JS'
  };
  constructor() { }

  ngOnInit() {/*ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。*/

  }
}
