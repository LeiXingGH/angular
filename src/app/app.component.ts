import { Component } from '@angular/core';

@Component({/*selector指定HTML模板的名称,templateUrl和styleUrls绑定HTML和css的关系*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']/*理论上可以引入项目中的任何位置的css文件例如其他组件的CSS（如styleUrls: ['./heroes/heroes.component.css']）也是可以引入的*/
})
export class AppComponent {
  title = '后台管理系统';
}
