import { Component, ContentChild, TemplateRef  } from '@angular/core';
import {NgIf} from '@angular/common';
@Component({
  selector: 'child4-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './child4.component.html'
})
export class ChildComponent4  {

  isLoggedIn=true;

  
}
