import { Injectable } from '@angular/core';
import { Thread } from './thread';
import { THREADS } from './mock-threads';

@Injectable()
export class ThreadService {
  getThreads(): Promise<Thread[]> {
    console.log(THREADS);
    return Promise.resolve(THREADS);	
    }
  getThread(id: number): Promise<Thread> {
    return this.getThreads()
      .then(threads => threads.find(thread => thread.id === id));
  }
}
