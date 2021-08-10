import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraichamplooComponent } from './samuraichamploo.component';

describe('SamuraichamplooComponent', () => {
  let component: SamuraichamplooComponent;
  let fixture: ComponentFixture<SamuraichamplooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamuraichamplooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraichamplooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
