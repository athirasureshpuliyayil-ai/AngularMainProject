import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cards } from '../../component/cards/cards';
import { Beautyapi, Product } from '../../beautyapi';

@Component({
  selector: 'app-beautyproducts',
  imports: [CommonModule, FormsModule, Cards],
  templateUrl: './beautyproducts.html',
  styleUrl: './beautyproducts.css',
})
export class Beautyproducts implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;
  searchTerm = '';
  maxPrice = 1000;

  constructor(private api: Beautyapi) {}

  ngOnInit() {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.allProducts = res.products;
        this.filteredProducts = res.products;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  filterProducts() {
    this.filteredProducts = this.allProducts.filter((p) => {
      const matchSearch = p.title
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const matchPrice = p.price <= this.maxPrice;
      return matchSearch && matchPrice;
    });
  }

  clearFilters() {
    this.searchTerm = '';
    this.maxPrice = 1000;
    this.filteredProducts = [...this.allProducts];
  }
}