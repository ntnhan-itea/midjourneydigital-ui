import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateChild1Component } from './navigate-child1.component';

describe('NavigateChild1Component', () => {
  let component: NavigateChild1Component;
  let fixture: ComponentFixture<NavigateChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigateChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
