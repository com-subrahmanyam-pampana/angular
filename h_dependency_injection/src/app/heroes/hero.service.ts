import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// The @Injectable() decorator specifies that 
// Angular can use this class in the DI system.
/*
The metadata, providedIn: 'root', means that the HeroService
 is visible throughout the application.
*/
export class HeroService {

  constructor() { }

  getHeroes() { return ["hero1","hero2"]; }
}
