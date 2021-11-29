import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyScreenComponent } from './components/buy-screen/buy-screen.component';
import { FinalizeOrderComponent } from './components/finalize-order/finalize-order.component';
import { ModalConfirmationCancelComponent } from './components/modal-confirmation-cancel/modal-confirmation-cancel.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { NFEComponent } from './components/nf-e/nf-e.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { ProductCrudComponent } from './pages/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductCrudComponent,
  },
  {
    path: 'products/create',
    component: ProductCreateComponent,
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent,
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'cart/:id',
    component: ModalConfirmationComponent,
  },
  {
    path: 'order',
    component: FinalizeOrderComponent,
  },
  {
    path: 'order/:id',
    component: ModalConfirmationCancelComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'request',
    component: MyRequestsComponent,
  },
  {
    path: 'buy',
    component: BuyScreenComponent,
  },
  {
    path: 'nf-e',
    component: NFEComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
