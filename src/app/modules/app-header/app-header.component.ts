import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessagePopupService} from "../../shared/components/message-popup/message-popup.service";
import {MessageLevel} from "../../shared/components/message-popup/message-level.enum";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messagePopupService: MessagePopupService
  ) {}

  switchPage(page: string) {
    this.router.navigate([page])
      .catch(error => {
        console.error({changePageErr: error})

        const errMessage: string = error.message || "Somethings went wrong when changing the page";

        this.messagePopupService.addMessage(errMessage, MessageLevel.Error);
      });
  }
}
