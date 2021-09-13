import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }

  private baseUrl: string = 'https://ghibliapi.herokuapp.com';

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${ this.baseUrl }/films`);
  }

}
