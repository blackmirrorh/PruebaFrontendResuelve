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
  word: string = '';
  haveMovies: boolean = false;
  finded: boolean = false
  foundMovies: Movie[] = [];

  constructor( private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.haveMovies = true;
  }

  find( word: string ) {
    this.haveMovies = false;
    this.foundMovies = [];
    this.word = word;    
    this.movieService.getAllMovies()
        .subscribe(movies =>{
          this.movies = movies;
          this.finded = true;
          let j = 0;
          for (let i = 0; i < this.movies.length; i++) {
            if( (this.movies[i].title.toLowerCase().search( this.word.toLowerCase() )) >= 0 ){
              this.foundMovies[j] = this.movies[i];
              j += 1;
            }
          }
          this.haveMovies = true;
        }, err => {
          console.error('Error en la data' + err);
        }
    );    
  }

}
