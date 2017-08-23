import { Component, OnInit } from '@angular/core';
import { Thread } from '../../services/thread';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'forum',
  template: `
    <a *ngFor='let thread of threads' [routerLink]="['/thread', thread.id]">{{thread.title}}</a>
  `,
  providers: [ThreadService]
})

export class ForumComponent implements OnInit {
  threads: Thread[] = [];
  constructor(private threadService: ThreadService) {}
  ngOnInit(): void {
    this.threadService.getThreads()
      .then(threads => this.threads = threads);
  }
}
