import { Component, OnInit, inject } from '@angular/core';
import { CreativeBoomItemComponent } from "../creative-boom-item/creative-boom-item.component";
import { ImageModel } from 'src/app/core/models/image/image.model';
import { InspirationInfo } from 'src/app/core/models/creative-boom/creative-boom.model';
import { CreativeBoomControl, CreativeBoomForm, ImageInfoControl, ImageInfoForm } from 'src/app/core/models/creative-boom/creative-boom-form.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-creative-boom-detail',
    standalone: true,
    templateUrl: './creative-boom-detail.component.html',
    styleUrl: './creative-boom-detail.component.scss',
    imports: [CreativeBoomItemComponent]
})
export class CreativeBoomDetailComponent implements OnInit {
  form: CreativeBoomForm = new FormGroup(<CreativeBoomControl>{});
  inspirationInfo!: InspirationInfo;

  private readonly route = inject(ActivatedRoute);

  constructor() {

  }

  ngOnInit(): void {
    const imageName = this.route.snapshot.params["imageName"];

    this._initForm();

    const image: ImageModel = {
      src: '../../../../assets/img-question/' + imageName,
    };

     this.inspirationInfo = {
      imageModel: image,
      description: `Illustrator Joseph Carrington on confronting what challenges you and the
       benefits of representation`,
      creationDate: new Date(),
    };
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
