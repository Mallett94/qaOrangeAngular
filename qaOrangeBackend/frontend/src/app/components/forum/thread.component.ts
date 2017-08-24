import { Component, Input, OnInit } from '@angular/core';
import { Thread } from '../../services/thread'; 
import { ThreadService} from '../../services/thread.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  constructor(
    private threadService: ThreadService,
    private route: ActivatedRoute,
  ) {}
  @Input() thread: Thread;
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.threadService.getThread(+params.get('id')))
      .subscribe(thread => this.thread = thread);
  }
}
