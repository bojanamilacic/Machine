import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paymantAmount: any = (Math.random() * (10 - 0.1) + 0.1).toFixed(1);
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
  sixthCoinInStock: number = Math.floor(Math.random() * 10);
  fifthCoinInStock: number = Math.floor(Math.random() * 10);
  fourthCoinInStock: number = Math.floor(Math.random() * 10);
  thirdCoinInStock: number = Math.floor(Math.random() * 10);
  secondCoinInStock: number = Math.floor(Math.random() * 10);
  firstCoinInStock: number = Math.floor(Math.random() * 10);

  constructor() { }


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
      this.inStockCoins = "Number of coins in the machine: " + this.sixthCoinInStock + " x5," + this.fifthCoinInStock + " x2,  " +
        this.fourthCoinInStock + " x1,  " + this.thirdCoinInStock + " x0.5,  " +
        this.secondCoinInStock + " x0.2,  " + this.firstCoinInStock + " x0.1"
      //  The status of the coins in the machine is shown just for example
    }
    else {
      this.showChange = "Incorrect amount";
   }
  }
  getPay() {
    this.showChange = "";
    if (this.insertCoin > this.paymantAmount) {
      this.calculateChange();
    }
    else if (this.insertCoin == this.paymantAmount) {
      this.showChange = "Thank you for paying";
    }
    else if (this.insertCoin < this.paymantAmount) {
      this.showChange = "Insuficient amount";
    }

    setTimeout(() => {
      location.reload();
    }, 30000);
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


    this.showChange = 'Change is ' + this.firstCoin + ' of ' + 0.1 + ' , '
      + this.secondCoin + ' of ' + 0.2 + ' , '
      + this.thirdCoin + ' of ' + 0.5 + ' , '
      + this.fourthCoin + ' of ' + 1 + ' , '
      + this.fifthCoin + ' of ' + 2 + ' , '
      + this.sixthCoin + ' of ' + 5;
    (document.getElementById('disabledBtn') as HTMLInputElement).disabled = true;

  }

  reset() {
    location.reload();
  }
  ngOnInit() {

  }
}
