import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCategoriaPalavrasComponent } from './excluir-categoria-palavras.component';

describe('ExcluirCategoriaPalavrasComponent', () => {
  let component: ExcluirCategoriaPalavrasComponent;
  let fixture: ComponentFixture<ExcluirCategoriaPalavrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirCategoriaPalavrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirCategoriaPalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
