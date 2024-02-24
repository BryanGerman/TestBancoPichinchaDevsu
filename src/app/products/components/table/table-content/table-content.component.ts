import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.css'
})
export class TableContentComponent {

  @Input()
  public tableContent: Product[] = [];

}
