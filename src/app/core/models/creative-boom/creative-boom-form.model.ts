import {FormControl, FormGroup} from '@angular/forms';

export enum LobBranch {
  SACHVERSICHERUG = 'SACHVERSICHERUG',
  TECHNISCHE_VERSICHERUNG = 'TECHNISCHE_VERSICHERUNG',
  TRANSPORT_VERSICHERUNG = 'TRANSPORT_VERSICHERUNG',
  HAFTPFLICHT_VERSICHERUNG = 'HAFTPFLICHT_VERSICHERUNG',
  RECHTSSCHUTZ = 'RECHTSSCHUTZ',
  ASSISTANCE = 'ASSISTANCE',
}

export interface CommissionRateForm {
  commissionRate: FormControl<number>;
  rateDuration: FormControl<Date[]>;
}

export type OnwardCommissionRateForm = FormGroup<{
  current?: FormGroup<CommissionRateForm>;
  future?: FormGroup<CommissionRateForm>;
}>;

export type OnwardCommissionRateForms = FormGroup<{ [key in LobBranch]: OnwardCommissionRateForm }>;


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
