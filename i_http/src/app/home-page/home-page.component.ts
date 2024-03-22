import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*app-home-page ia the component selector name*/
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  constructor(private http: HttpClient){
    
  
  }

  ngOnInit() {
    this.simpleGetCall().subscribe(
      (response) => { console.log(response) },
      (error) => { console.log(error); });
  }

  simpleGetCall() {
    const url="https://reqres.in/api/users?page=2";
    return this.http.get(url);
  }
}
