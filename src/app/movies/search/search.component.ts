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

  constructor( private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.haveMovies = true;
  }

  find( word: string ) {
    this.haveMovies = false;
    console.log( word );
    this.word = word;    
    this.movieService.getAllMovies()
        .subscribe(movies =>{
          this.movies = movies;
          this.finded = true;
          console.log(this.movies.find(element => element.title.toLowerCase() == this.word.toLowerCase()));
          this.haveMovies = true;
        }, err => {
          console.error('Error en la data' + err);
        }
    );    
  }

}
