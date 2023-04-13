import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  linkPage(event: any) {
    const element = document.getElementById(event);
    if(element) element.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    this.animacao()
  }

  animacao() {
    const elements = this.el.nativeElement.querySelectorAll('.animacaoScroll');
    const triggerBottom = window.innerHeight / 2 * 4;
    fromEvent(window, 'scroll').subscribe(() => {
      elements.forEach((element: any) => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          this.renderer.addClass(element, 'show');
          this.renderer.removeClass(element, 'reverse');
        } else {
          this.renderer.addClass(element, 'reverse');
          setTimeout(() => {
            this.renderer.removeClass(element, 'show');
          }, 500);
        }
      });
    });
  }
  
  
  
}
