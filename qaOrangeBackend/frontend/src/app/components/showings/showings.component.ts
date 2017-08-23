import { Component, Directive } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'showings',
  templateUrl: 'showings.component.html',
  providers: [PostsService],

})
export class ShowingsComponent  {
  films: Film[];
  isActive: boolean;
  filmName: string;
  filmDesc: string;
  trailer;
  comments: string[];


  constructor(private postsService: PostsService, public sanitizer: DomSanitizer){
    this.postsService.getFilms().subscribe(films => {
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
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(film.trailer);
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
