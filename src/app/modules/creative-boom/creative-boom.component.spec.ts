import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeBoomComponent } from './creative-boom.component';

describe('CreativeBoomComponent', () => {
  let component: CreativeBoomComponent;
  let fixture: ComponentFixture<CreativeBoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreativeBoomComponent]
    });
    fixture = TestBed.createComponent(CreativeBoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
