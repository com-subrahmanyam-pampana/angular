import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';
import {SomeOtherPageComponent} from '../app/some-other-page/some-other-page.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,SomeOtherPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    /*Initialize the directive or component after 
    Angular first displays the data-bound properties 
    and sets the directive or component's input properties */
    console.log("ngOnInit:Called on component init.....")
  }
  ngOnChanges():void{
    console.log("ngOnChanges.....")
  }

  ngDoCheck():void{
    console.log("ngDoCheck.....")
  }

  ngAfterContentInit():void{
    console.log("ngAfterContentInit.....")
  }

  ngAfterContentChecked():void{
    console.log("ngAfterContentChecked.....")
  }

 
  ngAfterViewInit():void{
    console.log("ngAfterViewInit.....")
  }
  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked.....")
  }
  ngOnDestroy():void{
    /*
    This is the place to free resources that won't be garbage-collected automatically. You risk memory leaks if you neglect to do so.

    Unsubscribe from Observables and DOM events
    Stop interval timers
    Unregister all callbacks that the directive registered with global or application services

The ngOnDestroy() method is also the time to notify another part of the application that the component is going away.
    */
    console.log("ngOnDestroy.....")
  }
  
}
