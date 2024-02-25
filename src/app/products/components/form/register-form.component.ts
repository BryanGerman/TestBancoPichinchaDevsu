import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { isIdExistValidator } from '../../services/id-validator.service';
import { forkJoin, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  public nowDate = ""
  public now: string = this.tranformDate(new Date().toISOString());
  public paramId: string | undefined = undefined;

  public myForm: FormGroup = new FormGroup({});
  public product?: Product;

  constructor(private _formBuilder: FormBuilder,
    private _validatorsService: ValidatorsService,
    private _productService: ProductsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }
 
  ngOnInit(): void {
    this.initializeForm();
    this._activatedRoute.params
      .pipe(switchMap(({ id }) => forkJoin({ products: this._productService.getProducts(), id: of(id) })))
      .subscribe(({ products, id }) => {
        let idTest = id
        if (!products) return this._router.navigateByUrl("/products/list")
        if (!id) return;
        this.paramId = id;
        this.product = products.filter(product => product.id === id)[0]
        if(this.product){
          this.product.date_release = this.tranformDate(this.product.date_release)
          this.product.date_revision = this.tranformDate(this.product.date_revision)
          this.myForm.reset(this.product)
          this.myForm.get("id")?.disable()
        } 
        return this.product
      });
  }

  initializeForm() {

    this.myForm = this._formBuilder.group({
      id: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)], [isIdExistValidator(this._productService)]],
      name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      logo: ["", Validators.required],
      date_release: ["", Validators.required],
      date_revision: [{ value: '', disabled: true }, Validators.required],
    })
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.myForm, field);
  }



  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    let product: Product = {
      id: this.myForm.controls["id"].value,
      name: this.myForm.controls["name"].value,
      logo: this.myForm.controls["logo"].value,
      description: this.myForm.controls["description"].value,
      date_revision: this.myForm.controls["date_revision"].value,
      date_release: this.myForm.controls["date_release"].value,
    }

    let testId = this.paramId

    if(this.paramId){
      this._productService.updateProduct(product).subscribe(product => {
        this._router.navigate(['/products/list'])
      })
    } else {
      this._productService.createProduct(product).subscribe(product => {
        this._router.navigate(['/products/list'])
      })
    }
  }

  onChangeRelease(value: string) {
    let revision_date: Date = new Date(value);
    revision_date.setUTCFullYear((revision_date.getUTCFullYear()) + 1)
    this.myForm.controls["date_revision"].setValue(this.tranformDate(revision_date.toISOString()));
  }


  tranformDate(newDate: string) {
    let date: Date = new Date(newDate)
    let _year = date.getFullYear()
    let _month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    let _day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    return _year.toString() + "-" + _month + "-" + _day

  }

  getErrorMessage(field: string) {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Este campo requiere mínimo ${errors["minlength"].requiredLength} carateres.`
        case 'maxlength':
          return `Este campo requiere máximo ${errors["maxlength"].requiredLength} carateres.`
        case "exist":
          return `ID no válido`

      }
    }
    return null;

  }

  isUpdate(){
    return this.paramId ? true : false;
  }

  isInvalidForm(){
    return this.myForm.invalid
  }

}
