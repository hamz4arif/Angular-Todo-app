import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  @Input() todos;
  constructor() {}
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (id == i) v.completed = !v.completed;
      return v;
    });
  }
  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  ngOnInit(): void {
    
  }
}
