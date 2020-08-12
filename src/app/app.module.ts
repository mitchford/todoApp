import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { CompletedTodoListComponent } from './todo/completed-todo-list/completed-todo-list.component';
import { InProgressTodoListComponent } from './todo/in-progress-todo-list/in-progress-todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EditModalComponent } from './modal/edit-modal/edit-modal.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoListComponent,
    CompletedTodoListComponent,
    InProgressTodoListComponent,
    TodoFormComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
