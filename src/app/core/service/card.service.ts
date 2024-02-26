import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Observable, Subject, map } from "rxjs";
import { cards } from "src/app/components/search-and-cards/cards.model";

@Injectable({
    providedIn: 'root'
})
export class CardService {
   
    baseUrl = environment.baseUrl
    constructor (private http: HttpClient){}
    card:cards[]=[]
    
    getCharacter(): Observable<any>{
        return this.http.get<cards[]>(this.baseUrl+'/character')
        
    }
    getCharacterAlters(name:string,status:string,){
        var apiUrl=`${this.baseUrl}/character?name=${name}&status=${status}`
        return this.http.get(apiUrl).pipe(map((response:any)=>{
          return response.results
        }))
    }

}