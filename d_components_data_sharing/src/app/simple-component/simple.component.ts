import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [],
  templateUrl: './simple.component.html'
})
export class SimpleComponent {
  @Input() item = ''; // decorate the property with @Input()

 
  /*Send data to parent component from this child component */
  @Output() newItemEvent = new EventEmitter<number>();

  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }

}
