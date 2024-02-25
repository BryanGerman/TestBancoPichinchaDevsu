import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContentComponent } from './table-content.component';
import { ProductsService } from '../../../services/products.service';
import { of } from 'rxjs';
import { DOCUMENT } from '@angular/common';

describe('TableComponent', () => {
  let component: TableContentComponent;
  let fixture: ComponentFixture<TableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableContentComponent],
      providers: [
        {
          provide: ProductsService, useValue: {
            deleteProduct: () => of(true)
          }
        }
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onClickDelete()', () => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    component.onClickDelete("x", "x");
    expect(component).toBeTruthy();
    expect(component.id).toEqual("x")
  });

  it('should confirmDialog()', () => {
    component.confirmDialog();
    expect(component).toBeTruthy();
  });

  it('should closeDialog()', () => {
    HTMLDialogElement.prototype.close = jest.fn();
    component.closeDialog();
  });
});
