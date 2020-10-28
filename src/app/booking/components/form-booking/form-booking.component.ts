import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { BookingService } from '../../../services/booking/booking.service';
import { IBooking } from '../../../shared/models/IBooking.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroup:FormGroup;
  @Input() experiencesId: string;
  fechaIngreso: string;
 
  constructor(private formBuilder: FormBuilder,
              private bookingServices: BookingService) { 
   
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.formGroup = this.formBuilder.group({
      fechaIngreso: ['',[Validators.required, this.validateFechaIngreso]],
      fechaSalida: ['',[Validators.required, this.validateFechaSalida]],
      comentarios: ['',[Validators.required, Validators.minLength(10)]]
    },{
      validators: this.validateDateRanger()
    });
  }

  booking(){
    const data = this.formGroup.value;
    const booking = {
      booking_date_start: data.fechaIngreso,
      booking_date_end: data.fechaSalida,
      experience_id: this.experiencesId,
      comments: data.comentarios
    }

    this.bookingServices.booking(booking).subscribe( resp => {
      if(resp.status === 1){
        alert(`Se creo el booking correctamente su ticket es ${resp.response._id}.`);
      }else{
        alert('Problemas generando el booking por favor vuelva a intentarlo');
      }
    });
  }

  private validateFechaIngreso(control: AbstractControl){
    const fechaIngreso = control.value;
    let error = null;

    var fechaIngresada = new Date(String(fechaIngreso).split('-')[0]+ '/' +
                      String(fechaIngreso).split('-')[1]+ '/' +
                      String(fechaIngreso).split('-')[2]); 
    var fechaActual = new Date();
    
    fechaIngresada.setHours(0, 0, 0, 0);	 
    fechaActual.setHours(0, 0, 0, 0);	 

    if(fechaIngresada.getTime() < fechaActual.getTime()){
      error = {customError: 'La fecha debe ser mayor a la fecha de ingreso'};          
    }

    return error;
  }

  private validateFechaSalida(control: AbstractControl){
    const fechaSalida = control.value;
    let error = null;

    var fechaSalida2 = new Date(String(fechaSalida).split('-')[0]+ '/' +
                      String(fechaSalida).split('-')[1]+ '/' +
                      String(fechaSalida).split('-')[2]); 
    var fechaActual = new Date();
    
    fechaSalida2.setHours(0, 0, 0, 0)	 
    fechaActual.setHours(0, 0, 0, 0)	 

    if(fechaSalida2.getTime() < fechaActual.getTime()){
      error = {customError: 'La fecha debe ser mayor o igual a la actual'};          
    }
    return error;
  }

  private validateDateRanger(){
    return (formGroup: FormGroup) => {
      const controlBookingDateStart = formGroup.controls['fechaIngreso'];
      const controlBookingDateEnd = formGroup.controls['fechaSalida'];
      if( new Date(controlBookingDateStart.value) > new Date(controlBookingDateEnd.value)){
        controlBookingDateEnd.setErrors({mustGreaterThan: true});
      }
    }
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    
    if(control.touched && control.errors != null){
      error = this.addError(control.errors)
    }
    return error;
  }


  private addError( errors: any): string{
    console.log(errors);
    let errorMessages = '';

    if(errors.required){
      errorMessages += 'Campo obligatorio.';
    }
    if(errors.customError){
      errorMessages += errors.customError;
    }
    if(errors.mustGreaterThan){
      errorMessages +='La fecha debe ser mayor a la inicial';
    }
    return errorMessages;
  }

}
