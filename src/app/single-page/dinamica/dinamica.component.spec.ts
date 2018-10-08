import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicaComponent } from './dinamica.component';

describe('DinamicaComponent', () => {
  let component: DinamicaComponent;
  let fixture: ComponentFixture<DinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
