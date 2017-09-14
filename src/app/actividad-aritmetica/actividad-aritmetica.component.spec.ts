import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadAritmeticaComponent } from './actividad-aritmetica.component';

describe('ActividadAritmeticaComponent', () => {
  let component: ActividadAritmeticaComponent;
  let fixture: ComponentFixture<ActividadAritmeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadAritmeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadAritmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
