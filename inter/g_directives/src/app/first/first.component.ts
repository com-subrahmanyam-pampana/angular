import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
   isSpecial =false;
   currentStyles: Record<string, string> = {};
   constructor(){
    this.currentStyles = {
      'font-style': this.isSpecial ? 'italic' : 'normal',
      'font-weight': !this.isSpecial ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };

    setTimeout(()=>{this.isSpecial=true},10000)
   }
  
}
