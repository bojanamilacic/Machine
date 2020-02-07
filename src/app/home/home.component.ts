import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paymantAmount: number;
  insertCoin: number = 0;
  change: any;
  pay: number;
  sixthCoin: number;
  fifthCoin: number;
  fourthCoin: number;
  thirdCoin: number;
  secondCoin: number;
  firstCoin: number;
  showChange: string;
  inputValue: number;
  inStockCoins: any;
  sixthCoinInStock: number;
  fifthCoinInStock: number;
  fourthCoinInStock: number;
  thirdCoinInStock: number;
  secondCoinInStock: number;
  firstCoinInStock: number;

  constructor() { }

  showCoins(){
    this.inStockCoins = "Broj kovanica u automatu: " + this.sixthCoinInStock + " od 5 kovanica," + this.fifthCoinInStock + " od 2 kovanica,  " +
        this.fourthCoinInStock + " od 1 kovanica,  " + this.thirdCoinInStock + " od 0.5 kovanica,  " +
        this.secondCoinInStock + " od 0.2 kovanica,  " + this.firstCoinInStock + " od 0.1 kovanica"
    if(this.sixthCoinInStock == 0 && this.fifthCoinInStock ==0 && this.fourthCoinInStock==0 && 
      this.thirdCoinInStock==0 && this.secondCoinInStock==0 && this.firstCoinInStock ==0)
      this.showChange = "Automat nema kovanica";
    }
  onItemSelector() {
    if (this.inputValue == 0.1 || this.inputValue == 0.2 || this.inputValue == 0.5
      || this.inputValue == 1 || this.inputValue == 2 || this.inputValue == 5) {
      if (this.inputValue == 5) {
        this.sixthCoinInStock += 1;
      }
      if (this.inputValue == 2) {
        this.fifthCoinInStock += 1;
      }
      if (this.inputValue == 1) {
        this.fourthCoinInStock += 1;
      }
      if (this.inputValue == 0.5) {
        this.thirdCoinInStock += 1;
      }
      if (this.inputValue == 0.2) {
        this.secondCoinInStock += 1;
      }
      if (this.inputValue == 0.1) {
        this.firstCoinInStock += 1;
      }
      this.insertCoin += this.inputValue;
      this.inputValue = 0;
      this.getPay();
      this.inStockCoins = "Broj kovanica u automatu: " + this.sixthCoinInStock + " od 5 kovanica," + this.fifthCoinInStock + " od 2 kovanica,  " +
      this.fourthCoinInStock + " od 1 kovanica,  " + this.thirdCoinInStock + " od 0.5 kovanica,  " +
      this.secondCoinInStock + " od 0.2 kovanica,  " + this.firstCoinInStock + " od 0.1 kovanica"
      //  The status of the coins in the machine is shown just for example
    }
    else {
      this.showChange = "Automat prihvata samo kovanice od 0.1, 0.2, 0.5, 1, 2, 5";
    }
  }
  getPay() {
    this.showChange = "";
    if (this.insertCoin > this.paymantAmount) {
      this.calculateChange();
    }
    else if (this.insertCoin == this.paymantAmount) {
      this.showChange = "Hvala na plaćanju";
    }
    else if (this.insertCoin < this.paymantAmount) {
      this.showChange = "Iznos nije dovoljan za uplatu";
    }

  }

  calculateChange() {
    this.pay = this.insertCoin - this.paymantAmount;
    this.change = this.pay * 10;
    if (this.sixthCoinInStock != 0) {
      this.sixthCoin = Math.floor(this.change / (5 * 10));
      if (this.sixthCoin > this.sixthCoinInStock) {
        this.sixthCoin = this.sixthCoinInStock;
        this.sixthCoinInStock = 0;
      }
      else {
        this.sixthCoinInStock = this.sixthCoinInStock - this.sixthCoin;
      }
      this.change = Math.floor(this.change - (this.sixthCoin * 5 * 10));
    }

    if (this.fifthCoinInStock != 0) {
      this.fifthCoin = Math.floor(this.change / (2 * 10));
      if (this.fifthCoin > this.fifthCoinInStock) {
        this.fifthCoin = this.fifthCoinInStock;
        this.fifthCoinInStock = 0;
      }
      else {
        this.fifthCoinInStock = this.fifthCoinInStock - this.fifthCoin;
      }
      this.change = Math.floor(this.change - (this.fifthCoin * 2 * 10));
    }

    if (this.fourthCoinInStock != 0) {
      this.fourthCoin = Math.floor(this.change / (1 * 10));
      if (this.fourthCoin > this.fourthCoinInStock) {
        this.fourthCoin = this.fourthCoinInStock;
        this.fourthCoinInStock = 0;
      }
      else {
        this.fourthCoinInStock = this.fourthCoinInStock - this.fourthCoin;
      }
      this.change = Math.floor(this.change - (this.fourthCoin * 1 * 10));
    }

    if (this.thirdCoinInStock != 0) {
      this.thirdCoin = Math.floor(this.change / (0.5 * 10));
      if (this.thirdCoin > this.thirdCoinInStock) {
        this.thirdCoin = this.thirdCoinInStock;
        this.thirdCoinInStock = 0;
      }
      else {
        this.thirdCoinInStock = this.thirdCoinInStock - this.thirdCoin;
      }
      this.change = Math.floor(this.change - (this.thirdCoin * 0.5 * 10));
    }

    if (this.secondCoinInStock != 0) {
      this.secondCoin = Math.floor(this.change / (0.2 * 10));
      if (this.secondCoin > this.secondCoinInStock) {
        this.secondCoin = this.secondCoinInStock;
        this.secondCoinInStock = 0;
      }
      else {
        this.secondCoinInStock = this.secondCoinInStock - this.secondCoin;
      }
      this.change = Math.floor(this.change - (this.secondCoin * 0.2 * 10));
    }

    if (this.firstCoinInStock != 0) {
      this.firstCoin = Math.floor(this.change / (0.1 * 10));
      if (this.firstCoin > this.firstCoinInStock) {
        this.firstCoin = this.firstCoinInStock;
        this.firstCoinInStock = 0;
      }
      else {
        this.firstCoinInStock = this.firstCoinInStock - this.firstCoin;
      }
    }
     

    this.showChange = 'Kusur iznosi: ' + this.firstCoin + ' od ' + 0.1 + ' , '
      + this.secondCoin + ' od ' + 0.2 + ' , '
      + this.thirdCoin + ' od ' + 0.5 + ' , '
      + this.fourthCoin + ' od ' + 1 + ' , '
      + this.fifthCoin + ' od ' + 2 + ' , '
      + this.sixthCoin + ' od ' + 5;
    (document.getElementById('disabledBtn') as HTMLInputElement).disabled = true;

    setTimeout(() => {
      location.reload();
    }, 30000);

  }

  reset() {
    location.reload();
  }
  ngOnInit() {

  }
}
