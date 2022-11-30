import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AcceptedListComponent } from './acceptedlist/acceptedlist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    AcceptedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
