import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { ClienteRoutingModule } from './cliente-routing.module';
import { FormulalioComponent } from './formulalio/formulalio.component';
import {  TabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [
    FormulalioComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    TableModule
  ]
})
export class ClienteModule { }
