import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroineService {

  constructor() { }

  getHeroines() { return ["heroine1","heroine2"]; }
}
