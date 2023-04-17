import { Component, NgModule } from '@angular/core';
import { BillManagementComponent } from './components/bill-management.component';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { BillManagementListComponent } from './components/bill-management-list.component';

export const BillManagementRoutes: Routes = [
  {

    path: '',
    component: BillManagementComponent,
    data: {
      Title: "Customer account"
    },
    children: [
      {
        path: '',
        redirectTo: '/signed/billmanagement/billmanagementlist',
        pathMatch: 'full',
      },
      {
        path:"billmanagementlist",
        component: BillManagementListComponent,
        data: {
          Title: "Bill Management List"
        }
      },
    ]
  }
];