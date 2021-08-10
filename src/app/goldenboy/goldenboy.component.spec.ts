import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenboyComponent } from './goldenboy.component';

describe('GoldenboyComponent', () => {
  let component: GoldenboyComponent;
  let fixture: ComponentFixture<GoldenboyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenboyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
