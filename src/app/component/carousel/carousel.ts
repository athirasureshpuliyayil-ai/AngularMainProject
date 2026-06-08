import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, RouterLink],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit, OnDestroy {
  currentSlide = 0;
  private timer: any;

  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1400&q=80',
      badge: '✨ New Collection',
      title: 'Glow Like Never Before',
      subtitle: 'Discover our premium beauty collection crafted for the modern woman',
      cta: 'Shop Now',
      ctaLink: '/products',
    },
    {
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&q=80',
      badge: '💄 Bestsellers',
      title: 'Bold. Beautiful. You.',
      subtitle: 'From vibrant lipsticks to flawless foundations — elevate your beauty ritual',
      cta: 'Explore Products',
      ctaLink: '/products',
    },
    {
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80',
      badge: '🌸 Premium Care',
      title: 'Luxury Beauty at Your Fingertips',
      subtitle: 'Top brands, authentic products, delivered straight to your door',
      cta: 'Discover More',
      ctaLink: '/products',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startAutoSlide() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  goTo(index: number) {
    this.currentSlide = index;
    clearInterval(this.timer);
    this.startAutoSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    clearInterval(this.timer);
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
