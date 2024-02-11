import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InspirationInfo } from '../../core/models/creative-boom/creative-boom.model';
import { ImageModel } from '../../core/models/image/image.model';
import { CreativeBoomItemComponent } from './creative-boom-item/creative-boom-item.component';

@Component({
  selector: 'app-creative-boom',
  standalone: true,
  imports: [CommonModule, CreativeBoomItemComponent],
  templateUrl: './creative-boom.component.html',
  styleUrls: ['./creative-boom.component.scss'],
})
export class CreativeBoomComponent implements OnInit {
  images: Array<InspirationInfo> = [];

  ngOnInit(): void {
    const image: ImageModel = {
      src: '../../../../assets/img-manh/1.jpg',
    };

    const inspirationInfo: InspirationInfo = {
      imageModel: image,
      description: `Illustrator Joseph Carrington on confronting what challenges you and the
       benefits of representation`,
      creationDate: new Date(),
    };

    this.images = [
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
      inspirationInfo,
    ];
  }
}
