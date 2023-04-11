import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() link: EventEmitter<any> = new EventEmitter();

  public linksHeader = [
    {href: 'sobre', titulo: "Tomilhero27"},
    {href: 'trabalho', titulo: "Nosso Trabalho"},
    {href: '', titulo: "O que fazemos"},
    {href: '', titulo: "Nossas tecnologias"},
    {href: '', titulo: "Contato"},
    {href: '', titulo: "(11) 94178-0315"},
  ]


  linkHeader(link: string) {
    this.link.emit(link);
  }

}
