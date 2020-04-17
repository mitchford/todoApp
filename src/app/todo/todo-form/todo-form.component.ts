import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TodoModel} from '../../model/todo.model';
import {TodoStatus} from '../../model/todo-status.enum';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;

  constructor(private todoServiceService: TodoServiceService) { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newTodo: TodoModel = {id: this.getRandomInt(1000),
      title: value.title,
      description: value.description,
      status: TodoStatus.IN_PROGRESS};
    this.todoServiceService.addNewItem(newTodo);
    form.reset();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
