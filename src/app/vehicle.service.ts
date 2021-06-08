/** This vehicle service does all the data manipulation to the vehicles. */

import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Vehicle } from "./vehicle";
import { MOCKCARS } from "./mock-cars";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /** URL to web api */
  private vehiclesUrl = 'api/vehicles';

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** GET vehicles by id. Will 404 if not found */
  getVehicles(): Observable<Vehicle[]> {

    return this.http.get<Vehicle[]>(this.vehiclesUrl)
      .pipe(
      tap(_ => this.log('fetched vehicles')),
      catchError(this.handleError<Vehicle[]>('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
