import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinginRoutingModule } from './singin-routing.module';



@NgModule({
  declarations: [
    SinginComponent, 
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SinginRoutingModule
  ]
})
export class SinginModule { }
