//user.components.ts
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [ApiService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];


  constructor(private apiService: ApiService){
    this.name = 'Nathan',
    this.email = 'nmallett94@gmail.com',
    this.address = {
      street: '15 The Burrows',
      city: 'Batley',
      county: 'West Yorkshire'
    }
    this.hobbies = ['Sports', 'Reading fiction', 'Video games'],
    this.showHobbies = false;

    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);

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
