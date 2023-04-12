import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent implements OnInit {

  @Input() class: string = ''
  @Input() titulo: string = ''
  @Input() descricao: string = ''

  public texto = ''

  ngOnInit(): void {
    this.class !== "tw-bg-primary" ? this.texto = 'tw-text-text' : this.texto = 'tw-text-white'
  }

}
