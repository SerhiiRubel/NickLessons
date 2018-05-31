import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo';
import { ApiUrls } from './api-urls';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private api: HttpClient) { }
  public getTodos(id) {
    const params = {
      userId: id
    }
    return this.api
      .get<Todo[]>(ApiUrls.todos, { params, observe: 'response' });
  }
  public changeCompleted(id: number, completed: boolean) {
    return this.api.patch(ApiUrls.todos + '/' + id, {'completed': completed});
  }
}
