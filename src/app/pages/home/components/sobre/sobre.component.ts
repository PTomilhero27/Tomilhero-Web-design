import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  public itens = [
    {
      titulo: "Métodos",
      descricao: "Realizamos uma pesquisa detalhada para entregar projetos personalizados. As soluções entregues são eficazes e sob medida para cada cliente, com foco na satisfação e sucesso dos projetos.",
      src: "../../../../../assets/fontawesome-pro-5.15.4-web/svgs/regular/window.svg",
      alt: '',
    },
    {
      titulo: "Cultura Tecnológica",
      descricao: "Buscamos sempre estar atualizados em metodologias e tecnologias. Garantimos soluções modernas e eficientes com a melhor abordagem. Nossa equipe é capacitada para atender as exigências dos clientes.",
      src: "../../../../../assets/fontawesome-pro-5.15.4-web/svgs/regular/award.svg",
      alt: '',
    },
    {
      titulo: "Experiencias do usuário",
      descricao: "Valorizamos uma excelente experiência de uso. Para nós as soluções precisam ser funcionais e intuitivas.",
      src: "../../../../../assets/fontawesome-pro-5.15.4-web/svgs/regular/user-astronaut.svg",
      alt: '',
    },
    {
      titulo: "Entregas",
      descricao: "Para nós o prazo de entrega acordado é um compromisso assumido. Sabemos que o atraso de um projeto impacta diretamente o resultado dos nossos clientes",
      src: "../../../../../assets/fontawesome-pro-5.15.4-web/svgs/regular/truck.svg",
      alt: '',
    },
  ]

}
