import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from './confirmation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopupComponent implements OnInit {
  @ViewChild('confirmationModal') confirmationModal!: ElementRef;

  isOpen: boolean = false;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.confirmationService.confirmationMessage$.subscribe((msg) => {
      console.log({msg});
      this.show();
    });
  }

  get message(): Observable<string> {
    return this.confirmationService.confirmationMessage$;
  }

  show(): void {
    this.isOpen  = true
  }

  hide(): void {
    this.isOpen = false;
  }

  confirmAction() {
    // this.confirmationService.confirmActionCallback$.subscribe((fn) => fn());
    this.confirmationService.actionFn()
    console.log("------");
    
    this.hide();
  }
}
