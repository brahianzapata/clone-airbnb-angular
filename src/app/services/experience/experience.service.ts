import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iexperience } from 'src/app/shared/models/Iexperience.model';
import { catchError, retry } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
import { IexperienceResponse } from '../../shared/models/IExperiencesResponse.model';
import { Itop5Response } from '../../shared/models/ITop5Response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlAPI: string = environment.urlBase;
  experiences: Array<Iexperience>;


  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    return throwError(`Error calling api ${error.message}`)
  }

  public getExperiences(page: number): Array<Iexperience>{
    const add = 3 * page;
    const url = `${​​​​​this.urlAPI}​​​​​/experiences`;

    this.httpClient.get<IexperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    ).subscribe(res =>{
      this.experiences = res.experiences.slice( 0 + add , 3 + add );
    });
    console.log(this.experiences);
    return this.experiences;
  }

  public getExperiencesAll(): Observable<IexperienceResponse>{
    const url = `${​​​​​this.urlAPI}​​​​​/experiences`;
    return this.httpClient.get<IexperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperiencesTop5(): Observable<Itop5Response>{
    const url = `${​​​​​this.urlAPI}​​​​​/experiences/top5`;
    return this.httpClient.get<Itop5Response>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperiencebyId(id: string): Observable<any> {
    const url = `${​​​​​this.urlAPI}​​​​​/experiences/detail/${id}`;
    return this.httpClient.get<Itop5Response>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  buscarExperience( texto: string){

    const searchExperiences = new Array<Iexperience>();
    const url = `${​​​​​this.urlAPI}​​​​​/experiences`;

    return new Promise((resolve) =>{
      this.httpClient.get<IexperienceResponse>(url).pipe(
        retry(2), catchError(this.handlerError)
      ).subscribe( resp => {
        resp.experiences.forEach( element => {
          if( !element.place.toLowerCase().indexOf(texto.toLowerCase())){
            searchExperiences.push(element);
          }
        });
        resolve(searchExperiences);
      });
    });
  }
}
