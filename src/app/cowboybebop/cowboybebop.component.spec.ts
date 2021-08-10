import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowboybebopComponent } from './cowboybebop.component';

describe('CowboybebopComponent', () => {
  let component: CowboybebopComponent;
  let fixture: ComponentFixture<CowboybebopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowboybebopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CowboybebopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
