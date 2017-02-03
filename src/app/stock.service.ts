import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 

@Injectable()
export class StockService{
    getStocks() : string[]{
        return ['AAPL', 'IBM', 'GOOGL', 'UBER', 'ABNET'];
    }
}