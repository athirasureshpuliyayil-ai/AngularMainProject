import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  images: string[];
  thumbnail: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
  }[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class Beautyapi {
  private readonly baseUrl = 'https://dummyjson.com';
  
  // Cache to prevent redundant API calls on navigation
  private productsCache$: Observable<ProductsResponse> | null = null;

  constructor(private http: HttpClient) {}

  /** Get beauty, skin-care, and fragrance products with caching */
  getProducts(): Observable<ProductsResponse> {
    if (!this.productsCache$) {
      const beauty$ = this.http.get<ProductsResponse>(`${this.baseUrl}/products/category/beauty`);
      const skincare$ = this.http.get<ProductsResponse>(`${this.baseUrl}/products/category/skin-care`);
      const fragrances$ = this.http.get<ProductsResponse>(`${this.baseUrl}/products/category/fragrances`);

      this.productsCache$ = forkJoin([beauty$, skincare$, fragrances$]).pipe(
        map(([beauty, skincare, fragrances]) => {
          const combinedProducts = [
            ...beauty.products,
            ...skincare.products,
            ...fragrances.products
          ];
          
          return {
            products: combinedProducts,
            total: combinedProducts.length,
            skip: 0,
            limit: combinedProducts.length
          };
        }),
        shareReplay(1) // Keep the result in memory for future subscribers
      );
    }
    
    return this.productsCache$;
  }

  /** Get a single product by ID from the cache */
  getProductById(id: string | number): Observable<Product> {
    return this.getProducts().pipe(
      map(response => {
        const product = response.products.find(p => p.id.toString() === id.toString());
        if (!product) {
          throw new Error(`Product with ID ${id} not found`);
        }
        return product;
      })
    );
  }

}
