import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _baseUrl: string = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products"
  private _headers = {
    "authorId": "22609711"
  }

  constructor(private _httpClient: HttpClient) { }

  public getProducts(): Observable<Product[] | undefined>{
    return this._httpClient.get<Product[]>(this._baseUrl, { headers: this._headers}).pipe(
      catchError( error => of(undefined))
    );
  }

  public createProduct(product: Product): Observable<Product | undefined>{
    return this._httpClient.post<Product>(this._baseUrl, product, {headers: this._headers}).pipe(
      catchError( error => {
        return of(undefined)
      })
    )
  }

  public verifyIdProduct(id: string): Observable<boolean | undefined>{
    return this._httpClient.get<boolean>(`${this._baseUrl}/verification?id=${id}`, {headers: this._headers}).pipe(
      catchError( error => {
        return of(undefined)
      })
    )
  }

  public deleteProduct(id: string): Observable<boolean | undefined>{
    return this._httpClient.delete<boolean>(`${this._baseUrl}?id=${id}`, {headers: this._headers}).pipe(
      catchError( error => {
        return of(undefined)
      })
    )
  }

  public updateProduct(product: Product){
    return this._httpClient.put<Product>(`${this._baseUrl}`, product, {headers: this._headers}).pipe(
      catchError( error => {
        return of(undefined)
      })
    )
  }
}
