import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  public isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors
      && form.controls[field].touched;

  }
}
