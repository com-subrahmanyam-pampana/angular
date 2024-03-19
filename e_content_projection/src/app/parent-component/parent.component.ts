import { Component } from '@angular/core';
import {ChildComponent} from '../child-component/child.component'
import {ChildComponent2} from '../child2-component/child2.component'
@Component({
  selector: 'parent-component-page',
  standalone: true,
  imports: [ChildComponent,ChildComponent2],
  templateUrl: './parent.component.html'
})
export class ParentComponent {
 

}
