import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'showings',
  template: `
  <h1>Showings Page</h1>
  <div>
    <div *ngFor="let film of films" class="mdl-grid film-grid">
      <h4 class="mdl-card__title-text">{{film.film_name}}</h4>
    </div>
    <div class="mdl-card__supporting-text mdl-color-text--white">{{film.quote}}</div>
  </div>
  `,
  providers: [PostsService]
})

export class ShowingsComponent  {
  films: Film[];
  
    constructor(private postsService: PostsService){
      this.postsService.getFilms().subscribe(films => {
        this.films = films;
        console.log(this.films);
      });
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

