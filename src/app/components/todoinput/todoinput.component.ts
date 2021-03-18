import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css']
})
export class TodoinputComponent implements OnInit {
@Input() todos;
  constructor() { }
  inputTodo: string;
  addtodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
  ngOnInit(): void {
  }

}
