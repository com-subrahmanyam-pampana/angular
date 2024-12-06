import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  favoriteColorControl = new FormControl('');

  onSubmit(){
    console.log(this.favoriteColorControl.getRawValue())
  }

}
