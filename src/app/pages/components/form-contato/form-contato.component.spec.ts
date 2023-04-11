import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContatoComponent } from './form-contato.component';

describe('FormContatoComponent', () => {
  let component: FormContatoComponent;
  let fixture: ComponentFixture<FormContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
