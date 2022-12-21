# UnsubscribeWhenDestroy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Description
Có nhiều cách để thực hiện unsubscribe 1 subscription trong Angular component:
  - Unsubscribe subscription trong ngOnDestroy của component
  - Sử dụng async pipe, nhưng async chỉ unsubscribe subsciption mà chính nó tạo ra mà thôi
  - Kế thừa Base conponent class - class đã thực hiện unsubscribe trong OnDestroy (tư tưởng kế thừa) nhưng cách này sẽ không hiệu quả khi ta muốn component kế thừa 1 class khác hoặc component được kế thừa có thể sẽ chứa những logic code không cần thiết
  - Viết 1 destroy service và provide vào component cần dùng, với mỗi subscription ta sẽ takeUntil nó - tư tưởng composition (đấy là cách được implement trong project này)

## English
There are many ways to unsubscribe from 1 subsciption in the Angular component:
  - Unsubscribing the subscription in the ngOnDestroy method of a component
  - Using an async pipe, but async pipe only unsubscribes its subscription that it self created
  - Extending a Base component class, that unsubscribes subscriptions in the ngOnDestroy method (Inheritence Ideology). But this way has some adverse: a component class cannot extend another class or component class can have unnecessary logic code.
  - Using a Destroy service, then providing it into the component class. Then with each subscription, we need to use takeUntil operator (Composition Ideology). This way was implemented in this project.
