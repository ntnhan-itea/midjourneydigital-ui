import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { InspirationInfo } from '../../../core/models/creative-boom/creative-boom.model';
import { CreativeBoomForm } from '../../../core/models/creative-boom/creative-boom-form.model';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creative-boom-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creative-boom-item.component.html',
  styleUrls: ['./creative-boom-item.component.scss'],
})
export class CreativeBoomItemComponent {
  @Input({ alias: 'inspiration' })
  inspiration!: InspirationInfo;

  @Input({ alias: 'form' }) form!: CreativeBoomForm;

  creationDate: Date = new Date();

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  viewDetail(src: string) {
    const match = src.match(/[^/]+$/);
    const filename = match ? match[0] : '';

    this.router.navigate([filename], { relativeTo: this.route });

    console.log('====');
  }
}
