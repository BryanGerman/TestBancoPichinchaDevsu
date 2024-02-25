import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

  beforeEach(async () => {
    let product: Product = {
      id: "1234",
      name: "Este es un nombre",
      description: "Esta es una descripción",
      logo:"Un logo genial",
      date_release: "2024-02-24",
      date_revision: "2025-02-24"
    }
    await TestBed.configureTestingModule({
      imports: [
        
      ],
      providers: [{
        provide: ProductsService, useValue: {
          getProducts: () => of([product])
        }
      }],
      declarations: []
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getProducts', () => {
    component.products = undefined;
    expect(component).toBeTruthy();
  });

  it('should selectedNumberOfResultsEvent', () => {
    component.selectedNumberOfResultsEvent(1)
    expect(component).toBeTruthy();
  });

  it('should selectedPageEvent', () => {
    component.selectedPageEvent(1)
    expect(component).toBeTruthy();
  });

  it('should onSearchValue', () => {
    component.onSearchValue("x")
    expect(component).toBeTruthy();
  });
});
