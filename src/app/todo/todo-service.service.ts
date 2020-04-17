import {Injectable} from '@angular/core';
import {TodoModel} from '../model/todo.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {TodoStatus} from '../model/todo-status.enum';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  itemsUrl = 'http://192.168.0.16:8081/items';

  // tslint:disable-next-line:variable-name
  private _todoList$: BehaviorSubject<TodoModel[]> = new BehaviorSubject<TodoModel[]>([]);

  fetchItems(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.itemsUrl);
  }

  constructor(private http: HttpClient) {
    this.fetchItems().subscribe(todos => {
      this._todoList$.next(todos);
    });
  }

  get todoList$(): Observable<TodoModel[]> {
    return this._todoList$.asObservable();
  }

  get completedTodos$(): Observable<TodoModel[]> {
    return this.todoList$.pipe(map((todos: TodoModel[]) => todos.filter((todo: TodoModel) => todo.status === TodoStatus.COMPLETED)));
  }

  get inProgressTodos$(): Observable<TodoModel[]> {
    return this.todoList$.pipe(map((todos: TodoModel[]) => todos.filter((todo: TodoModel) => todo.status === TodoStatus.IN_PROGRESS)));
  }

  onDeleteItem(id: number) {
    const todos: TodoModel[] = this._todoList$.getValue();
    return this._todoList$.next(todos.filter((todo: TodoModel) => todo.id !== id));
  }

  onCompleteItem(id: number) {
    const todos: TodoModel[] = this._todoList$.getValue();
    return this._todoList$.next(todos.map((todo: TodoModel) => {
      const copiedTodo: TodoModel = {...todo};
      if (copiedTodo.id === id) {
        copiedTodo.status = TodoStatus.COMPLETED;
      }
      return copiedTodo;
    }));
  }

  addNewItem(item: TodoModel) {
    const todos: TodoModel[] = this._todoList$.getValue();
    return this._todoList$.next([...todos, item]);
  }

  getTodoById(id: number): TodoModel {
    const todos: TodoModel[] = this._todoList$.getValue();
    let selectedTodo;
    todos.forEach((todo: TodoModel) => {
      if (todo.id === id){
        selectedTodo = todo;
      }
    });
    return selectedTodo;
  }

  editItems(newTodo: TodoModel) {
    const todos: TodoModel[] = this._todoList$.getValue();
    return this._todoList$.next(todos.map((todo: TodoModel) => {
      let copiedTodo: TodoModel = {...todo};
      if (copiedTodo.id === newTodo.id) {
        copiedTodo = newTodo;
      }
      return copiedTodo;
    }));
  }
}
