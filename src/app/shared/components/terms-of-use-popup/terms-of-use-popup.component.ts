import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { environment } from "src/environments/environment";


@Component({
    selector: "app-terms-of-use-popup",
    templateUrl: "./terms-of-use-popup.component.html",
    styleUrls: ["./terms-of-use-popup.component.scss"],
})
export class TermsOfUsePopupComponent implements OnInit {
    @Output() termsAccepted: EventEmitter<void> = new EventEmitter<void>();
    @Output() termsCalled: EventEmitter<void> = new EventEmitter<void>();
    termsChecked: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    acceptTerms(): void {
        this.termsChecked = true;
        this.termsAccepted.emit();
    }

    longMessage: string = environment.TERMS_OF_USE;

    cancelPopup(): void {
        this.termsChecked = false;
        this.termsCalled.emit();
    }
}
