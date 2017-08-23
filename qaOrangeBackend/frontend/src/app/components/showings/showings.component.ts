import { Component, Directive } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'showings',
  templateUrl: 'showings.component.html',
  providers: [ApiService],

})
export class ShowingsComponent  {
  films: Film[];
  isActive: boolean;
  filmName: string;
  filmDesc: string;
  trailer;
  comments: string[];


  constructor(private apiService:ApiService){
    this.apiService.getFilms().subscribe(films => {
      this.films = films;
      console.log(this.films);
    });
    this.isActive = false;
    this.filmName = '';
    this.filmDesc = '';
    this.trailer = undefined;
    this.comments = [''];
  }

  onSelect(film) {
    this.toggleIsActive();
    this.filmName = film.film_name;
    this.filmDesc = film.film_description;
    this.trailer = film.trailer;
    this.comments = film.comments;
  }

  onClose() {
    this.toggleIsActive();
    this.filmName = '';
    this.filmDesc = '';
    this.trailer = undefined;
    this.comments = [''];
	}

  toggleIsActive() {
    console.log('isActive= ' + this.isActive);
    this.isActive = !this.isActive;
    console.log('isActive= ' + this.isActive);
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
//<FilmPageList films={this.state.films} />
