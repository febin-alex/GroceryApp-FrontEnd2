import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { authGuard } from './guard/auth.guard';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'category/:catId',component:ProductPageComponent},
  {path:'category/:catId/:subCatId',component:ProductPageComponent},
  {path:'products/:productId',component:ProductDetailPageComponent,canActivate:[authGuard]},
  {path:'search/:productName',component:SearchPageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'cart',component:CartPageComponent,canActivate:[authGuard]},
  {path:'buy',component:BuyPageComponent},
  {path:'**',component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
