import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { IUsuario } from '../../shared/models/IUsuario.model';
import { catchError, retry } from 'rxjs/operators';
import { IregisterResponse } from '../../shared/models/IRegisterResponse.model';
import { ILoginResponse } from '../../shared/models/ILoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlAPI: string = environment.urlBase;
  private isLogged: boolean = true;

  constructor(private http: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    console.log('http error', error);
    return throwError(`Error calling api ${error.message}`)
  }

  public singup(usuario: IUsuario): Observable<IregisterResponse>{
    const url = `${​​​​​this.urlAPI}​​​​​/users/signup`;

    return this.http.post<IregisterResponse>(url, usuario)
    .pipe(
        retry(2), catchError(this.handlerError)
    );
  }

  public singin(usuario: string, password: string): Observable<ILoginResponse>{
    const login = {
      email:usuario, password:password
    }
    const url = `${​​​​​this.urlAPI}​​​​​/users/login`;

    return this.http.post<ILoginResponse>(url, login)
    .pipe(
        retry(2), catchError(this.handlerError)
    );
  }

  public guardarToken(token: string){
    if(token !== null){
      localStorage.setItem('token',token);
    }
  }

  public obtenerToken(): string {
    return localStorage.getItem('token');
  }

  public clearToken(): void{
    localStorage.clear();
  }

  public isLoggedUser(){
    this.isLogged = localStorage.getItem('token') ? true : false;
    return this.isLogged;
  }
}
