import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

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

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  linkPage() {
    this.link.emit("contato")
  }

  ngOnInit() {
    this.animacao()
  }

  animacao() {
    const elements = this.el.nativeElement.querySelectorAll('.animacaoScroll');
    const triggerBottom = window.innerHeight / 6 * 4;
    fromEvent(window, 'scroll').subscribe(() => {
      elements.forEach((element: any) => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          this.renderer.addClass(element, 'show');
        } else {
          this.renderer.removeClass(element, 'show');
        }
      });
    });
  }
}
