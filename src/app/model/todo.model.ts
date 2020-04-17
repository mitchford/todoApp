import {TodoStatus} from './todo-status.enum';

export interface TodoModel {
  id: number
  title: string;
  description: string;
  status: TodoStatus;
}
