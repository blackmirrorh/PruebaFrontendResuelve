import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies     : Movie [] = [];
  foundMovies: Movie [] = [];
  movieTitles: string[] = [];
  suggestions: string[] = [];
  haveMovies : boolean  = false;
  finded     : boolean  = false;
  dataError  : boolean  = false;
  notFounded : boolean  = false;
  word       : string   = '';

  constructor( private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.haveMovies = true;
    this.notFounded = false;
    this.findMoviesWithService();
  }

  find() {
    this.notFounded = false;
    this.finded = true;
    this.notFounded = (this.foundMovies.length == 0) ? true : false;
  }

  suggestion(){
    if(this.dataError){
      this.findMoviesWithService();
    }
    this.suggestions = [];
    this.foundMovies = [];
    this.finded = false;
    let j: number = 0;
    for (let i = 0; i < this.movies.length; i++) {
      if( (this.movies[i].title.toLowerCase().search( this.word.toLowerCase() )) >= 0 ){
        this.foundMovies[j] = this.movies[i];
        this.suggestions[j] = this.movies[i].title;
        this.suggestions = this.suggestions.splice(0, 4);
        j += 1;
      }
    }
  }

  findMoviesWithService(){
    this.haveMovies = false;
    this.dataError = false;
    this.movieService.getAllMovies()
        .subscribe(movies =>{
          this.movies = movies;
          this.movieTitles = this.movies.map( element => element.title );
          this.haveMovies = true;
        }, err => {
          this.dataError = true;
          console.error('Error en la data' + err);
        }
    );
  }

}
