import { Component, Input, OnInit } from '@angular/core';
import { Thread } from '../../services/thread'; 
import { ThreadService} from '../../services/thread.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'thread',
  template: `
    <div *ngIf='thread'>
      <h2>{{thread.title}}</h2>
      <ul>
        <li *ngFor='let post of thread.posts'>{{post.content}}</li>
      </ul>
    </div>
  `,
  providers: [ThreadService]
})

export class ThreadComponent implements OnInit {
  route;
  constructor(private threadService: ThreadService, route: ActivatedRoute, location: Location) {}
  @Input() thread: Thread;
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.threadService.getThread(+params.get('id')))
      .subscribe(thread => this.thread = thread);
  }
}
