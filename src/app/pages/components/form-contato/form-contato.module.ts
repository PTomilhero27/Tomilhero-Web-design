import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContatoComponent } from './form-contato.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormContatoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    FormContatoComponent,
  ]
})
export class FormContatoModule { }
