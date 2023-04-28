
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule,FormBuilder  } from "@angular/forms";
import { BillManagementComponent } from './components/bill-management.component';
import { BillManagementListComponent } from './components/bill-management-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BillManagementComponent,
    BillManagementListComponent
  ]
})
export class BillManagementModule { }
