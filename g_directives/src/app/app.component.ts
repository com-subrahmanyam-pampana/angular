import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent,SecondComponent,ThirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
