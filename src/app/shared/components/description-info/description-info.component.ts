import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from "@angular/animations";

@Component({
    selector: "app-description-info",
    templateUrl: "./description-info.component.html",
    styleUrls: ["./description-info.component.scss"],
    // animations: [
    //     trigger("fadeInOut", [
    //         state("void", style({ opacity: 0 })),
    //         transition(":enter", animate(500)),
    //         transition(":leave", animate(500)),
    //     ]),
    // ],
    animations: [
        trigger('slideInOut', [
          state('void', style({ transform: 'translateY(100%)', opacity: 0 })),
          state('*', style({ transform: 'translateY(0)', opacity: 1 })),
          transition(':enter', animate('150ms ease-out')),
          transition(':leave', animate('500ms ease-in')),
        ])
      ]
})
export class DescriptionInfoComponent implements OnInit {
    @Input("isShowDescriptionImg") isShowDescriptionImg: boolean = false;
    @Output("showRatingDialog") showRatingDialog: EventEmitter<void> = new EventEmitter<void>();

    menuState: string = "in";

    constructor() {}

    ngOnInit(): void {
        this.menuState = this.isShowDescriptionImg === true ? "in" : "out";
    }

    openRatingDialog(): void {
        this.showRatingDialog.emit();
    }
}
