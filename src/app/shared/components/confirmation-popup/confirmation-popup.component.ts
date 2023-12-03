import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService} from './confirmation.service';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopupComponent implements OnInit {
  @ViewChild('confirmationModal') confirmationModal!: ElementRef;

  isOpen: boolean = false;
  messageConfirmation: string = '';

  constructor(private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.confirmationService
      .getConfirmationMessage()
      .subscribe((msg) => {
        this.messageConfirmation = msg;
        this.show();
      });
  }


  show(): void {
    this.isOpen = true
  }

  hide(): void {
    this.isOpen = false;
  }

  confirmAction(): void {
    this.confirmationService.performFunction()
    this.hide();
  }
}
