import { Component, OnInit, Self } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { DestroyService } from './../destroy.service';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  providers: [DestroyService]
})
export class MyComponent implements OnInit {

  constructor(@Self() private destroys$: DestroyService, private todoService: TodoService) {}

  private todoList$: Observable<any> = this.todoService.getTodoList();

  ngOnInit(): void {
    this.todoList$.pipe(
      takeUntil(this.destroys$)
    ).subscribe();
  }

}
