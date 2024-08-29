import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock.model';
import { MarketTrends } from '../market-trends.model';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}
  coins: Stock[] = [];
  trendingStocks?: MarketTrends;

  constructor(private stockService: StockService,) { }

  ngOnInit(): void {
    this.stockService.getAllStocks().subscribe(coins => {
      this.coins = coins;
    });

    this.stockService.getMarketTrends().subscribe(trendingStocks => {
      this.trendingStocks = trendingStocks;
    });
  }
}
