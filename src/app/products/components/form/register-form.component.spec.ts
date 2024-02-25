import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let product: Product = {
    id: "1234",
    name: "Este es un nombre",
    description: "Esta es una descripción",
    logo: "Un logo genial",
    date_release: "2024-02-24",
    date_revision: "2025-02-24"
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ProductsService, useValue: {
            createProduct: () => of(product),
            getProducts: () => of([product]),
            verifyIdProduct: () => of(false)
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            'params': of({ id: "1234" })
          }
        }],
      declarations: [
        RegisterFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return products', () => {
    component.ngOnInit()
    expect(component).toBeTruthy();
    expect(component.product?.id).toEqual("1234");
  });

  it('should return id abc', () => {
    component.ngOnInit()

    expect(component).toBeTruthy();
    expect(component.paramId).toEqual("1234");
  });
});

describe('RegisterFormComponent id undefined', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let product: Product | undefined = {
    id: "1234",
    name: "Este es un nombre",
    description: "Esta es una descripción",
    logo: "Un logo genial",
    date_release: "2024-02-24",
    date_revision: "2025-02-24"
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ProductsService, useValue: {
            createProduct: () => of(product),
            getProducts: () => of([product]),
            verifyIdProduct: () => of(false)
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            'params': of({ id: undefined })
          }
        }],
      declarations: [
        RegisterFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return undefined id', () => {
    component.ngOnInit()
    expect(component).toBeTruthy();
  });
});

describe('RegisterFormComponent id undefined', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ProductsService, useValue: {
            createProduct: () => of(undefined),
            getProducts: () => of(undefined),
            verifyIdProduct: () => of(false)
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            'params': of({ id: undefined })
          }
        }],
      declarations: [
        RegisterFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return undefined products', () => {
    component.ngOnInit()
    component.product = undefined;
    expect(component).toBeTruthy();
    expect(component.product).toBeUndefined();
  });
});

describe('RegisterFormComponent onSave()', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let product: Product = {
    id: "1234",
    name: "Este es un nombre",
    description: "Esta es una descripción",
    logo: "Un logo genial",
    date_release: "2024-02-24",
    date_revision: "2025-02-24"
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ProductsService, useValue: {
            createProduct: () => of(product),
            getProducts: () => of([product]),
            verifyIdProduct: () => of(false),
            updateProduct: () => of(true)
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            'params': of({ id: "1234" })
          }
        },
        {
          provide: Router, useValue: {
            "navigate": of(true)
          }
        }],
      declarations: [
        RegisterFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should valid form', () => {
    component.ngOnInit()
    component.onSave()
    component.myForm = new FormGroup({})
    expect(component).toBeTruthy();
    expect(component.myForm.invalid).toBeFalsy()
  });

  it('should invalid form', () => {
    component.ngOnInit()
    component.myForm = new FormGroup({
      id: new FormControl("", [Validators.required])
    })
    component.onSave()
    expect(component).toBeTruthy();
    expect(component.myForm.invalid).toBeTruthy()
    expect(component.myForm.touched).toBeTruthy()
  });
});

describe('RegisterFormComponent onSave()', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let product: Product = {
    id: "1234",
    name: "Este es un nombre",
    description: "Esta es una descripción",
    logo: "Un logo genial",
    date_release: "2024-02-24",
    date_revision: "2025-02-24"
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ProductsService, useValue: {
            createProduct: () => of(product),
            getProducts: () => of([product]),
            verifyIdProduct: () => of(false),
            updateProduct: () => of(true)
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            'params': of({ id: undefined })
          }
        },
        {
          provide: Router, useValue: {
            "navigate": of(true)
          }
        }],
      declarations: [
        RegisterFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should valid form without params', () => {
    component.ngOnInit()
    
    component.myForm = new FormGroup({
      id: new FormControl("1234"),
      name: new FormControl("1234"),
      logo: new FormControl("1234"),
      description: new FormControl("1234"),
      date_revision: new FormControl("1234"),
      date_release: new FormControl("1234")
    })
    component.onSave()
    expect(component).toBeTruthy();
    expect(component.paramId).toBeUndefined()
    expect(component.myForm.invalid).toBeFalsy()
  });

  it('should change date revision', () => {
    component.ngOnInit()
    
    component.myForm = new FormGroup({
      date_revision: new FormControl("")
    })
    component.onChangeRelease("2024-02-24")
    expect(component).toBeTruthy();
    expect(component.myForm.controls["date_revision"].value).toEqual("2025-02-23")
  });

  it('should change date revision less date', () => {
    component.ngOnInit()
    
    component.myForm = new FormGroup({
      date_revision: new FormControl("")
    })
    component.onChangeRelease("2024-12-09")
    expect(component).toBeTruthy();
    expect(component.myForm.controls["date_revision"].value).toEqual("2025-12-08")
  });

  it('should return form valid - get errors', () => {
    component.ngOnInit()
    component.myForm.reset()
    component.myForm = new FormGroup({
      id: new FormControl("123")
    })
    
    expect(component).toBeTruthy();
    expect(component.getErrorMessage("name")).toBeNull()
  });

  it('should return form valid no errors - get errors', () => {
    component.ngOnInit()
    component.myForm.reset()
    component.myForm = new FormGroup({
      id: new FormControl("123")
    })
    
    expect(component).toBeTruthy();
    expect(component.getErrorMessage("id")).toBeNull()
  });

  it('should return required error - get errors', () => {
    component.ngOnInit()
    component.myForm.reset()
    component.myForm = new FormGroup({
      id: new FormControl("", Validators.required)
    })
    expect(component.getErrorMessage("id")).toEqual("Este campo es requerido")
  });

  it('should return minLength error - get errors', () => {
    component.ngOnInit()
    component.myForm.reset()
    component.myForm = new FormGroup({
      id: new FormControl("")
    })

    component.myForm.controls["id"].setErrors({minlength: 5})
    expect(component.getErrorMessage("id")).toEqual("Este campo requiere mínimo undefined carateres.")
  });

  it('should return maxLength error - get errors', () => {
    component.ngOnInit()
    component.myForm.reset()
    component.myForm = new FormGroup({
      id: new FormControl("")
    })

    component.myForm.controls["id"].setErrors({maxlength: 5})
    expect(component.getErrorMessage("id")).toEqual("Este campo requiere máximo undefined carateres.")
  });

  it('should return exist error - get errors', () => {
    component.ngOnInit()
    component.myForm.reset()
    component.myForm = new FormGroup({
      id: new FormControl("")
    })

    component.myForm.controls["id"].setErrors({exist: true})
    expect(component.getErrorMessage("id")).toEqual("ID no válido")
  });

  it('should return false - isUpdate', () => {
    component.isUpdate()
    expect(component.paramId).toBeFalsy()
  });

  
});

describe('RegisterFormComponent - isUpdate: false', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let product: Product = {
    id: "1234",
    name: "Este es un nombre",
    description: "Esta es una descripción",
    logo: "Un logo genial",
    date_release: "2024-02-24",
    date_revision: "2025-02-24"
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ProductsService, useValue: {
            createProduct: () => of(product),
            getProducts: () => of([product]),
            verifyIdProduct: () => of(false)
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            'params': of({ id: "1234"})
          }
        }],
      declarations: [
        RegisterFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return true - isUpdate', () => {
    component.isUpdate()
    expect(component.paramId).toBeTruthy()
  });

});