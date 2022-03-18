import { Context, PersistentVector } from "near-sdk-as";
import { Todo } from "./models";

@nearBindgen
export class Contract {
  toDosList: PersistentVector<Todo> = new PersistentVector<Todo>("t");

  @mutateState()
  addToDo(text: string, assignee: string): Todo {
    let assignor: string = Context.sender;

    let todo: Todo = new Todo(text, assignor, assignee);
    this.toDosList.push(todo);
    return todo;
  }

  getTodos(): Array<Todo> {
    let toDos = new Array<Todo>(this.toDosList.length);
    for (let i = 0; i < this.toDosList.length; i++) {
      toDos[i] = this.toDosList[i];
    }
    return toDos;
  }
}