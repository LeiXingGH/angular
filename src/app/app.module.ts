import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*AppComponent组件叫壳组件，组件的名称一般第一个字母都是大写*/
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  /*declarations声明组件;每个组件都必须声明在（且只能声明在）一个 NgModule 中。注意 AppModule 声明了应用中的所有组件，AppComponent 和 HeroesComponent。使用ng g component 组件名称   g指generate的简写表示生成*/
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
