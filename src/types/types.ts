import { TODO_STATUS } from '../constants';

type TodoStatus = keyof typeof TODO_STATUS;

export interface ITodo {
  id: string;
  title: string;
  body: string;
  status: TodoStatus;
  labels: Array<String>;
  endDate: string;
}
