import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'flaschenpost-task';

  products: any[] = [];
  isAscending = true;
  loading = true;
  filterExpensiveBeers = false;
  l2h: string | undefined;
  h2l: string | undefined;
  selectedItem: string | undefined;
  tabIndex = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any[]>('https://flapotest.blob.core.windows.net/test/ProductData.json')
      .subscribe((data) => {
        this.products = data;
        this.loading = false;
      });
  }

  onTabClick(){
    this.tabIndex = !this.tabIndex;
  }

  sortProducts(event: Event) {
    const target = event.target as HTMLInputElement;
    if(target.value =='l2h'){
        this.products.sort((a, b) => {
          const aPrice = a.articles[0].price;
          const bPrice = b.articles[0].price;
          return Number(aPrice) - Number(bPrice);
        });
    } else if(target.value =='h2l'){
        this.products.sort((a, b) => {
          const aPrice = a.articles[0].price;
          const bPrice = b.articles[0].price;
          return Number(bPrice) - Number(aPrice);
        });
    }
  }

  toggleExpensiveBeers() {
    this.filterExpensiveBeers = !this.filterExpensiveBeers;
    if (this.filterExpensiveBeers) {
      this.products = this.products.filter(item => {
        const perLiterPrice = parseFloat(item.articles[0].pricePerUnitText.match(/\((\d+,\d+)\s€\/Liter\)/)[1].replace(',', '.'));
        return perLiterPrice < 2;
      })
    } else {
      this.http
      .get<any[]>('https://flapotest.blob.core.windows.net/test/ProductData.json')
      .subscribe((data) => {
        this.products = data;
        this.loading = false;
      });
    }
  }

}
