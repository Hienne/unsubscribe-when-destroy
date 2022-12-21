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

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Có nhiều cách để thực hiện unsubscribe 1 subscription trong rxjs:
  - unsubscribe subscription trong ngOnDestroy của từng component
  - Sử dụng async pipe, nhưng async chỉ unsubscribe subsciption mà chính nó tạo ra mà thôi
  - Kế thừa Base class - class đã thực hiện unsubscribe trong OnDestroy (tư tưởng kế thừa) nhưng cách này sẽ không hiệu quả khi ta muốn component kế thừa 1 class khác hoặc component được kế thừa có thể sẽ chứa những logic code không cần thiết
  - Viết 1 destroy service và provide vào component cần dùng, với mỗi subscription ta sẽ takeUntil nó - tư tưởng composition (đấy là cách được implement trong project này)
