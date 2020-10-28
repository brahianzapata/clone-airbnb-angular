import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBooking } from '../../shared/models/IBooking.model';
import { catchError, retry } from 'rxjs/operators';
import { IBookingResponse } from '../../shared/models/IBookingResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private urlAPI: string = environment.urlBase;

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    return throwError(`Error calling api ${error.message}`)
  }

  public booking(body: IBooking): Observable<any>{
    const url = `${​​​​​this.urlAPI}​​​​​/booking`;

    return this.httpClient.post(url, body ).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
