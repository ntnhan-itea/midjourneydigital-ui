import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeBoomHeaderComponent } from './creative-boom-header.component';

describe('CreativeBoomHeaderComponent', () => {
  let component: CreativeBoomHeaderComponent;
  let fixture: ComponentFixture<CreativeBoomHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreativeBoomHeaderComponent]
    });
    fixture = TestBed.createComponent(CreativeBoomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
