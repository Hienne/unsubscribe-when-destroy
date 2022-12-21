import { Component, OnInit } from '@angular/core';
import { Observable, takeUntil, tap } from 'rxjs';
import { injectDestroyService, provideDestroyService } from '../describe-destroy-service';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  providers: [provideDestroyService()]
})
export class DestroyComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  private readonly destroy$ = injectDestroyService();

  private todoList$: Observable<any> = this.todoService.getTodoList();

  ngOnInit(): void {
    this.todoList$.pipe(
      takeUntil(this.destroy$),
      tap((res: any) => console.log(res))
    ).subscribe();
  }
}
