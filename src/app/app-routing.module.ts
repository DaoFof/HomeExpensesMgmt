import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoryComponent} from './category/category.component';
import {ExpenseComponent} from './expense/expense.component';
import {IncomeComponent} from './income/income.component';

const routes: Routes = [{
    path:'',
    component: DashboardComponent
  },{
    path:'expense',
    component: ExpenseComponent
  },{
    path: 'category',
    component: CategoryComponent
  },{
    path: 'income',
    component: IncomeComponent
  }];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
