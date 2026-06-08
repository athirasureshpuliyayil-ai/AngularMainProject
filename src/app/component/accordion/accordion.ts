import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  faqs: FaqItem[] = [
    {
      question: 'Are your beauty products authentic and cruelty-free?',
      answer:
        'Yes! Every product in our store is 100% authentic, sourced directly from authorized brand distributors. We are proud to offer a wide selection of cruelty-free and vegan-certified beauty products.',
      open: false,
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Standard delivery takes 3–5 business days. We also offer express shipping (1–2 business days) and overnight delivery options for your convenience.',
      open: false,
    },
    {
      question: 'What is your return and refund policy?',
      answer:
        'We offer a 7-day hassle-free return policy on most products. If you are not completely satisfied, contact our support team and we will arrange a full refund or exchange.',
      open: false,
    },
    {
      question: 'Do you offer loyalty rewards or discounts?',
      answer:
        'Absolutely! Our Beauty Bliss loyalty program gives you points on every purchase, redeemable for discounts on future orders. Sign up to also receive exclusive member-only offers and early sale access.',
      open: false,
    },
    {
      question: 'Can I get personalised beauty recommendations?',
      answer:
        'Yes! Our beauty experts are available via chat and email to help you find the perfect products for your skin tone, type, and goals. Just reach out through the Contact page.',
      open: false,
    },
  ];

  toggleFaq(index: number) {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false,
    }));
  }
}
