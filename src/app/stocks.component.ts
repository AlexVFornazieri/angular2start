import {Component} from '@angular/core';
import {StockService} from './stock.service';


@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
        {{title}}
    <ul>
        <li *ngFor="let stock of stocks"> {{stock}} </li>
    </ul>
    
    <hr>

    <ul *ngIf="showMarkets">
        <li *ngFor="let stm of stockMarkets">
            {{stm}}
        </li>
    </ul>
    `
})

export class StocksComponent{
    title = 'List of Stocks';
    //stocks = ['AAPL', 'IMB', 'GOOG', "UDEMY", "dfdf"];
    stocks;
    stockMarkets = ['NYSE', 'NASGDAQ', 'EURONEXT', 'HKSE', 'LSE'];
    showMarkets = true;
    constructor(stockService: StockService){
        this.stocks = stockService.getStocks();
    }
}