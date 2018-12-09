import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';


import { DragDropModule } from '@angular/cdk/drag-drop';
import { PendientesComponent } from './componentes/pendientes/pendientes.component';
import { DeseadosComponent } from './componentes/deseados/deseados.component';
import { CompletadosComponent } from './componentes/completados/completados.component';
import { TodosComponent } from './componentes/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    PendientesComponent,
    DeseadosComponent,
    CompletadosComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
