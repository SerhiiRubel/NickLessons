import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UserItemComponent } from './components/user-item/user-item.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgbPaginationModule
  ],
  declarations: [UserListComponent, UserItemComponent, TodoComponent, TodoItemComponent],
  exports: [UserListComponent, UserItemComponent, TodoComponent, TodoItemComponent]
})
export class UsersModule { }
