import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {

  imgs = [
    {src: 'Javascript'},
    {src: 'html'},
    {src: 'nodejs'},
    {src: 'css'},
    {src: '.net'},
    {src: 'angular'},
    {src: 'java'},
    {src: 'react'},
    {src: 'react-native'},
    {src: 'ios'},
    {src: 'android'},
  ]

}
