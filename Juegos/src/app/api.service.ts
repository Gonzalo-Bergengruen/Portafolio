import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  key = "?key=5ca059457b3849848f6ca21a771e278a";
  apiUrl= "https://api.rawg.io/api/games";
  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.key + "&page=1").pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<any>('getHeroes', []))
    );
  }

  getGame(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/" + id + this.key ).pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<any>('getHeroes'))
    );
  }

  searchGame(term: string): Observable<any> {
    if (!term.trim()){
      return of([])
    }
    return this.http.get<any[]>(`${this.apiUrl}${this.key}/?name=${term}`).pipe(
      tap(x => x.length ?
         console.log(`found heroes matching "${term}"`) :
         console.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<any[]>('searchHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}