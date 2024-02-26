import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/core/service/card.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  constructor(private cardService:CardService,private activeRoute:ActivatedRoute) { }
  sliderCharacters:any[]=[]
  alterEgos:any[]=[]
  name:string=''
  status:string=''


  ngOnInit(): void {
    this.cardService.getCharacter().subscribe(response =>{
      this.activeRoute.queryParams.subscribe((params:any)=>{
        this.name = params['name']
        this.status = params['status']
   
        this.cardService.getCharacterAlters(this.name,this.status).subscribe((response:any)=>{
          this.alterEgos=response
          console.log(this.alterEgos)
        })
      })
      
      console.log(this.alterEgos)
    })
  }

  getAlterEgos(){
    
  }

}
