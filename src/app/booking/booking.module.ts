import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormBookingComponent } from './components/form-booking/form-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';



@NgModule({
  declarations: [BookingComponent, FormBookingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
