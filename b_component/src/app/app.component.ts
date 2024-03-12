import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';


/*We are importing the component HomePageComponent */
/*Add HomePageComponent in the imports array */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
