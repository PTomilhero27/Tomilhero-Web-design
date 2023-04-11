import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  linkPage(event: any) {
    const element = document.getElementById(event);
    if(element) element.scrollIntoView({ behavior: 'smooth' });
  }

}
