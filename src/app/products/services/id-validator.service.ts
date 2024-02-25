
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, debounceTime, of, switchMap } from 'rxjs';
import { ProductsService } from './products.service';

export function isIdExistValidator(productService: ProductsService): AsyncValidatorFn {
  return (formControl: AbstractControl): Observable<ValidationErrors | null> => {
    let id: {exist: boolean} = {exist: false};
    return productService.verifyIdProduct(formControl.value)
      .pipe(
        debounceTime(2000),
        switchMap(exist => {
          if (exist) {
            return of({ "exist": true });
          }
          return of(null)
          
        })
        )
  };
}
