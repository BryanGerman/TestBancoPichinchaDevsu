import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.css'
})
export class TableHeaderComponent {

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _router: Router
  ){}
  
  public onInputChange(text: string){
    this.searchValue.emit(text)
  }

  public onAddButton(): void{
    console.log("click")
    this._router.navigateByUrl("products/new")
  }
}
