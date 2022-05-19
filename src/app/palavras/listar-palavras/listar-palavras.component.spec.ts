import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPalavrasComponent } from './listar-palavras.component';

describe('ListarPalavrasComponent', () => {
  let component: ListarPalavrasComponent;
  let fixture: ComponentFixture<ListarPalavrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPalavrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
