import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathnoteComponent } from './deathnote.component';

describe('DeathnoteComponent', () => {
  let component: DeathnoteComponent;
  let fixture: ComponentFixture<DeathnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
