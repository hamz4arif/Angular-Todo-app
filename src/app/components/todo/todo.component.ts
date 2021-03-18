import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() {}
  title = 'todo app';
  inputTodo: string = '';
  addtodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }

  ngOnInit(): void {
    this.todos = [];
  }
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (id == i) v.completed = !v.completed;
      return v;
    });
  }
  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
 
}
