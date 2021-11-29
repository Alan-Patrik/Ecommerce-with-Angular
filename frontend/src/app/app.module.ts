import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCrudComponent } from './pages/product-crud/product-crud.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { FinalizeOrderComponent } from './components/finalize-order/finalize-order.component';
import { ModalConfirmationCancelComponent } from './components/modal-confirmation-cancel/modal-confirmation-cancel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NFEComponent } from './components/nf-e/nf-e.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RegisterComponent } from './components/register/register.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { BuyScreenComponent } from './components/buy-screen/buy-screen.component';
import { CartNotFoundComponent } from './components/cart-not-found/cart-not-found.component';
import { ChangeStyleDirective } from './directives/change-style.directive';
import { MyForDirective } from './directives/my-for.directive';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ShoppingCartComponent,
    ModalConfirmationComponent,
    FinalizeOrderComponent,
    ModalConfirmationCancelComponent,
    PageNotFoundComponent,
    NFEComponent,
    LoadingComponent,
    RegisterComponent,
    MyRequestsComponent,
    BuyScreenComponent,
    CartNotFoundComponent,
    ChangeStyleDirective,
    MyForDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
