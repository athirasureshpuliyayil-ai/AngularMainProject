import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Beautyapi, Product } from '../../beautyapi';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule, RouterLink],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {
  product: Product | null = null;
  loading = true;
  activeImage = '';
  addedToCart = false;

  constructor(
    private api: Beautyapi,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getProductById(id).subscribe({
        next: (res) => {
          this.product = res;
          this.activeImage = res.thumbnail;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
    }
  }

  selectImage(img: string) {
    this.activeImage = img;
  }

  addToCart() {
    this.addedToCart = true;
    setTimeout(() => (this.addedToCart = false), 2500);
  }

  get stars(): number[] {
    return Array(Math.round(this.product?.rating || 0)).fill(0);
  }

  get emptyStars(): number[] {
    return Array(5 - Math.round(this.product?.rating || 0)).fill(0);
  }

  get discountedPrice(): number {
    if (!this.product) return 0;
    return this.product.price * (1 - this.product.discountPercentage / 100);
  }
}