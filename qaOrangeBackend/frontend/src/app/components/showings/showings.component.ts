import { Component, Directive } from '@angular/core';
import { PostsService } from '../../services/posts.service';

import { ShowingsListComponent } from './showingsList.component';

@Component({
  moduleId: module.id,
  selector: 'showings',
  templateUrl: 'showings.component.html',
  providers: [PostsService],

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
//<FilmPageList films={this.state.films} />
