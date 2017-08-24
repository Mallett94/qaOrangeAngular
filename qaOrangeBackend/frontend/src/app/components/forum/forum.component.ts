import { Component, OnInit } from '@angular/core';
import { Thread } from '../../services/thread';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'forum',
  template: `
    <li>
      <ul *ngFor='let thread of threads'><a [routerLink]="['/thread', thread.id]">{{thread.title}}</a></ul>
    </li>
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
