import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SearchAndCardsComponent } from './components/search-and-cards/search-and-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  SwiperComponent,
  SearchAndCardsComponent,
  CharacterInfoComponent,
  TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
