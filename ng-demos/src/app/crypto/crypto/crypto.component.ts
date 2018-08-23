import {Component, OnInit} from '@angular/core';
import {CryptoService} from "../crypto.service";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {





  // result= this.service.coins;
  constructor(public service: CryptoService) {
    this.service.fetchCrypto();
  }

  ngOnInit() {
  }



}
