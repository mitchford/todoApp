import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../model/todo.model';
import {TodoServiceService} from '../todo-service.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {EditModalComponent} from '../../modal/edit-modal/edit-modal.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todoList: TodoModel[];

  constructor(private todoServiceService: TodoServiceService, private dialog: MatDialog) {
  }

  onCompleted(id: number) {
    this.todoServiceService.onCompleteItem(id);
  }

  onDelete(id: number) {
    this.todoServiceService.onDeleteItem(id);
  }

  onEditItem(id: number) {
    const todo = this.todoServiceService.getTodoById(id);
    const dialogRef = this.dialog.open(EditModalComponent, {data: {title: todo.title, description: todo.description}});
    dialogRef.afterClosed().subscribe(result => {
      todo.title = result.title;
      todo.description = result.description;
    });
    this.todoServiceService.editItems(todo);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }

}
