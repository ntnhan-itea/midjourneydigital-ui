import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InspirationInfo } from '../../../core/models/creative-boom/creative-boom.model';
import {CreativeBoomForm} from "../../../core/models/creative-boom/creative-boom-form.model";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-creative-boom-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creative-boom-item.component.html',
  styleUrls: ['./creative-boom-item.component.scss'],
})
export class CreativeBoomItemComponent {
  @Input({ alias: 'inspiration', required: true })
  inspiration!: InspirationInfo;

  @Input({alias: 'form'}) form!: CreativeBoomForm;

  creationDate: Date = new Date();
}
