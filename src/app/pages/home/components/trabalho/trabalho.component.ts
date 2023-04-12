import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.scss']
})
export class TrabalhoComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef){}

  public trabalho = [
    {
      titulo: "Atendimento",
      descricao: "Realizamos reuniões para compreender e planejar as ideias dos clientes sempre prezando em fornecer um atendimento de qualidade.",
      src: "user-headset",
      color: "atendimento"
    },

    {
      titulo: "Prototipação",
      descricao: "Iremos desenvolver os protótipos com o apoio de um especialista em UX. Após discussões, refinamentos e aprovação do cliente, iremos começar o desenvolvimento",
      src: "lightbulb-on",
      color: "prototipacao"
    },

    {
      titulo: "Desenvolvimento",
      descricao: "Iremos montar todo o cronograma do projeto, combinaremos reuniões semanais para apresentarmos as evoluções do projeto.",
      src: "code",
      color: 'desenvolvimento'
    },

    {
      titulo: "Homologação",
      descricao: "Vamos liberar o sistema para que o cliente possa acompanhar o desenvolvimento em partes e este será o momento que trataremos possíveis falhas de desenvolvimento.",
      src: "check-double",
      color: "homolog"
    },

    {
      titulo: "Produção",
      descricao: "Disponibilizaremos a solução em ambiente real e daremos apoio tecnico durante todo o período de garantia definido em contrato.",
      src: "globe",
      color: 'producao'
    },

    {
      titulo: "Suporte",
      descricao: "Realizamos a correção de qualquer defeito encontrado durante o prazo de garantia. Caso seja desejo do cliente, ele pode contratar o serviço de suporte",
      src: "laptop",
      color: 'suporte'
    },
  ]

  public hover: number = 0;
  public test: string[] = []

  ngOnInit(): void {
    this.trabalho.forEach(element => {
      this.test.push(`hover ${element.color}`)
    });

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
  


  acaoBotoesMetodos(index: number) {
    if(index == this.hover) this.hover = 0;
    else this.hover = index
  }

}
