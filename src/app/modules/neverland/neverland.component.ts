import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';
import { MidjourneydigitalService } from 'src/app/core/services/api/midjourneydigital.service';
import { MidKeycloakService } from 'src/app/core/services/keycloak/mid.keycloak.service';
import {
  LanguageOption,
  TranslationCustomService,
} from 'src/app/core/services/translation/translation-custom.service';
import { ConfirmationService } from 'src/app/shared/components/confirmation-popup/confirmation.service';
import { MessageLevel } from 'src/app/shared/components/message-popup/message-level.enum';
import { MessagePopupComponent } from 'src/app/shared/components/message-popup/message-popup.component';
import { NeverlandImage } from 'src/app/shared/models/NeverlandImage';
import { environment } from 'src/environments/environment';
import * as NerverlandActions from '../neverland/state/neverland.actions';
import {
  selectAllProducts,
  selectProductLoading,
} from '../neverland/state/neverland.selectors';

@Component({
  selector: 'app-neverland',
  templateUrl: './neverland.component.html',
  styleUrls: ['./neverland.component.scss'],
})
export class NeverlandComponent {
  @ViewChild(MessagePopupComponent) messagePopup!: MessagePopupComponent;

  isCollapsed = true;
  urlInstagram = environment.URL_INSTAGRAM;
  urlTwitter = environment.URL_TWITTER;
  urlFaceBook = environment.URL_FACEBOOK;
  showTermsOfUsePopup: boolean = false;

  images: NeverlandImage[] = [];
  columnsImages: NeverlandImage[][] = [];

  imageIdToolTip: number | null = -1;
  downloadMode: boolean = false;
  selectedImages: { id: number; path: string }[] = [];
  showDialog = false;
  imageDialogDetailUrl: string = '';
  showingRequestFeaturePopup: boolean = false;
  isLoggedIn = false;

  products$ = this.store.select(selectAllProducts);
  productLoading$ = this.store.select(selectProductLoading);

  readonly maxAmountImageCanDownload: number =
    !!environment.MAX_AMOUNT_IMAGES_CAN_DOWNLOAD
      ? +environment.MAX_AMOUNT_IMAGES_CAN_DOWNLOAD
      : 4;

  constructor(
    private keycloakService: MidKeycloakService,
    private confirmationService: ConfirmationService,
    private midjourneydigitalService: MidjourneydigitalService,
    private store: Store,
    private translateService: TranslationCustomService
  ) {}

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    this.images = this._getImages();
    this.columnsImages = this._generateColumnsImages(this.images);

    this.isLoggedIn = this.keycloakService.isAuthenticated();

    this.productLoading$.subscribe((loading) => {
      console.log({ loading });
    });

    this.store.dispatch(NerverlandActions.loadProducts());

    this.productLoading$.subscribe((loading) => {
      console.log({ loading });
    });

    // this.midjourneydigitalService.getCounter().subscribe( testResponse => {
    //     console.log({testResponse});

    // })

    this.translateService.changeLanguage(LanguageOption.DE);
  }

  private _getImages(): NeverlandImage[] {
    const urlFolder = 'assets/img-manh/';
    // const numberOfImages = 323;
    const numberOfImages = 10;
    let result: NeverlandImage[] = [];

    for (let i = 1; i <= numberOfImages; i += 1) {
      const imgPath = urlFolder + i + '.jpg';
      let img: NeverlandImage = {
        id: i,
        path: imgPath,
        selected: false,
      };

      result.push(img);
    }

    return result;
  }

  private _generateColumnsImages(images: NeverlandImage[]) {
    const originalArray = images;
    const numberOfSub = 6;

    const subArrays = [];
    const chunkSize = Math.ceil(originalArray.length / numberOfSub);

    for (let i = 0; i < originalArray.length; i += chunkSize) {
      const chunk = originalArray.slice(i, i + chunkSize);
      subArrays.push(chunk);
    }

    return subArrays;
  }

  showRequestFeature() {
    // TODO: uncomment it when deploying
    this.showingRequestFeaturePopup = true;
  }

  closeRequestFeature() {
    this.showingRequestFeaturePopup = false;
  }

  onMouseOver(imageId: number): void {
    this.imageIdToolTip = imageId;
  }

  onMouseOut(): void {
    this.imageIdToolTip = null;
  }

  toggleDownloadMode(): void {
    // const products = this.midjourneydigitalService.getProducts();
    // console.log({ products });

    this.products$.subscribe((product) => {
      console.log({ product });
    });
    this.productLoading$.subscribe((loading) => {
      console.log({ loading });
    });

    // TODO: check again
    // this.confirmationService.requireConfirmLogin()
    //   .pipe(
    //     filter(isLoggedIn => isLoggedIn)
    //   )
    //   .subscribe(() => {
    //     this.downloadMode = !this.downloadMode;
    //     if (!this.downloadMode) {
    //       this.resetSelectedImages();
    //     }
    //   });
  }

  loginOrLogOut(): Promise<void> {
    if (this.isLoggedIn) {
      return this.keycloakService.logout();
    }

    return this.keycloakService.requireLogin();
  }

  onImageSelectedChange(image: NeverlandImage): void {
    if (!this.downloadMode) {
      return;
    }

    image.selected = !image.selected;

    if (image.selected) {
      this.selectedImages.push({ id: image.id, path: image.path });
    } else {
      const index = this.selectedImages.findIndex(
        (selected) => selected.id === image.id
      );
      if (index !== -1) {
        this.selectedImages.splice(index, 1);
      }
    }
  }

  resetSelectedImages(): void {
    this.images.forEach((image) => {
      image.selected = false;
    });
    this.selectedImages = [];
    this.downloadMode = false;
  }

  openTermsOfUsePopup(): void {
    this.showTermsOfUsePopup = true;
  }

  closeTermsOfUsePopup(): void {
    this.showTermsOfUsePopup = false;
  }

  onTermsAccepted(): void {
    this.closeTermsOfUsePopup();
    this._downloadSelectedImages();
    this.resetSelectedImages();
  }

  private _downloadSelectedImages(): void {
    if (!this.selectedImages || this.selectedImages.length === 0) {
      return;
    }

    if (this.selectedImages.length === 1) {
      this._downLoadSingleImage();
    } else {
      this._downloadMultipleImages();
    }
  }

  msgDevelopingFeature() {
    this.showMessage('This feature is developing');
  }

  showMessage(msg: string, level: MessageLevel = MessageLevel.Primary) {
    this.messagePopup.addMessage(msg, level);
  }

  private _downLoadSingleImage() {
    this.selectedImages.forEach((image) => this._downloadImage(image.path));
  }

  private async _downloadMultipleImages(): Promise<void> {
    const zip = new JSZip();
    const promises: Promise<void>[] = [];

    this.selectedImages.forEach((image) => {
      const filename = this._getFileNameFromPath(image.path);
      const promise = fetch(image.path)
        .then((response) => response.blob())
        .then((blob) => {
          zip.file(filename, blob);
        });

      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, 'images.zip');
      });
    });
  }

  selectAllImages(): void {
    if (!this.images || this.images.length < 1) {
      return;
    }

    this.selectedImages = [];
    const maxOfImageCanDownload = this.maxAmountImageCanDownload;

    if (this._getNumberOfImages() <= maxOfImageCanDownload) {
      this.images.forEach((image) => {
        image.selected = true;
        this.selectedImages.push({
          id: image.id,
          path: image.path,
        });
      });
    } else {
      let numberOfImageCanDownload = 0;
      this.images.forEach((image) => {
        numberOfImageCanDownload++;
        if (numberOfImageCanDownload > maxOfImageCanDownload) {
          return;
        }

        image.selected = true;

        this.selectedImages.push({
          id: image.id,
          path: image.path,
        });
      });
    }
  }

  isShowStoryImage(imageId: number): boolean {
    return imageId === this.imageIdToolTip && !this.downloadMode;
  }

  closeRatingDialog() {
    this.showDialog = false;
  }

  openRatingDialog(imageDialogDetailUrl: string) {
    this.msgDevelopingFeature();
    return;

    this.imageDialogDetailUrl = imageDialogDetailUrl;
    this.showDialog = true;
  }

  private _downloadImage(imagePath: string) {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = this._getFileNameFromPath(imagePath);
    link.target = '_blank';
    link.click();
  }

  private _getFileNameFromPath(path: string): string {
    const startIndex = path.lastIndexOf('/') + 1;
    return path.substring(startIndex);
  }

  private _getNumberOfImages(): number {
    if (!this.images || this.images.length < 1) {
      return 0;
    }

    let count = 0;
    this.images.forEach((e) => count++);
    return count;
  }

  // openConfirmationPopup(): void {
  //   const message = 'Are you sure you want to perform this action?';
  //   const confirmActionCallback = this._performAction.bind(this);
  //   this.confirmationService.show(message, confirmActionCallback);
  // }

  // private _performAction() {
  //   console.log('Action performed!');
  //   // Implement your confirmed action logic here
  // }
}
