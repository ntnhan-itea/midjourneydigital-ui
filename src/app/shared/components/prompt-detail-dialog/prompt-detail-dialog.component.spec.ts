import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptDetailDialogComponent } from './prompt-detail-dialog.component';

describe('PromptDetailDialogComponent', () => {
  let component: PromptDetailDialogComponent;
  let fixture: ComponentFixture<PromptDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptDetailDialogComponent]
    });
    fixture = TestBed.createComponent(PromptDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
