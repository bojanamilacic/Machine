import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paymantAmount: number = 0;
  insertCoin: number = 0;
  change: number;
  pay: number;
  ninthCoin: number = 0;
  eightCoin: number = 0;
  seventhCoin: number = 0;
  sixthCoin: number = 0;
  fifthCoin: number = 0;
  fourthCoin: number = 0;
  thirdCoin: number = 0;
  secondCoin: number = 0;
  firstCoin: number = 0;
  showChange: any;
  showPaymantAmount: any;
  inputValue: number;
  inStockCoins: any;
  ninthCoinInStock: number = 0;
  eightCoinInStock: number = 0;
  seventhCoinInStock: number = 0;
  sixthCoinInStock: number = 0;
  fifthCoinInStock: number = 0;
  fourthCoinInStock: number = 0;
  thirdCoinInStock: number = 0;
  secondCoinInStock: number = 0;
  firstCoinInStock: number = 0;
  i: number = 0;
  j: number = 0;
  constructor() { }

  showCoins() {
    if (this.paymantAmount >= 0.1) {
      this.inStockCoins = "Broj novca u automatu: " + this.ninthCoinInStock + " od 50 kovanica," +
        this.eightCoinInStock + " od 20 kovanica,  " + this.seventhCoinInStock + " od 10 kovanica," +
        this.sixthCoinInStock + " od 5 kovanica," + this.fifthCoinInStock + " od 2 kovanica,  " +
        this.fourthCoinInStock + " od 1 kovanica,  " + this.thirdCoinInStock + " od 0.5 kovanica,  " +
        this.secondCoinInStock + " od 0.2 kovanica,  " + this.firstCoinInStock + " od 0.1 kovanica"
      this.showPaymantAmount = this.paymantAmount;
      (document.getElementById('addDisabled') as HTMLInputElement).disabled = true;
    }
    else {
      this.showPaymantAmount = "Minimalan iznos je 0.1";
    }
  }
  onItemSelector() {

    if (this.inputValue == 0.1 || this.inputValue == 0.2 || this.inputValue == 0.5
      || this.inputValue == 1 || this.inputValue == 2 || this.inputValue == 5 ||
      this.inputValue == 10 || this.inputValue == 20 || this.inputValue == 50) {
      if (this.inputValue == 50) {
        this.ninthCoinInStock += 1;
      }
      if (this.inputValue == 20) {
        this.eightCoinInStock += 1;
      }
      if (this.inputValue == 10) {
        this.seventhCoinInStock += 1;
      }
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

      this.insertCoin = Math.round((this.insertCoin + this.inputValue) * 10) / 10;
      this.inputValue = 0;

      this.getPay();
      this.inStockCoins = "Broj novca u automatu: " + this.ninthCoinInStock + " od 50 kovanica," +
        this.eightCoinInStock + " od 20 kovanica,  " + this.seventhCoinInStock + " od 10 kovanica," +
        this.sixthCoinInStock + " od 5 kovanica," + this.fifthCoinInStock + " od 2 kovanica,  " +
        this.fourthCoinInStock + " od 1 kovanica,  " + this.thirdCoinInStock + " od 0.5 kovanica,  " +
        this.secondCoinInStock + " od 0.2 kovanica,  " + this.firstCoinInStock + " od 0.1 kovanica";
      //  The status of the coins in the machine is shown just for example
    }
    else {
      this.showChange = "Automat prihvata samo kovanice od 0.1, 0.2, 0.5, 1, 2, 5";
    }
  }
  getPay() {
    this.change = Math.round((this.insertCoin - this.paymantAmount) * 10) / 10;

    if (this.change >= 0) {
      this.calculateChange();
      this.checkChange();
      (document.getElementById('payDisabled') as HTMLInputElement).disabled = true;
    }
    else {
      this.showChange = "Iznos nije dovoljan";
    }

  }


  calculateChange() {
    if (this.i == 0) {
      if (this.ninthCoinInStock != 0) {
        this.ninthCoin = Math.floor(this.change / 50);
        if (this.ninthCoin > this.ninthCoinInStock) {
          this.ninthCoin = this.ninthCoinInStock;
          this.ninthCoinInStock = 0;
        }
        else {
          this.ninthCoinInStock = this.ninthCoinInStock - this.ninthCoin;
        }
        this.change = this.change - (this.ninthCoin * 50);
        this.i++;

      }
      else {
        this.i++;
      }
    }
    if (this.i == 1) {
      if (this.eightCoinInStock != 0) {
        this.eightCoin = Math.floor(this.change / 20);
        if (this.eightCoin > this.eightCoinInStock) {
          this.eightCoin = this.eightCoinInStock;
          this.eightCoinInStock = 0;
        }
        else {
          this.eightCoinInStock = this.eightCoinInStock - this.eightCoin;
        }
        this.change = this.change - (this.eightCoin * 20);
        this.i++;
      }
      else {
        this.i++;
      }
    }
    if (this.i == 2) {
      if (this.seventhCoinInStock != 0) {
        this.seventhCoin = Math.floor(this.change / 10);
        if (this.seventhCoin > this.seventhCoinInStock) {
          this.seventhCoin = this.seventhCoinInStock;
          this.seventhCoinInStock = 0;
        }
        else {
          this.seventhCoinInStock = this.seventhCoinInStock - this.seventhCoin;
        }
        this.change = this.change - (this.seventhCoin * 10);
        this.i++;
      }
      else {
        this.i++;
      }
    }
    if (this.i == 3) {
      if (this.sixthCoinInStock != 0) {
        this.sixthCoin = Math.floor(this.change / 5);
        if (this.sixthCoin > this.sixthCoinInStock) {
          this.sixthCoin = this.sixthCoinInStock;
          this.sixthCoinInStock = 0;
        }
        else {
          this.sixthCoinInStock = this.sixthCoinInStock - this.sixthCoin;
        }
        this.change = this.change - (this.sixthCoin * 5);
        this.i++;
      }
      else {
        this.i++;
      }
    }
    if (this.i == 4) {
      if (this.fifthCoinInStock != 0) {
        this.fifthCoin = Math.floor(this.change / 2);
        if (this.fifthCoin > this.fifthCoinInStock) {
          this.fifthCoin = this.fifthCoinInStock;
          this.fifthCoinInStock = 0;
        }
        else {
          this.fifthCoinInStock = this.fifthCoinInStock - this.fifthCoin;
        }
        this.change = this.change - (this.fifthCoin * 2);
        this.i++;
      }
      else {
        this.i++;
      }
    }
    if (this.i == 5) {
      if (this.fourthCoinInStock != 0) {
        this.fourthCoin = Math.floor(this.change / 1);
        if (this.fourthCoin > this.fourthCoinInStock) {
          this.fourthCoin = this.fourthCoinInStock;
          this.fourthCoinInStock = 0;
        }
        else {
          this.fourthCoinInStock = this.fourthCoinInStock - this.fourthCoin;
        }
        this.change = this.change - (this.fourthCoin * 1);
        this.i++;
      }
      else {
        this.i++;
      }
    }
    if (this.i == 6) {
      if (this.thirdCoinInStock != 0) {
        this.thirdCoin = Math.floor(this.change / 0.5);
        if (this.thirdCoin > this.thirdCoinInStock) {
          this.thirdCoin = this.thirdCoinInStock;
          this.thirdCoinInStock = 0;
        }
        else {
          this.thirdCoinInStock = this.thirdCoinInStock - this.thirdCoin;
        }
        this.change = this.change - (this.thirdCoin * 0.5);
        this.i++;
      }
      else {
        this.i++;
      }
    }
    if (this.i == 7) {
      if (this.secondCoinInStock != 0) {
        this.secondCoin = Math.floor(this.change / 0.2);
        if (this.secondCoin > this.secondCoinInStock) {
          this.secondCoin = this.secondCoinInStock;
          this.secondCoinInStock = 0;
        }
        else {
          this.secondCoinInStock = this.secondCoinInStock - this.secondCoin;
        }
        this.change = this.change - (this.secondCoin * 0.2);
        this.i++;
      }
      else {
        this.i++;
      }
    }
    if (this.i == 8) {
      if (this.firstCoinInStock != 0) {
        this.firstCoin = Math.floor(this.change / 0.1);
        if (this.firstCoin > this.firstCoinInStock) {
          this.firstCoin = this.firstCoinInStock;
          this.firstCoinInStock = 0;
        }
        else {
          this.firstCoinInStock = this.firstCoinInStock - this.firstCoin;
        }
        this.change = this.change - (this.firstCoin * 0.1);
        this.i++;
      }
      else {
        this.i++;
      }

    }
    this.showChange = "Kusur iznosi: "
      + this.firstCoin + ' od ' + 0.1 + ' , '
      + this.secondCoin + ' od ' + 0.2 + ' , '
      + this.thirdCoin + ' od ' + 0.5 + ' , '
      + this.fourthCoin + ' od ' + 1 + ' , '
      + this.fifthCoin + ' od ' + 2 + ' , '
      + this.sixthCoin + ' od ' + 5 + ' , '
      + this.seventhCoin + ' od ' + 10 + ' , '
      + this.eightCoin + ' od ' + 20 + ' , '
      + this.ninthCoin + ' od ' + 50;

  }
  checkChange() {
    if (this.change > 0 && this.i == 9) {
      if (this.j == 0 && this.change != 0) {
        if (this.ninthCoin != 0) {
          this.ninthCoin = this.ninthCoin - 1;
          this.eightCoin = 0;
          this.seventhCoin = 0;
          this.sixthCoin = 0;
          this.fifthCoin = 0;
          this.fourthCoin = 0;
          this.thirdCoin = 0;
          this.secondCoin = 0;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.ninthCoin * 50);
          this.i = 1;
          this.calculateChange();
        }
        else {
          this.j++;
        }

      }
      if (this.j == 1 && this.change != 0) {
        if (this.eightCoin != 0) {
          this.eightCoin = this.eightCoin - 1;
          this.seventhCoin = 0;
          this.sixthCoin = 0;
          this.fifthCoin = 0;
          this.fourthCoin = 0;
          this.thirdCoin = 0;
          this.secondCoin = 0;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.eightCoin * 20)
            - (this.ninthCoin * 50);
          this.i = 2;
          this.j++;
          this.calculateChange();
        }
        else {
          this.j++;
        }
      }
      if (this.j == 2 && this.change != 0) {
        if (this.seventhCoin != 0) {
          this.seventhCoin = this.seventhCoin - 1;
          this.sixthCoin = 0;
          this.fifthCoin = 0;
          this.fourthCoin = 0;
          this.thirdCoin = 0;
          this.secondCoin = 0;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.seventhCoin * 10)
            - (this.eightCoin * 20) - (this.ninthCoin * 50);
          this.i = 3;
          this.j++;
          this.calculateChange();
        }
        else {
          this.j++;
        }
      }
      if (this.j == 3 && this.change != 0) {
        if (this.sixthCoin != 0) {
          this.sixthCoin = this.sixthCoin - 1;
          this.fifthCoin = 0;
          this.fourthCoin = 0;
          this.thirdCoin = 0;
          this.secondCoin = 0;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.sixthCoin * 5)
            - (this.seventhCoin * 10) - (this.eightCoin * 20) - (this.ninthCoin * 50);
          this.i = 4;
          this.j++;
          this.calculateChange();
        }
        else {
          this.j++;
        }

      }
      if (this.j == 4 && this.change != 0) {
        if (this.fifthCoin != 0) {
          this.fifthCoin = this.fifthCoin - 1;
          this.fourthCoin = 0;
          this.thirdCoin = 0;
          this.secondCoin = 0;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.fifthCoin * 2) - (this.sixthCoin * 5)
            - (this.seventhCoin * 10) - (this.eightCoin * 20) - (this.ninthCoin * 50);
          this.i = 5;
          this.j++;
          this.calculateChange();
        }
        else {
          this.j++;
        }

      }
      if (this.j == 5 && this.change != 0) {
        if (this.fourthCoin != 0) {
          this.fourthCoin = this.fourthCoin - 1;
          this.thirdCoin = 0;
          this.secondCoin = 0;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.fourthCoin * 1)
            - (this.fifthCoin * 2) - (this.sixthCoin * 5)
            - (this.seventhCoin * 10) - (this.eightCoin * 20) - (this.ninthCoin * 50);
          this.i = 6;
          this.j++;
          this.calculateChange();
        }
        else {
          this.j++;
        }

      }
      if (this.j == 6 && this.change != 0) {
        if (this.thirdCoin != 0) {
          this.thirdCoin = this.thirdCoin - 1;
          this.secondCoin = 0;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.thirdCoin * 0.5)
            - (this.fourthCoin * 1)
            - (this.fifthCoin * 2) - (this.sixthCoin * 5)
            - (this.seventhCoin * 10) - (this.eightCoin * 20) - (this.ninthCoin * 50);
          this.i = 7;
          this.j++;
          this.calculateChange();
        }
        else {
          this.j++;
        }

      }
      if (this.j == 7 && this.change != 0) {
        if (this.secondCoin != 0) {
          this.secondCoin = this.secondCoin - 1;
          this.firstCoin = 0;
          this.change = this.insertCoin - this.paymantAmount - (this.secondCoin * 0.2) -
            (this.thirdCoin * 0.5) - (this.fourthCoin * 1)
            - (this.fifthCoin * 2) - (this.sixthCoin * 5)
            - (this.seventhCoin * 10) - (this.eightCoin * 20) - (this.ninthCoin * 50);
          this.i = 8;
          this.j++;
          this.calculateChange();
        }
        else {
          this.j++;
        }

      }

    }
  }

  reset() {
    location.reload();
  }
  ngOnInit() {
  }

}