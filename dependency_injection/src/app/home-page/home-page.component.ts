import { Component } from '@angular/core';
import { HeroService } from '../heroes/hero.service';

/*app-home-page ia the component selector name*/
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(heroService: HeroService){
    const heros=heroService.getHeroes();
    console.log(heros)
  }
}
