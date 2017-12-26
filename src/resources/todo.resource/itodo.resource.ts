import { Query } from "mongoose";
import { ITodo } from "../../interfaces/itodo";
import { ITodoModel } from "../../models/itodo.model";

export interface ITodoResource {
  removeTodo(conditions: object): Promise<any>;
  getAllTodos(userId: string): Promise<ITodo[]>;
  getTodoById(id: string): Promise<ITodo>;
  addTodo(todo: ITodo): Promise<ITodo>;
}
