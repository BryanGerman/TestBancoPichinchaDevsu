import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  public searchValue: string = '';
  public products: Product[] = [];
  public selectedNumberOfResults: number = 5;
  public selectedPage: number = 1;
  public numberOfProductsShown: number = 0;
  public productLength: number = 0;


  constructor(
    private _productService: ProductsService,
    private _router: Router
    ){
    this.getProducts();
  }

  public getProducts(){
    return this._productService.getProducts().subscribe( (products: Product[] | undefined) => {
      if (!products){
        this._router.navigateByUrl("error");
        return;
      }
      this.products = products;
      this.productLength = this.products.length;
    })
  }

  public getProductsShown(){
    if(this.products.length !== 0){
      let productsShown = this.products.filter( product => product.name.includes(this.searchValue)).slice((this.selectedPage - 1) * this.selectedNumberOfResults ,this.selectedNumberOfResults * this.selectedPage)
      this.numberOfProductsShown = productsShown.length
      return productsShown
    }
    return [];
  }

  public selectedNumberOfResultsEvent(selectedOption: number){
    this.selectedNumberOfResults = selectedOption;
  }

  public selectedPageEvent(page: number){
    this.selectedPage = page;
  }

  public onSearchValue(text: string){
    this.searchValue = text;
  }



}
