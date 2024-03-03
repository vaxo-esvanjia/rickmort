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
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MadewithComponent } from './components/madewith/madewith.component';

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  SwiperComponent,
  SearchAndCardsComponent,
  CharacterInfoComponent,
  AboutusComponent,
  MadewithComponent,
  
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
