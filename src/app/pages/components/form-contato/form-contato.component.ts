import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss'],
})
export class FormContatoComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [null],
      email: [null],
      telefone: [null],
      descricao: [null],
    })
  }

  ngOnInit(): void {
    
  }

  enviar() {
    console.log(this.form.value);
  }

}
