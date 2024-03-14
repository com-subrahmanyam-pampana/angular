import { Component } from '@angular/core';
import {SimpleComponent} from '../simple-component/simple.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SimpleComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  currentItem = 'Television';

  addItem(event:any){
    console.log("I am in the parent:Received an event from child")
    console.log(event)
  }

}
