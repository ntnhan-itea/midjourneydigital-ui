import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeBoomItemComponent } from './creative-boom-item.component';

describe('CreativeBoomItemComponent', () => {
  let component: CreativeBoomItemComponent;
  let fixture: ComponentFixture<CreativeBoomItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreativeBoomItemComponent]
    });
    fixture = TestBed.createComponent(CreativeBoomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
