import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../beautyapi';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() product!: Product;

  get stars(): number[] {
    return Array(Math.round(this.product?.rating || 0)).fill(0);
  }

  get emptyStars(): number[] {
    return Array(5 - Math.round(this.product?.rating || 0)).fill(0);
  }
}
