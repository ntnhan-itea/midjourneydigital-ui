import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeBoomDetailComponent } from './creative-boom-detail.component';

describe('CreativeBoomDetailComponent', () => {
  let component: CreativeBoomDetailComponent;
  let fixture: ComponentFixture<CreativeBoomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeBoomDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreativeBoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
