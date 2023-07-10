import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavComponentComponent } from './left-nav-component.component';

describe('LeftNavComponentComponent', () => {
  let component: LeftNavComponentComponent;
  let fixture: ComponentFixture<LeftNavComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftNavComponentComponent]
    });
    fixture = TestBed.createComponent(LeftNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
