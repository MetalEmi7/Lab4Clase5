import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeResultadoComponent } from './listado-de-resultado.component';

describe('ListadoDeResultadoComponent', () => {
  let component: ListadoDeResultadoComponent;
  let fixture: ComponentFixture<ListadoDeResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDeResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
