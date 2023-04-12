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
    {href: 'tecnologia', titulo: "tecnologias"},
    {href: 'servicos', titulo: "serviços"},
    {href: 'contato', titulo: "Contato"},
    {href: '', titulo: "(11) 94178-0315"},
  ]


  linkHeader(link: string) {
    this.link.emit(link);
  }

}
