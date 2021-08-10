import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmaComponent } from './fma.component';

describe('FmaComponent', () => {
  let component: FmaComponent;
  let fixture: ComponentFixture<FmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
