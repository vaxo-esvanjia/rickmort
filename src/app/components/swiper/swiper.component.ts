import { Component, OnInit } from '@angular/core';
import { cards } from '../search-and-cards/cards.model';
import { CardService } from 'src/app/core/service/card.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  constructor(private cardService:CardService) { }
  cardsimgArr:cards[]=[]
  ngOnInit(): void {
    this.cardService.getCharacter().subscribe(cards => {
      this.cardsimgArr = cards.results;
      // console.log(this.cardsimgArr)
  });
  }

}
