import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'products',
  template: `
    <div class="heroes">
    <h3>Heroes</h3>
      <div class="hero product-item" *ngFor="let p of products$ | async">
      {{p.title}}
      </div>
    </div>
  `,
  styles: [`
    .heroes {
      margin-top: 40px;
    }
  `]
})

export class ProductListComponent implements OnInit {
  products$;
  constructor(private http: HttpClient) { }

  ngOnInit() { 
    this.products$ = this.http.get('http://localhost:3000/products');
  }
}