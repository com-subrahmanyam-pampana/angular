import { bootstrapApplication } from '@angular/platform-browser';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<div>Hello world!!</div>',
})
class AppComponent {

}

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
