import {animate, state, style, transition, trigger,} from "@angular/animations";
import {Component, OnInit} from "@angular/core";
import {MessageLevel} from "./message-level.enum";
import {MessagePopupService} from "./message-popup.service";

@Component({
  selector: "app-message-popup",
  templateUrl: "./message-popup.component.html",
  styleUrls: ["./message-popup.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state(
        "in",
        style({
          opacity: 1,
        })
      ),
      transition("void => *", [style({opacity: 0}), animate(200)]),
      transition("* => void", [animate(200, style({opacity: 0}))]),
    ]),
  ],
})
export class MessagePopupComponent implements OnInit {
  readonly TIME_REFIX_ID = "TimeId_";
  readonly A_SECOND: number = 1000;

  messages: Message[] = [];

  constructor(private messagePopupService: MessagePopupService) {
  }

  ngOnInit(): void {
    this.messagePopupService.getMessage()
      .subscribe(msg => {
                this.addMessage(msg.message, msg.level)
      });
  }

  addMessage(message: string, level: MessageLevel = MessageLevel.Primary) {
    const timeId: string = this.TIME_REFIX_ID + new Date().getTime();
    const newMessage: Message = {
      id: timeId,
      text: message,
      level: level,
      hideTimeout: undefined,
    };
    this.messages.push(newMessage);
    this._setHideTimeout(newMessage);
  }

  onMouseEnter(message: Message) {
    clearTimeout(message.hideTimeout);
  }

  onMouseLeave(message: Message) {
    this._setHideTimeout(message);
  }

  private _setHideTimeout(message: Message) {
    message.hideTimeout = setTimeout(() => {
      this.messages = this.messages.filter(
        (msg) => msg.id !== message.id
      );
    }, 2 * this.A_SECOND);
  }
}

interface Message {
  id: string;
  text: string;
  level: string;
  hideTimeout: NodeJS.Timeout | undefined;
}
