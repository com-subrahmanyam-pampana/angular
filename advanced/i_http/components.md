# Component
Components are the main building blocks for Angular applications. Each component consists of:

1.An HTML template that declares what renders on the page
2.A TypeScript class that defines behavior
3.A CSS selector that defines how the component is used in a template
4.Optionally, CSS styles applied to the template


# To generate the component from Angular cli 
ng generate component <your component name>
ng generate component home_page

This will create a component in the src

To use the component:
In our case "app-home-page" is the component selector name and 
the "HomePageComponent" is our component 
1.In the component file where you want to use the HomePageComponent ,import it.

import { HomePageComponent } from '../app/home-page/home-page.component';

@Component({
  imports: [RouterOutlet,HomePageComponent]
})

2.
<div class="content">
     <app-home-page></app-home-page>
</div>
