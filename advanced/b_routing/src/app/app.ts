import { Component, signal } from '@angular/core';
import { RouterOutlet ,RouterModule} from '@angular/router';

import { LoginPage } from './login-page/login-page';
import { HomePage } from './home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,LoginPage,HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angulat_intro_20');
  name="Subbu"
}
