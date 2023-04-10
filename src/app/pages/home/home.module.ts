import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask';
import { SobreComponent } from './components/sobre/sobre.component'


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContatoComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskModule.forRoot()
    
  ]
})
export class HomeModule { }
