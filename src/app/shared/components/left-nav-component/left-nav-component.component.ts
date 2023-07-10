import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: "app-left-nav-component",
    templateUrl: "./left-nav-component.component.html",
    styleUrls: ["./left-nav-component.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class LeftNavComponentComponent implements OnInit {
    isExpanded: boolean = true;
    isCollapsed = false
    urlInstagram = environment.URL_INSTAGRAM;
    urlTwitter = environment.URL_TWITTER;
    urlFaceBook = environment.URL_FACEBOOK;

    constructor() {}

    ngOnInit(): void {}

    toggleLeftNav() {
        this.isExpanded = !this.isExpanded;
    }
}
