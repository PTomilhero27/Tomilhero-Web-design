import { Component } from '@angular/core';

@Component({
  selector: 'app-entrar-contato',
  templateUrl: './entrar-contato.component.html',
  styleUrls: ['./entrar-contato.component.scss']
})
export class EntrarContatoComponent {

  itens = [
    {
      src: 'mobile',
      titulo: "(11) 94178-0315"
    },
    {
      src: 'envelope',
      titulo: "PTomilhero27@gmail.com"
    },
  ]

}
