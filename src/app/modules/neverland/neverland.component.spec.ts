import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeverlandComponent } from './neverland.component';

describe('NeverlandComponent', () => {
  let component: NeverlandComponent;
  let fixture: ComponentFixture<NeverlandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeverlandComponent]
    });
    fixture = TestBed.createComponent(NeverlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
