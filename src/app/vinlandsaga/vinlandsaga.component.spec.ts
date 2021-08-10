import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinlandsagaComponent } from './vinlandsaga.component';

describe('VinlandsagaComponent', () => {
  let component: VinlandsagaComponent;
  let fixture: ComponentFixture<VinlandsagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinlandsagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinlandsagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
