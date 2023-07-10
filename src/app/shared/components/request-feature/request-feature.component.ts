import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Counter } from 'src/app/shared/models/Counter';
import { MidjourneydigitalService } from 'src/app/core/services/api/midjourneydigital.service';

@Component({
  selector: 'app-request-feature',
  templateUrl: './request-feature.component.html',
  styleUrls: ['./request-feature.component.scss'],
})
export class RequestFeatureComponent implements OnInit {
  @Output('closeDialog') closeDialog: EventEmitter<void> =
    new EventEmitter<void>();

  counter: Counter | undefined = undefined;
  activeTab: number = 1; // Initially set active tab to Tab 1
  submitButtonTimeout: NodeJS.Timeout | undefined = undefined;
  optionsAnime: OptionAnime[] = [];
  questionsProduct: QuestionProduct[] = [];
  questionMidjourney: Midjourney[] = [];

  private _isSubmittable: boolean = true;

  constructor(private midjourneydigitalService: MidjourneydigitalService) {}

  ngOnInit(): void {
    this.activeTab = 1;
    this._setTimeOutForSubmitButton();

    this._initCounter();
  }

  private _initCounter() {
    this.midjourneydigitalService.getCounter().subscribe((counter) => {
      this.counter = counter;
      this._updateAninmeCounter(counter);
      this._updateProductAnime(counter);
      this._updateMidjourney(counter);
    });
  }

  private _updateAninmeCounter(counter: Counter) {
    this.optionsAnime = [
      {
        counter: counter?.anime?.naruto ?? -1,
        title: 'Naruto',
        isSelected: false,
      },
      {
        counter: counter?.anime?.demonSlayer ?? -1,
        title: 'Demon Slayer',
        isSelected: false,
      },
      {
        counter: counter?.anime?.attackOnTitan ?? -1,
        title: 'Attack on Titan',
        isSelected: false,
      },
      {
        counter: counter?.anime?.myHeroAcademia ?? -1,
        title: 'My Hero Academia',
        isSelected: false,
      },
      {
        counter: counter?.anime?.onePiece ?? -1,
        title: 'One Piece',
        isSelected: false,
      },
      {
        counter: counter?.anime?.dragonBall ?? -1,
        title: 'Dragon Ball',
        isSelected: false,
      },
      {
        counter: counter?.anime?.sailorMoon ?? -1,
        title: 'Sailor Moon',
        isSelected: false,
      },
      {
        counter: counter?.anime?.studioGhibli ?? -1,
        title: 'Studio Ghibli (e.g., Spirited Away, My Neighbor Totoro)',
        isSelected: false,
      },
    ];
  }

  private _updateProductAnime(counter: Counter) {
    this.questionsProduct = [
      {
        group: 'group1',
        label: 'I am interested in T-shirt products:',
        isChoose: true,
        images: [
          'assets/img-question/t-shirt1.jpg',
          'assets/img-question/t-shirt2.jpg',
        ],
        counter: counter?.product?.tshirt ?? -1,
      },
      {
        group: 'group2',
        label: 'I am interested in Figure model products:',
        isChoose: true,
        images: [
          'assets/img-question/model1.jpg',
          'assets/img-question/model2.jpg',
        ],
        counter: counter?.product?.figureModel ?? -1,
      },
      {
        group: 'group3',
        label: 'I am interested in Stickers:',
        isChoose: true,
        images: [
          'assets/img-question/sticker1.jpg',
          'assets/img-question/sticker2.jpg',
        ],
        counter: counter?.product?.sticker ?? -1,
      },
      {
        group: 'group4',
        label: 'I am interested in Keychain:',
        isChoose: true,
        images: [
          'assets/img-question/keychain1.jpg',
          'assets/img-question/keychain2.jpg',
        ],
        counter: counter?.product?.keyChain ?? -1,
      },
    ];
  }

  private _updateMidjourney(counter: Counter) {
    this.questionMidjourney = [
      {
        group: 'group1',
        label:
          'To earn a free Midjourney account, you are required to participate in voting for art images. The user who provides the most accurate votes for the top trending art will be granted the $30 Midjourney account. Are you interested in taking part in this voting process?',
        isChoose: true,
        images: [],
        counter: counter?.midjourney?.account ?? -1,
      },
      {
        group: 'group2',
        label: 'Would you like to get prompt detail for each images?',
        isChoose: true,
        images: [],
        counter: counter?.midjourney?.promptDetail ?? -1,
      },
      {
        group: 'group3',
        label:
          'Would you like have blogs/video tutorials about everything ( prompt, tips, tricks...) about Midjourney?',
        isChoose: true,
        images: [],
        counter: counter?.midjourney?.tutorial ?? -1,
      },
    ];
  }

  hasSelectedOptions(): boolean {
    return this._isSubmittable;
  }

  submitPopup() {
    let counter: Counter | undefined = undefined;

    if (this.activeTab === 1) {
      counter = this._updateCounterProduct();
    } else if (this.activeTab === 2) {
      counter = this._updateCounterAnime();
    } else if (this.activeTab === 3) {
      counter = this._updateCounterMidjourney();
    }

    this._updateCounter(counter);
    this.changeNextTab();
  }

  private changeNextTab() {
    if (this.activeTab === 1) {
      this.activeTab = 2;
      this._resetSubmitButtonTimeout();
    } else if (this.activeTab === 2) {
      this.activeTab = 3;
      this._resetSubmitButtonTimeout();
    } else if (this.activeTab === 3) {
      this.closePopup();
    }
  }

  private _setTimeOutForSubmitButton() {
    const one_second = 1000;
    const one_minute = 60 * one_second;

    this.submitButtonTimeout = setTimeout(() => {
      this._isSubmittable = false;
    }, 5 * one_minute);
  }

  private _resetSubmitButtonTimeout() {
    clearTimeout(this.submitButtonTimeout);
    this._isSubmittable = true;
    this._setTimeOutForSubmitButton();
  }

  private _updateCounter(counter: Counter | undefined) {
    if (!counter || !counter?.id) {
      return;
    }

    this.midjourneydigitalService
      .updateData(counter.id, counter)
      .subscribe((counterResponse: Counter) => {
        this._updateAninmeCounter(counterResponse);
        this._updateProductAnime(counterResponse);
        this._updateMidjourney(counterResponse);
      });
  }

  closePopup(): void {
    this.closeDialog.emit();
  }

  // Function to handle tab change
  changeTab(tabIndex: number): void {
    if (this.activeTab === 1 && tabIndex === 2) {
      this._resetSubmitButtonTimeout();
    }

    this.activeTab = tabIndex;
  }

  private _updateCounterAnime(): Counter {
    return {
      id: this.counter?.id,
      anime: {
        naruto: this._getSelectedAnimeCounter('Naruto'),
        demonSlayer: this._getSelectedAnimeCounter('Demon Slayer'),
        attackOnTitan: this._getSelectedAnimeCounter('Attack on Titan'),
        myHeroAcademia: this._getSelectedAnimeCounter('My Hero Academia'),
        onePiece: this._getSelectedAnimeCounter('One Piece'),
        dragonBall: this._getSelectedAnimeCounter('Dragon Ball'),
        sailorMoon: this._getSelectedAnimeCounter('Sailor Moon'),
        studioGhibli: this._getSelectedAnimeCounter(
          'Studio Ghibli (e.g., Spirited Away, My Neighbor Totoro)'
        ),
      },
      product: null,
      midjourney: null,
    };
  }

  private _updateCounterProduct(): Counter {
    return {
      id: this.counter?.id,
      anime: null,
      product: {
        tshirt: this._getSelectedProductCounter(
          'I am interested in T-shirt products:'
        ),
        figureModel: this._getSelectedProductCounter(
          'I am interested in Figure model products:'
        ),
        sticker: this._getSelectedProductCounter(
          'I am interested in Stickers:'
        ),
        keyChain: this._getSelectedProductCounter(
          'I am interested in Keychain:'
        ),
      },
      midjourney: null,
    };
  }

  private _updateCounterMidjourney(): Counter {
    return {
      id: this.counter?.id,
      anime: null,
      product: null,
      midjourney: {
        account: this._getSelectedMidjourney('group1'),
        promptDetail: this._getSelectedMidjourney('group2'),
        tutorial: this._getSelectedMidjourney('group3'),
      },
    };
  }

  private _getSelectedAnimeCounter(title: string): number {
    let optionAnime: OptionAnime | undefined = this.optionsAnime?.find(
      (e) => e.title === title
    );
    return optionAnime?.isSelected ? 1 : 0;
  }

  private _getSelectedProductCounter(title: string): number {
    let optionProduct: QuestionProduct | undefined =
      this.questionsProduct?.find((e) => e.label === title);

    return optionProduct?.isChoose ? 1 : 0;
  }

  private _getSelectedMidjourney(group: string): number {
    let optionProduct: QuestionProduct | undefined =
      this.questionsProduct?.find((e) => e.group === group);

    return optionProduct?.isChoose ? 1 : 0;
  }
}

interface QuestionProduct {
  group: string;
  label: string;
  isChoose: boolean;
  images: string[];
  counter: number;
}

interface Midjourney {
  group: string;
  label: string;
  isChoose: boolean;
  images: string[];
  counter: number;
}

interface OptionAnime {
  counter: number;
  title: string;
  isSelected: boolean;
}

interface OptionProduct {
  counter: number;
  title: string;
  isSelected: boolean;
}

interface Question {
  id: number;
  text: string;
  isChecked: boolean;
}
