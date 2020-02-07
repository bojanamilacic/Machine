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
  inStockCoin: any;
  randomSixthCoin: number = Math.floor(Math.random() * 10);
  randomFifthCoin: number = Math.floor(Math.random() * 10);
  randomFourthCoin: number = Math.floor(Math.random() * 10);
  randomThirdCoin: number = Math.floor(Math.random() * 10);
  randomSecondCoin: number = Math.floor(Math.random() * 10);
  randomFirstCoin: number = Math.floor(Math.random() * 10);
  sixthCoinInStock: number;
  constructor() { }
 
  inStockCoins(){
   this.sixthCoinInStock = 0.1*this.randomSixthCoin;
  }
  onItemSelector() {
    if(this.inputValue == 0.1 || this.inputValue == 0.2 || this.inputValue == 0.5
       || this.inputValue == 1 || this.inputValue == 2 || this.inputValue == 5)
       {
         this.insertCoin += this.inputValue;
         this.inputValue = 0;
         this.getPay();
       }
   else {
          this.showChange = "Incorect coins";
        }
  }
  getPay() {
    if (this.insertCoin > this.paymantAmount) {
      this.calculateChange();
    }
    else if (this.insertCoin == this.paymantAmount) {
       this.showChange = "Thank you for paying";
     }
    else if (this.insertCoin >this.paymantAmount) {
      this.showChange = "Insuficient amount";
    }
    setTimeout(() => {
      location.reload();
    }, 60000);
  }
  calculateChange() {
    this.pay = this.insertCoin - this.paymantAmount;
    this.change = this.pay * 10;
    this.sixthCoin = Math.floor(this.change / (5 * 10));
    this.change = Math.floor(this.change - (this.sixthCoin * 5 * 10));
    this.fifthCoin = Math.floor(this.change / (2 * 10));
    this.change = Math.floor(this.change - (this.fifthCoin * 2 * 10));
    this.fourthCoin = Math.floor(this.change / (1 * 10));
    this.change = Math.floor(this.change - (this.fourthCoin * 1 * 10));
    this.thirdCoin = Math.floor(this.change / (0.5 * 10));
    this.change = Math.floor(this.change - (this.thirdCoin * 0.5 * 10));
    this.secondCoin = Math.floor(this.change / (0.2 * 10));
    this.change = Math.floor(this.change - (this.secondCoin * 0.2 * 10));
    this.firstCoin = Math.floor(this.change / (0.1 * 10));
    
    this.showChange = 'Change is ' + this.firstCoin + ' of ' + 0.1 + ' , '
      + this.secondCoin + ' of ' + 0.2 + ' , '
      + this.thirdCoin + ' of ' + 0.5 + ' , '
      + this.fourthCoin + ' of ' + 1 + ' , '
      + this.fifthCoin + ' of ' + 2 + ' , '
      + this.sixthCoin + ' of ' + 5;
   
  }

  reset() {
    location.reload();
  }
  ngOnInit() {

  }
}
