import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {

  public cards = [
    {
      titulo: 'Desenvolvimento WEB',
      descricao: 'Sistemas WEB para automatização de processos e webSites em geral',
      src: 'laptop-code',
    },
    {
      titulo: 'Desenvolvimento de Apps',
      descricao: 'Aplicativos sob medida nas plataformas android e iOS para sua empresa',
      src: 'mobile',
    },

    {
      titulo: 'Suporte e melhorias',
      descricao: 'suporte e melhorias para sistemas já existentes em sua empresa',
      src: 'chart-line',
    }
  ]

  @Output() link: EventEmitter<any> = new EventEmitter();

  constructor() { }

  linkPage() {
    this.link.emit("contato")
  }

  ngOnInit() {
  }

}
