
/*Bootstraps is  an instance of an Angular 
application and renders a 
standalone component as 
the application's root component*/
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

/********Root component************/ 
/*The root component passed into this function must be a
standalone one (should have the standalone: true 
  flag in the @Component decorator config */

/*selector: ‘app-root’ means that Angular will look for 
the <app-root> element in the HTML 
(index.html file) and replace it
 with the template defined in AppComponent */
@Component({
  standalone: true,
  selector: 'app-root',
  template: '<div>Hello world!!</div>',
})
class AppComponent {

}

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
