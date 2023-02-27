import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { HeaderComponent } from './header/header.component';
import { BottleViewComponent } from './bottle-view/bottle-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    HeaderComponent,
    BottleViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
