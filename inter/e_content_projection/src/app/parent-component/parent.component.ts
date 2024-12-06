import { Component } from '@angular/core';
import {ChildComponent} from '../child-component/child.component'
import {ChildComponent2} from '../child2-component/child2.component'
import {ChildComponent3} from '../child3-component/child3.component'
import {ChildComponent4} from '../child4-component/child4.component'


@Component({
  selector: 'parent-component-page',
  standalone: true,
  imports: [ChildComponent,ChildComponent2,ChildComponent3,ChildComponent4],
  templateUrl: './parent.component.html'
})
export class ParentComponent {
 

}
