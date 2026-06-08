import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beautyproducts } from './beautyproducts';

describe('Beautyproducts', () => {
  let component: Beautyproducts;
  let fixture: ComponentFixture<Beautyproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Beautyproducts],
    }).compileComponents();

    fixture = TestBed.createComponent(Beautyproducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
