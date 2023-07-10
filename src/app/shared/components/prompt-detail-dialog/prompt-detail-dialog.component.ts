import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';

@Component({
  selector: 'app-prompt-detail-dialog',
  templateUrl: './prompt-detail-dialog.component.html',
  styleUrls: ['./prompt-detail-dialog.component.scss']
})
export class PromptDetailDialogComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() imageDetailUrl: String = '';

  constructor() { }

  ngOnInit(): void {
  }  

  closeDialog(): void {
    this.close.emit();
  }

  ratings: number[] = [1, 2, 3, 4, 5];
  currentRating: number = 0;

  rate(rating: number): void {
    this.currentRating = rating;
    console.log(this.currentRating)
    // Add your logic for handling the rating here, such as updating the image rating in your data model
  }
}
