import {Injectable} from '@angular/core';
import {MessageLevel} from './message-level.enum';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MessagePopupService {
  private messageObservable = new Subject<MessageSimple>();

  constructor() {
  }

  addMessage(message: string, level: MessageLevel = MessageLevel.Primary) {
    this.messageObservable.next(
      {
        message: message,
        level: level
      }
    )
  }

  getMessage(): Observable<MessageSimple> {
    return this.messageObservable.asObservable();
  }
}

interface MessageSimple {
  message: string;
  level: MessageLevel;
}
