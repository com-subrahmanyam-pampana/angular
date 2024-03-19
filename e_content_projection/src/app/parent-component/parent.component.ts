import { Component } from '@angular/core';
import {ChildComponent} from '../child-component/child.component'

@Component({
  selector: 'parent-component-page',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  currentItem = 'Television';

  addItem(event:any){
    console.log("I am in the parent:Received an event from child")
    console.log(event)
  }

}
