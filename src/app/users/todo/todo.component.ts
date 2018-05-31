import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from '../../core/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Todo } from '../../core/models/todo';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  private destroy = new Subject();
  public loading$ = new BehaviorSubject(true);
  public userId$ = new BehaviorSubject(1);
  constructor(
    private todosService: TodosService,
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    this.userId$.next(this.route.snapshot.params.id);
    this.userId$
      .asObservable()
      .pipe(
          switchMap( id => {
            this.loading$.next(true);
            return this.todosService.getTodos(id);
          })
      )
      .subscribe(
        res => {
          this.loading$.next(false);
          this.todos = res.body;
        }
      );
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }
  public changeTodo(todo: Todo) {
    this.todosService.changeCompleted(todo.id, !todo.completed)
      .subscribe(
        () => {
          this.ngOnInit();
        }
      );
  }
}
