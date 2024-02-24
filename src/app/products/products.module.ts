import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { HeaderComponent } from './components/header/header.component';
import { TableContentComponent } from './components/table/table-content/table-content.component';
import { ErrorComponent } from './pages/error/error.component';
import { TableFooterComponent } from './components/table/table-footer/table-footer.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { TableHeaderComponent } from './components/table/table-header/table-header.component';
import { RegisterFormComponent } from './components/form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListProductsComponent,
    HeaderComponent,
    TableContentComponent,
    ErrorComponent,
    TableFooterComponent,
    NewPageComponent,
    TableHeaderComponent,
    RegisterFormComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    
    ReactiveFormsModule
  ],
})
export class ProductsModule { }
