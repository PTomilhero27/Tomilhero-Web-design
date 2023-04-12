import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarContatoComponent } from './entrar-contato.component';

describe('EntrarContatoComponent', () => {
  let component: EntrarContatoComponent;
  let fixture: ComponentFixture<EntrarContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
