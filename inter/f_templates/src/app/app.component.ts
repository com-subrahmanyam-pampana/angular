import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SimpleComponent } from './simple-component/simple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,SimpleComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

    
}
