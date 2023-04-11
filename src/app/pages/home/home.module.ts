import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TrabalhoComponent } from './components/trabalho/trabalho.component'
import { FormContatoModule } from '../components/form-contato/form-contato.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContatoComponent,
    SobreComponent,
    TrabalhoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,    
    FormContatoModule
  ]
})
export class HomeModule { }
