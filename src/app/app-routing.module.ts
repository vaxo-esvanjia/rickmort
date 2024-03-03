import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { SearchAndCardsComponent } from './components/search-and-cards/search-and-cards.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
const routes: Routes = [
  {path:'', redirectTo : 'search-and-cards', pathMatch: 'full'},
  {path:'',component:SearchAndCardsComponent},
  {path:'alter',component:CharacterInfoComponent},
  {path: 'aboutUs', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
