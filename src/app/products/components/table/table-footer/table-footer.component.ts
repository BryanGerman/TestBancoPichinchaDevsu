import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.css'
})
export class TableFooterComponent {

  @Input()
  public numberOfResultsShown: number = 1;

  @Input()
  public totalNumberResults: number = 0;

  @Output()
  public selectedNumberResults: EventEmitter<number> = new EventEmitter<number>()

  @Output()
  public selectedPage: EventEmitter<number> = new EventEmitter<number>();

  public resultsCountOption = [5, 10, 20]
  public totalPages: number = 0;
  public selectedPageValue:number = 1;
  public selectedOption: number = 5;

  
  
  constructor(){
    
  }

  public numberOfPagesShown(){
    if(this.numberOfResultsShown == 1 || this.totalNumberResults == 0) return;
    return [...Array(this.totalPages).keys()].map(i => i + 1);
  }

  public showPagination(){
    this.totalPages = Math.ceil(this.totalNumberResults / this.selectedOption)
    return this.totalPages > 1
  }

  public onSelectChange(option: string){
    this.selectedOption = Number(option)
    this.selectedPageValue = 1;
    this.selectedPage.emit(Number(this.selectedPageValue));
    this.selectedNumberResults.emit(Number(option));
  }

  public onClickPage(page: number | string | null){
    if(!page) return
    this.selectedPageValue = Number(page);
    this.selectedPage.emit(Number(page));
  }

 

}
