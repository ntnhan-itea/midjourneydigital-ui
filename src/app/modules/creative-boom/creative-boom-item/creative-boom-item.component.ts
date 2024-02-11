import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InspirationInfo } from '../../../core/models/creative-boom/creative-boom.model';

@Component({
  selector: 'app-creative-boom-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creative-boom-item.component.html',
  styleUrls: ['./creative-boom-item.component.scss'],
})
export class CreativeBoomItemComponent {
  @Input({ alias: 'inspiration', required: true })
  inspiration!: InspirationInfo;

  creationDate: Date = new Date();
}
