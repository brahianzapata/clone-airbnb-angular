import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formGroup : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void{
    this.formGroup = this.formBuilder.group({
      name: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['@',[ Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.maxLength(16), this.validatePassword]]
    });
  }

  private validatePassword(control: AbstractControl){
    const password = control.value;
    let error = null;
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(! er.test(password)){
      error = {customError: 'Debe tener al menos una mayuscula, un numero y ser minimo de 8 caracteres'};       
    }
    return error;
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    
    if(control.touched && control.errors != null){
      error = this.errorMapping(control.errors);
    }
    return error;
  }

  private errorMapping(errors: any){
    let errorMessage = '';

    if(errors.required){
      errorMessage += 'Campo obligatorio.';
    }
    if(errors.customError){
      errorMessage += errors.customError;
    }
    if(errors.maxlength){
      errorMessage += `La longitud maximo debe ser ${errors.maxLength.requiredLength}`;
    }
    if(errors.email){
      errorMessage += 'Debes ingresar un correo valido '
    }
    return errorMessage;
  }

  registro(){
    const data = this.formGroup.value;
    const usuario = { name: "Brahian",phone:"123", identification: "1214",
    email: 'brahian@banco.com', password: "Bancolombia2020" }
    console.log('data register', data);
    this.usersService.singup(data).subscribe(res =>{
      console.log(res);
      if(res.status === 1){
        this.router.navigate(['/singin']);
      }
    });
  }

}
