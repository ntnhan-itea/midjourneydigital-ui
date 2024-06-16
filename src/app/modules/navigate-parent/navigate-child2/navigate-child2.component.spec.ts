import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateChild2Component } from './navigate-child2.component';

describe('NavigateChild2Component', () => {
  let component: NavigateChild2Component;
  let fixture: ComponentFixture<NavigateChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigateChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
