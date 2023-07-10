import {
    animate,
    state,
    style,
    transition,
    trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MessageLevel } from "./message-level.enum";

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
            transition("void => *", [style({ opacity: 0 }), animate(200)]),
            transition("* => void", [animate(200, style({ opacity: 0 }))]),
        ]),
    ],
})
export class MessagePopupComponent implements OnInit {
    messages: Message[] = [];

    constructor() {}

    ngOnInit(): void {}

    addMessage(message: string, level: MessageLevel = MessageLevel.Primary) {
        const timeId: string = "" + new Date().getTime();
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
        }, 2000);
    }
}

interface Message {
    id: string;
    text: string;
    level: string;
    hideTimeout: NodeJS.Timeout | undefined;
}
