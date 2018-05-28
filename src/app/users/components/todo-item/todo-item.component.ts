import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../core/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() changeTodo = new EventEmitter<Todo>();
  constructor() { }
  handleClick(todo: Todo) {
    this.changeTodo.emit(todo);
  }
  ngOnInit() {
  }
}
