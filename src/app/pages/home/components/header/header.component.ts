import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public linksHeader = [
    {href: '', titulo: "Tomilhero27"},
    {href: '', titulo: "Nosso Trabalho"},
    {href: '', titulo: "O que fazemos"},
    {href: '', titulo: "Nossas tecnologias"},
    {href: '', titulo: "Contato"},
    {href: '', titulo: "(11) 94178-0315"},
  ]

}
