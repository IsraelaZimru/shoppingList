import { action, computed, makeObservable, observable } from "mobx";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoStoreModle {
  todos: TodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      status: computed,
    });
  }

  addTodo(title: string) {
    const item: TodoItem = {
      id: new Date().toISOString(),
      title,
      completed: false,
    };
    this.todos.push(item);
  }

  toggleTodo(id: string) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }

  get status() {
    let completed: number = 0;
    let remaining: number = 0;
    this.todos.forEach((todo) => {
      if (todo.completed) {
        completed++;
      } else {
        remaining++;
      }
    });
    return { completed, remaining };
  }
}

export const todoStore = new TodoStoreModle();
