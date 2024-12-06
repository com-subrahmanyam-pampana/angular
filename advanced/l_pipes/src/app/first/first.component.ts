import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, AsyncPipe,JsonPipe],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  today: number = Date.now();
  myObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  /*AsyncPipe*/
  greeting: Promise<string> | null = null;

  clicked() {
    this.greeting = new Promise<string>((resolve, reject) => {
      resolve('hi there!')
    });
  }

}
