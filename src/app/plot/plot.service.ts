import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Plot } from './Plot'
import { NgxUiLoaderService } from 'ngx-ui-loader';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  constructor(private http: HttpClient,
    private ngxLoader: NgxUiLoaderService) { }

  private plotsUrl = 'http://192.168.2.94:5555/flats?limit=100&offset=0';  // URL to web api


  
  getPlot (limit:number, offset:number):Observable<Plot[]> {
    let params = new HttpParams();
    params.set('limit', String(limit));
    params.set('offset', String(offset));


    this.ngxLoader.start();
    return this.http.get<Plot[]>(this.plotsUrl)
      .pipe(
        tap(_ => this.ngxLoader.stop()),
        catchError(this.handleError<Plot[]>('getPlot', []))
      );
    
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
