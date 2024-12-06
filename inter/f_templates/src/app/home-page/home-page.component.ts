import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  /*In this Angular component we have a
   currentCustomer variable */
   currentCustomer = 'Maria';
   /*We used this in the html page as Text Interpolation */

   firstName = 'Enter your first name'
   /*Event Binding:On clicking the button this 
   method will fire
   */
   onButtonClicked(event:any){
     alert("You clicked me.....")
     console.log(event)
   }
  
}
