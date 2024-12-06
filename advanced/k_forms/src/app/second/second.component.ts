import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  favoriteColor = '';

  onSubmit(){

  }
}



