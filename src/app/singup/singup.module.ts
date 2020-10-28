import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { SingupComponent } from './singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingupRoutingModule } from './singup-routing.module';


@NgModule({
  declarations: [FormRegisterComponent, SingupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SingupRoutingModule
  ]
})
export class SingupModule { }
