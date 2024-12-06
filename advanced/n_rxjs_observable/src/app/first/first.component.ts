
/*Create an observable from a counter */
import { Component } from '@angular/core';
import {interval } from 'rxjs';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html'
})
export class FirstComponent {

  constructor() {
    this.testObser()
  }

  testObser(){
       // Create an Observable that will publish a value on an interval
       const secondsCounter = interval(1000);
       // Subscribe to begin publishing values
       const subscription = secondsCounter.subscribe(n =>
         console.log(`It's been ${n + 1} seconds since subscribing!`));
  }

}
