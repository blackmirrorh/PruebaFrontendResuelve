import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie!: Movie;

  constructor( ) { }

  ngOnInit(): void {
  }

}
