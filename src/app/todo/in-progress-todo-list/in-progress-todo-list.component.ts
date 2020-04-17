import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TodoModel} from '../../model/todo.model';
import {TodoServiceService} from '../todo-service.service';
import {conditionallyCreateMapObjectLiteral} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-in-progress-todo-list',
  templateUrl: './in-progress-todo-list.component.html',
  styleUrls: ['./in-progress-todo-list.component.css']
})
export class InProgressTodoListComponent implements OnInit {

  inProgressTodos$: Observable<TodoModel[]>;

  constructor(private todoServiceService: TodoServiceService) {
    this.inProgressTodos$ = this.todoServiceService.inProgressTodos$;
  }

  ngOnInit(): void {
  }

}
