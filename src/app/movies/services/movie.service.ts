import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }

  private baseUrl: string = 'https://ghibliapi.herokuapp.com/';

  getAllMovies(): Observable<any>{
    return this.http.get<any>(`${ this.baseUrl }/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`);
  }

}
