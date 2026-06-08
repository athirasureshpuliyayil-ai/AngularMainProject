import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../component/carousel/carousel';
import { Cards } from '../../component/cards/cards';
import { Accordion } from '../../component/accordion/accordion';
import { Beautyapi, Product } from '../../beautyapi';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, Carousel, Cards, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  featuredProducts: Product[] = [];
  loading = true;

  testimonials = [
    {
      name: 'Sophia M.',
      role: 'Beauty Influencer',
      avatar: 'S',
      text: 'Beauty Bliss is my go-to store! The mascara I ordered arrived next day and it\'s absolutely stunning. Premium quality at unbeatable prices.',
      rating: 5,
    },
    {
      name: 'Priya K.',
      role: 'Makeup Artist',
      avatar: 'P',
      text: 'As a professional makeup artist, I trust only the best. Beauty Bliss stocks authentic products and their customer service is exceptional.',
      rating: 5,
    },
    {
      name: 'Aisha L.',
      role: 'Skincare Enthusiast',
      avatar: 'A',
      text: 'I\'ve been shopping here for 6 months and I\'m hooked. The product range is incredible and the packaging is always perfect.',
      rating: 5,
    },
  ];

  features = [
    {
      icon: 'fa-solid fa-shield-halved',
      title: '100% Authentic',
      desc: 'Every product is sourced directly from authorised distributors, guaranteed genuine.',
    },
    {
      icon: 'fa-solid fa-truck-fast',
      title: 'Fast Delivery',
      desc: 'Enjoy next-day delivery and free shipping on orders above $30.',
    },
    {
      icon: 'fa-solid fa-leaf',
      title: 'Cruelty-Free',
      desc: 'We champion ethical beauty. Most of our range is certified cruelty-free and vegan.',
    },
    {
      icon: 'fa-solid fa-rotate-left',
      title: 'Easy Returns',
      desc: '7-day hassle-free returns — no questions asked, full refund guaranteed.',
    },
  ];

  constructor(private api: Beautyapi) {}

  ngOnInit() {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.featuredProducts = res.products.slice(0, 4);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  get stars5(): number[] { return [1,2,3,4,5]; }
}
