import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerserkComponent } from './berserk.component';

describe('BerserkComponent', () => {
  let component: BerserkComponent;
  let fixture: ComponentFixture<BerserkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerserkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerserkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
