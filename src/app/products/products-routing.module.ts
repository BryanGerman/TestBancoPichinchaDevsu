import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ErrorComponent } from './pages/error/error.component';
import { NewPageComponent } from './pages/new-page/new-page.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutPageComponent,
    children: [
      {
        path: "list", 
        component: ListProductsComponent
      },
      {
        path: "new",
        component: NewPageComponent
      },
      {
        path: "update/:id",
        component: NewPageComponent
      },
      {
        path: "error",
        component: ErrorComponent
      },
      {
        path: "**",
        redirectTo: "list"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
