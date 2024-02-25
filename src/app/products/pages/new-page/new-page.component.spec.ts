import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPageComponent } from './new-page.component';
import { RegisterFormComponent } from '../../components/form/register-form.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewPageComponent', () => {
  let component: NewPageComponent;
  let fixture: ComponentFixture<NewPageComponent>;

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
      declarations: [NewPageComponent, RegisterFormComponent],
      providers: [{
        provide: ProductsService, useValue: {
          createProduct: () => of(product)
        }
      }],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
