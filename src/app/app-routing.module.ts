import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { SearchAndCardsComponent } from './components/search-and-cards/search-and-cards.component';

const routes: Routes = [
  {path:'', redirectTo : 'search-and-cards', pathMatch: 'full'},
  {path:'',component:SearchAndCardsComponent},
  {path:'alter',component:CharacterInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
