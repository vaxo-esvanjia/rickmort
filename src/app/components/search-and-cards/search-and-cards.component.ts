import { Component, Input, OnInit } from '@angular/core';
import { cards } from './cards.model';
import { CardService } from 'src/app/core/service/card.service';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-search-and-cards',
  templateUrl: './search-and-cards.component.html',
  styleUrls: ['./search-and-cards.component.css']
})
export class SearchAndCardsComponent implements OnInit {

  @Input() 
  mycard!:any;
  cardsArr:cards[]=[]
  originalCardsArr:cards[]=[]

searchName:string=''
searchGender:string= "Gender"
searchStatus:string='status'
searchSpecies:string = 'Species'
  constructor(private cardService: CardService, private router:Router, private getCharacterAlters:CardService) { }

  ngOnInit(): void {
    this.cardService.getCharacter().subscribe(cards => {
      this.cardsArr = cards.results;
      this.originalCardsArr = [...this.cardsArr]
      console.log(this.cardsArr)
  });
  }
  applyFilters(): void {
    // Apply filters based on input and select values
    this.cardsArr = this.originalCardsArr.filter((card) => {
      const nameMatch = card.name.toLowerCase().includes(this.searchName.toLowerCase());
      const genderMatch = this.searchGender === 'Gender' || card.gender === this.searchGender;
      const statusMatch = this.searchStatus === 'status' || card.status === this.searchStatus;
      const speciesMatch = this.searchSpecies === 'Species' || card.species === this.searchSpecies;

      return nameMatch && genderMatch && statusMatch && speciesMatch;
    });
  }

  resetFilters(): void {
    // Reset filters and show all cards
    this.cardsArr = [...this.originalCardsArr];
    this.searchName = '';
    this.searchGender = 'Gender';
    this.searchStatus = 'status';
    this.searchSpecies = 'Species';
  }
  alterEgoPage(){
    // this.router.navigate(['alter']);
    
  }
}

