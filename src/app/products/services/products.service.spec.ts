import { TestBed, fakeAsync, getTestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../interfaces/product.interface';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  let _baseUrl: string = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products"
  let product: Product = {
    id: "1234",
    name: "Este es un nombre",
    description: "Esta es una descripción",
    logo: "Un logo genial",
    date_release: "2024-02-24",
    date_revision: "2025-02-24"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductsService
      ]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getProducts undefined', () => {
    service.getProducts().subscribe(product => {
      expect(product).not.toBeUndefined();
    })

    httpTestingController.expectOne(_baseUrl);
  });

  it(`should getProducts error`, () => {
    service.getProducts().subscribe(
      (product) => {
        expect(product).toBeUndefined();
        
      }
    );
    httpTestingController.expectOne({
      method: 'GET',
    }).flush("", { status: 404, statusText: "Not Found" });
  });



  it('should createProduct undefined', () => {
    service.createProduct(product).subscribe(product => {
      expect(product).not.toBeUndefined();
    })

    httpTestingController.expectOne(_baseUrl);
  });

  it(`should createProduct error`, () => {
    service.createProduct(product).subscribe(
      (product) => {
        expect(product).toBeUndefined();
        
      }
    );
    httpTestingController.expectOne({
      method: 'POST',
    }).flush("", { status: 404, statusText: "Not Found" });
  });

  it('should verifyIdProduct undefined', () => {
    service.verifyIdProduct(product.id).subscribe(product => {
      expect(product).not.toBeUndefined();
    })

    httpTestingController.expectOne(_baseUrl+"/verification?id=1234");
  });

  it(`should verifyIdProduct error`, () => {
    service.verifyIdProduct(product.id).subscribe(
      (product) => {
        expect(product).toBeUndefined();
        
      }
    );
    httpTestingController.expectOne({
      method: 'GET',
    }).flush("", { status: 404, statusText: "Not Found" });
  });

  it('should deleteProduct undefined', () => {
    service.deleteProduct(product.id).subscribe(product => {
      expect(product).not.toBeUndefined();
    })

    httpTestingController.expectOne(_baseUrl+"?id=1234");
  });

  it(`should deleteProduct error`, () => {
    service.deleteProduct(product.id).subscribe(
      (product) => {
        expect(product).toBeUndefined();
        
      }
    );
    httpTestingController.expectOne({
      method: 'DELETE',
    }).flush("", { status: 404, statusText: "Not Found" });
  });

  it('should updateProduct undefined', () => {
    service.updateProduct(product).subscribe(product => {
      expect(product).not.toBeUndefined();
    })

    httpTestingController.expectOne(_baseUrl);
  });

  it(`should updateProduct error`, () => {
    service.updateProduct(product).subscribe(
      (product) => {
        expect(product).toBeUndefined();
        
      }
    );
    httpTestingController.expectOne({
      method: 'PUT',
    }).flush("", { status: 404, statusText: "Not Found" });
  });
});
