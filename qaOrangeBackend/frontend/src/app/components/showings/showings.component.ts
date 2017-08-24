//nathan
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'showings',
  templateUrl: 'showings.component.html',
  providers: [ApiService],

})
export class ShowingsComponent implements OnInit {
  films: Film[];
  isActive: boolean;
  filmName: string;
  filmDesc: string;
  trailer;
  comments: string[];


  constructor(public apiService:ApiService){
    this.isActive = false;
    this.filmName = '';
    this.filmDesc = '';
    this.trailer = undefined;
    this.comments = [''];
  }

  ngOnInit() {

    this.apiService.getFilms()
      .subscribe(
        films => this.films = films
        // films => console.log(films)
    );

    // this.apiService.bookingSubject.subscribe(
    //   res => console.log(res)
    //   //data => this.filmName = data
    //   )

  }


  onSelect(film) {
    this.toggleIsActive();
    this.filmName = film.film_name;
    this.filmDesc = film.film_description;
    this.trailer = film.trailer;
    this.comments = film.comments;
     console.log(this.filmName);
    // this.apiService.getFilmName(film)
  }

  onClose() {
    this.toggleIsActive();
    this.filmName = '';
    this.filmDesc = '';
    this.trailer = undefined;
    this.comments = [''];
	}

  toggleIsActive() {
    this.isActive = !this.isActive;
  }

  onClickBook() {
    // console.log(this.filmName);

    this.apiService.getFilmName(this.filmName);
  }

};

interface Film {
  id: number;
  film_name: string;
  release_date: number;
  age_rating: string;
  img: string;
  quote: string;
  film_description: string;
  trailer: string;
  comments: [string]
}
