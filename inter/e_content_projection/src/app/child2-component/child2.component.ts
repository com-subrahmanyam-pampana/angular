import { Component, Input } from '@angular/core';

@Component({
  selector: 'child2-component',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html'
})
export class ChildComponent2  {
  
  @Input() question?: string;
  @Input() questionNumber?: number;

}
