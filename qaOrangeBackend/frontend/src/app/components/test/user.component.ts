//user.components.ts
import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];


  constructor(private postsService: PostsService){
    this.name = 'Nathan',
    this.email = 'nmallett94@gmail.com',
    this.address = {
      street: '15 The Burrows',
      city: 'Batley',
      county: 'West Yorkshire'
    }
    this.hobbies = ['Sports', 'Reading fiction', 'Video games'],
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;

    });
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }

}

interface address {
  street: string;
  city: string;
  county: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
