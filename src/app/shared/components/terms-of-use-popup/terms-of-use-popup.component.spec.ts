import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfUsePopupComponent } from './terms-of-use-popup.component';

describe('TermsOfUsePopupComponent', () => {
  let component: TermsOfUsePopupComponent;
  let fixture: ComponentFixture<TermsOfUsePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsOfUsePopupComponent]
    });
    fixture = TestBed.createComponent(TermsOfUsePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
