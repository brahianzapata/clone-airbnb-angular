import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.formGroup = this.formBuilder.group({
      email: ['@',[ Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(4)]]
    })
  }

  login(){
    const data = this.formGroup.value;
    console.log('data logeado', data);
    this.usersService.singin(data.email, data.password).subscribe(res =>{
      console.log(res);
      if(res.status === 1){
        this.usersService.guardarToken(res.token);
        this.router.navigate(['/home']);
      }else{
        alert('Usuario y contraseña incorrectos');
      }
    });
  }

}
