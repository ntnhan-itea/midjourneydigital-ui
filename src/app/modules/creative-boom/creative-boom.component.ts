import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CreativeBoomControl,
  CreativeBoomForm,
  ImageInfoControl,
  ImageInfoForm,
} from '../../core/models/creative-boom/creative-boom-form.model';
import { InspirationInfo } from '../../core/models/creative-boom/creative-boom.model';
import { ImageModel } from '../../core/models/image/image.model';
import { CreativeBoomItemComponent } from './creative-boom-item/creative-boom-item.component';
import {CreativeBoomHeaderComponent} from "./creative-boom-header/creative-boom-header.component";

@Component({
  selector: 'app-creative-boom',
  standalone: true,
  imports: [CommonModule, CreativeBoomItemComponent, CreativeBoomHeaderComponent],
  templateUrl: './creative-boom.component.html',
  styleUrls: ['./creative-boom.component.scss'],
})
export class CreativeBoomComponent implements OnInit {
  images: Array<InspirationInfo> = [];
  form: CreativeBoomForm = new FormGroup(<CreativeBoomControl>{});

  ngOnInit(): void {
    this._initForm();

    const image: ImageModel = {
      src: '../../../../assets/img-question/keychain1.jpg',
    };
    const image2: ImageModel = {
      src: '../../../../assets/img-question/model1.jpg',
    };

    const inspirationInfo: InspirationInfo = {
      imageModel: image,
      description: `Illustrator Joseph Carrington on confronting what challenges you and the
       benefits of representation`,
      creationDate: new Date(),
    };

    const inspirationInfo2: InspirationInfo = {
      imageModel: image2,
      description: `Sam Twardy on how working in a grocery store got her back into illustration`,
      creationDate: new Date(),
    };

    this.images = [
      inspirationInfo,
      inspirationInfo2,
      inspirationInfo,
      inspirationInfo2,
      inspirationInfo,
      inspirationInfo2,
      inspirationInfo,
      inspirationInfo2,
      inspirationInfo,
      inspirationInfo2,
    ];
  }

  private _initForm(): void {
    const imgForm: ImageInfoForm = new FormGroup(<ImageInfoControl>{
      src: new FormControl<string>(''),
      alt: new FormControl<string>('This is alt of image'),
    });

    this.form = new FormGroup(<CreativeBoomControl>{
      description: new FormControl<string>('mo ta'),
      creationDate: new FormControl<Date>(new Date()),
      image: imgForm,
    });
  }
}
