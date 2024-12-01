import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { PereComponent } from './communinicationInterComonents/pere/pere.component';
import { FilsComponent } from './communinicationInterComonents/fils/fils.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { BusinessCardComponent } from './business-card/business-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TwoComponent,
    PereComponent,
    FilsComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    ColorChangerComponent,
    BusinessCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
