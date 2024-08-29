import { Stock } from './stock.model';

export interface MarketTrends {
name: any;
    coins: { item: Stock }[];
    // Add NFTs if needed in the future
}
