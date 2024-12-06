import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html'
})
export class SecondComponent {

  constructor() {
    const numberObservable = new Observable((observer) => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(count);
        count++;

        if (count > 5) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    });

    numberObservable.subscribe((number) => {
      console.log(number);
    });
  }

}
