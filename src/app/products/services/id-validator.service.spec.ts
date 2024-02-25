import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { of } from 'rxjs';
import { AsyncValidatorFn, FormBuilder, FormControl } from '@angular/forms';
import { isIdExistValidator } from './id-validator.service';

describe('IdValidatorService', () => {

  let productService: ProductsService;
  let validator: AsyncValidatorFn;
  let productControl: FormControl;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [{provide: ProductsService, useValue: {
          verifyIdProduct: () => of(true)
        }}],
        declarations: []
      });
    })
  );

  beforeEach(() => {
    productService = TestBed.inject(ProductsService);
    validator = isIdExistValidator(productService);
    productControl = new FormBuilder().control('', [], validator);
  });

  describe('if id is in use', () => {
    it('should return a ID no es valida error', fakeAsync(() => {
      let spy = jest.spyOn(productService, 'verifyIdProduct');
      const idExist = productService.verifyIdProduct("abc")
      expect(spy).toHaveBeenCalled();
      expect(idExist).toBeTruthy();
    }));
  });
});
