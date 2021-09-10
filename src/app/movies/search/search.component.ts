import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Movie[] = [];
  movie: string = '';

  constructor( private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  find( movie: string ) {
    console.log( movie );
    this.movie = movie;    
    this.movieService.getAllMovies()
        .subscribe(movies =>{
          this.movies = movies;
          console.log(this.movies);
        }, err => {
          console.error('Error en la data' + err);
        }
    );
  }

}
