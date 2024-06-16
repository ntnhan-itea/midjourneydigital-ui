import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateParentComponent } from './navigate-parent.component';

describe('NavigateParentComponent', () => {
  let component: NavigateParentComponent;
  let fixture: ComponentFixture<NavigateParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigateParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
