import {FormControl, FormGroup} from '@angular/forms';

export enum TypeOfImage {
  NATURAL = 'NATURAL',
  ANIMAL = 'ANIMAL',
  FLYABLE = 'FLYABLE',
}

export interface ImageRateForm {
  commissionRate: FormControl<number>;
  rateDuration: FormControl<Date[]>;
}

export type TwoTypeImages = FormGroup<{
  old?: FormGroup<ImageRateForm>;
  new?: FormGroup<ImageRateForm>;
}>;

export type ImagesRatingForm = FormGroup<{ [key in TypeOfImage]: TwoTypeImages }>;


export interface ImageInfoControl {
  src: FormControl<string>;
  alt: FormControl<string>;
}

export type ImageInfoForm = FormGroup<ImageInfoControl>;

export interface CreativeBoomControl {
  image: ImageInfoForm;
  description: FormControl<string>;
  creationDate: FormControl<Date>;
}

export type CreativeBoomForm = FormGroup<CreativeBoomControl>;
