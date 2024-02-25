import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { ProductsService } from '../../../services/products.service';
import { of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.css'
})
export class TableContentComponent {

  @Input()
  public tableContent: Product[] = [];
  public clicked: boolean = false;
  public name: string = "";
  public id: string = "";

  constructor(
    private _productService: ProductsService,
    private _router: Router) {

  }

  onClickDelete(id: string, name: string) {
    this.id = id
    this.name = name;
    let myDialog = document.querySelector<HTMLDialogElement>('#my-dialog');
    myDialog!.showModal();
  }

  confirmDialog() {
    this._productService.deleteProduct(this.id).subscribe(() => {
      this.closeDialog();
      location.reload();
    })
  }

  closeDialog() {
    let myDialog = document.querySelector<HTMLDialogElement>('#my-dialog');
    myDialog!.close();
  }

}

