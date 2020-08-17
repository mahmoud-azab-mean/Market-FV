import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

import { AdminGuard } from './guards/admin.guard';
import { NotAuthGuard } from './guards/not-auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent, data: {index: 0} },
  { path: 'login', component: LoginComponent, data: {index: 1} },
  { path: 'signup', component: SignupComponent ,data: {index: 2} },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], data: {index: 3} },
  { path: 'goods', component: GoodsComponent,  canActivate: [AdminGuard],   data: {index: 4} },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
