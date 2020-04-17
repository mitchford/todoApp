import { Component, OnInit } from '@angular/core';
import {TodoModel} from '../../model/todo.model';
import {Observable} from 'rxjs';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-completed-todo-list',
  templateUrl: './completed-todo-list.component.html',
  styleUrls: ['./completed-todo-list.component.css']
})
export class CompletedTodoListComponent implements OnInit {

  completedTodos$: Observable<TodoModel[]>;

  constructor(private todoServiceService: TodoServiceService) {
    this.completedTodos$ = this.todoServiceService.completedTodos$;
  }

  ngOnInit(): void {
  }

}
