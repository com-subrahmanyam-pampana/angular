import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple.component.html'
})
export class SimpleComponent {

  value: string = 'Joe';

}
