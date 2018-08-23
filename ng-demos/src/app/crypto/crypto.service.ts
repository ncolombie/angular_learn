import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";




export type Coin={
  name:string,
  symbol:string,
  price_usd:number;
}



@Injectable({
  providedIn: 'root'
})

export class CryptoService {

 coins: Coin[]=[];
  constructor(public http:HttpClient) { }

  fetchCryptoPrices(){
    this.http.get('https://api.coinmarketcap.com/v1/ticker/').subscribe(r=>console.log(r));


  }

 fetchCrypto(){

    this.http.get<any[]>('https://api.coinmarketcap.com/v1/ticker/').subscribe(r=>{
    this.coins=r.map(function (coin){return {name:coin.name, symbol:coin.symbol, price_usd:coin.price_usd}});
    console.log(this.coins);
      }
    )

  }

}
