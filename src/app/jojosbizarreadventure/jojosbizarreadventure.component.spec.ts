import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JojosbizarreadventureComponent } from './jojosbizarreadventure.component';

describe('JojosbizarreadventureComponent', () => {
  let component: JojosbizarreadventureComponent;
  let fixture: ComponentFixture<JojosbizarreadventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JojosbizarreadventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JojosbizarreadventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
