import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEnderecoComponent } from './crud-endereco.component';

describe('CrudEnderecoComponent', () => {
  let component: CrudEnderecoComponent;
  let fixture: ComponentFixture<CrudEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEnderecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
