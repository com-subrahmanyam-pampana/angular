import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-component',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() item = ''; // decorate the property with @Input()

 
  /*Send data to parent component from this child component */
  @Output() newItemEvent = new EventEmitter<number>();

  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }

}
